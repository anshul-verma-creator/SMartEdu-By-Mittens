const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Data storage
const dataFile = path.join(__dirname, 'data.json');

function loadData() {
    try {
        if (fs.existsSync(dataFile)) {
            return JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        }
    } catch (err) {
        console.error('Error loading data:', err);
    }
    return {
        students: [],
        admissions: [],
        fees: [],
        hostel: [],
        exams: []
    };
}

function saveData(data) {
    try {
        fs.writeFileSync(dataFile, JSON.stringify(data, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Error saving data:', err);
        return false;
    }
}

// ============================================
// API Routes
// ============================================

// Get all data
app.get('/api/data', (req, res) => {
    res.json(loadData());
});

// Save data
app.post('/api/data', (req, res) => {
    const data = req.body;
    if (saveData(data)) {
        res.json({ success: true, message: 'Data saved successfully' });
    } else {
        res.status(500).json({ success: false, message: 'Error saving data' });
    }
});

// Admission endpoints
app.get('/api/admissions', (req, res) => {
    const data = loadData();
    res.json(data.admissions);
});

app.post('/api/admissions', (req, res) => {
    const data = loadData();
    const admission = req.body;
    admission.id = 'ADM' + String(data.admissions.length + 1).padStart(3, '0');
    data.admissions.push(admission);
    saveData(data);
    res.json({ success: true, admission });
});

// Students endpoints
app.get('/api/students', (req, res) => {
    const data = loadData();
    res.json(data.students);
});

app.post('/api/students', (req, res) => {
    const data = loadData();
    const student = req.body;
    student.id = 'STU' + String(data.students.length + 1).padStart(3, '0');
    data.students.push(student);
    saveData(data);
    res.json({ success: true, student });
});

// Fees endpoints
app.get('/api/fees', (req, res) => {
    const data = loadData();
    res.json(data.fees);
});

app.post('/api/fees', (req, res) => {
    const data = loadData();
    const fee = req.body;
    fee.id = 'FEE' + String(data.fees.length + 1).padStart(3, '0');
    data.fees.push(fee);
    saveData(data);
    res.json({ success: true, fee });
});

// Hostel endpoints
app.get('/api/hostel', (req, res) => {
    const data = loadData();
    res.json(data.hostel);
});

app.post('/api/hostel', (req, res) => {
    const data = loadData();
    const allocation = req.body;
    allocation.id = 'HST' + String(data.hostel.length + 1).padStart(3, '0');
    data.hostel.push(allocation);
    saveData(data);
    res.json({ success: true, allocation });
});

// Exams endpoints
app.get('/api/exams', (req, res) => {
    const data = loadData();
    res.json(data.exams);
});

app.post('/api/exams', (req, res) => {
    const data = loadData();
    const exam = req.body;
    exam.id = 'EXM' + String(data.exams.length + 1).padStart(3, '0');
    data.exams.push(exam);
    saveData(data);
    res.json({ success: true, exam });
});

// Dashboard statistics
app.get('/api/dashboard', (req, res) => {
    const data = loadData();
    
    const stats = {
        totalStudents: data.students.length,
        pendingAdmissions: data.admissions.filter(a => a.status === 'Pending').length,
        totalFeeCollected: data.fees.reduce((sum, f) => sum + (f.status === 'Paid' ? f.amount : 0), 0),
        hostelOccupancy: (data.hostel.length / 60) * 100,
        admissions: data.admissions.slice(-5),
        recentFees: data.fees.slice(-5)
    };
    
    res.json(stats);
});

// Reports endpoints
app.get('/api/reports/admission', (req, res) => {
    const data = loadData();
    const report = {
        total: data.admissions.length,
        approved: data.admissions.filter(a => a.status === 'Approved').length,
        pending: data.admissions.filter(a => a.status === 'Pending').length,
        rejected: data.admissions.filter(a => a.status === 'Rejected').length,
        averageScore: data.admissions.length > 0 ? 
            (data.admissions.reduce((sum, a) => sum + a.score, 0) / data.admissions.length).toFixed(2) : 0
    };
    res.json(report);
});

app.get('/api/reports/fees', (req, res) => {
    const data = loadData();
    const totalCollected = data.fees.reduce((sum, f) => sum + (f.status === 'Paid' ? f.amount : 0), 0);
    const totalPending = data.fees.reduce((sum, f) => sum + (f.status === 'Pending' ? f.amount : 0), 0);
    
    const report = {
        totalRecorded: data.fees.reduce((sum, f) => sum + f.amount, 0),
        collected: totalCollected,
        pending: totalPending,
        collectionRate: data.fees.length > 0 ? ((totalCollected / (totalCollected + totalPending)) * 100).toFixed(2) : 0
    };
    res.json(report);
});

app.get('/api/reports/hostel', (req, res) => {
    const data = loadData();
    const occupiedRooms = data.hostel.filter(h => h.status === 'Occupied').length;
    
    const report = {
        totalCapacity: 60,
        occupied: occupiedRooms,
        vacant: 60 - occupiedRooms,
        occupancyPercent: ((occupiedRooms / 60) * 100).toFixed(2)
    };
    res.json(report);
});

// Backup endpoint
app.post('/api/backup', (req, res) => {
    const data = loadData();
    const backupFile = path.join(__dirname, `backup_${new Date().toISOString().split('T')[0]}.json`);
    
    try {
        fs.writeFileSync(backupFile, JSON.stringify(data, null, 2), 'utf8');
        res.json({ success: true, message: 'Backup created successfully', file: backupFile });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Error creating backup' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toLocaleString(),
        version: '1.0.0'
    });
});

// Serve index.html for all other routes (SPA)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

// Start server
app.listen(PORT, () => {
    console.log(`
    ╔════════════════════════════════════════════════════════╗
    ║     ERP Student Management System Server               ║
    ║                                                        ║
    ║     Server running on: http://localhost:${PORT}       ║
    ║     Press Ctrl+C to stop the server                   ║
    ║                                                        ║
    ║     Features:                                         ║
    ║     ✓ Admission Management                            ║
    ║     ✓ Fee Collection & Receipts                       ║
    ║     ✓ Hostel Allocation & Tracking                    ║
    ║     ✓ Examination Records                             ║
    ║     ✓ Student Database                                ║
    ║     ✓ Reports & Analytics                             ║
    ║     ✓ Data Backup & Export                            ║
    ║                                                        ║
    ║     Default Admin Access Available                    ║
    ╚════════════════════════════════════════════════════════╝
    `);
});
