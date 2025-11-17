# ERP Student Management System - User Guide

## Quick Start Guide

### System Access
1. Open web browser (Chrome, Firefox, Safari, or Edge)
2. Navigate to `http://localhost:3000`
3. System opens with admin access automatically
4. Use sidebar navigation to access different modules

---

## Module-by-Module Usage

### 📊 Dashboard

The Dashboard provides an at-a-glance view of your institution's operations.

**What You See:**
- **Total Students** - Count of all enrolled students
- **Pending Admissions** - Applications awaiting review
- **Fee Collection** - Amount collected this month
- **Hostel Occupancy** - Percentage of capacity used

**Recent Data:**
- Latest admission applications
- Outstanding fee records

**When to Use:**
- Every morning for daily status check
- To monitor key metrics
- Before administrative meetings

---

### 📝 Admission Management

Handle the complete admission lifecycle from application to enrollment.

#### Step 1: Submit Admission Application
1. Click "Admissions" in sidebar
2. Scroll to "New Admission Application" form
3. Fill in all required fields:
   - Full Name
   - Date of Birth
   - Gender
   - Email
   - Phone Number
   - Course Selection
   - 12th Score (%)
   - Address
4. Click "Submit Application"
5. Note the Application ID shown in confirmation

#### Step 2: Review Applications
1. Scroll to "Admission Applications" table
2. Review application details
3. Click "Approve" or "Reject" as appropriate

#### Step 3: Automatic Student Record Creation
- Upon approval, student record created automatically
- Student appears in Student Database
- Can now use other modules (fees, hostel, exams)

**Example Workflow:**
```
New Student → Apply for Admission → Application Pending
→ Admission Officer Reviews → Approved → Student Record Created
→ Student ID Generated (STU001) → Ready for Enrollment
```

---

### 💰 Fee Collection & Management

Track all financial transactions and generate receipts.

#### Record a Payment
1. Click "Fee Collection" in sidebar
2. Scroll to "Record Fee Payment" form
3. Select student from dropdown
4. Enter:
   - Amount in Rupees
   - Payment Date
   - Payment Method (Online/Cheque/Cash/Card)
   - Fee Type (Tuition/Hostel/Exam/Library/Other)
   - Reference Number (Transaction ID or Cheque #)
5. Click "Record Payment"
6. Receive confirmation with Receipt ID

#### Generate Receipt
1. After recording payment, scroll to "Generate Receipt" section
2. Click "Download Latest Receipt"
3. Receipt downloads as text file
4. Can be printed or emailed to student

#### View Fee History
1. Scroll to "Fee Payments Log" table
2. See all recorded payments
3. Check payment status and reference numbers
4. Filter by student if needed

**Fee Types:**
- Tuition - Course fees
- Hostel - Accommodation charges
- Examination - Exam related fees
- Library - Library membership fees
- Other - Miscellaneous fees

**Payment Methods:**
- Online Transfer - Bank transfers, UPI
- Cheque - Physical cheques
- Cash - Cash payments
- Card - Debit/Credit cards

---

### 🏢 Hostel Management & Allocation

Manage hostel room assignments and occupancy.

#### Allocate Room to Student
1. Click "Hostel Management" in sidebar
2. Scroll to "Allocate Hostel Room" form
3. Select student from dropdown
4. Choose:
   - Hostel Block (A/B/C/D)
   - Room Number (e.g., A101)
   - Bed Number (1-4)
   - Check-in Date
   - Semester
5. Click "Allocate Room"
6. Allocation confirmed

#### Monitor Occupancy
1. Scroll to "Hostel Occupancy Status" table
2. See capacity per block:
   - Block A (Boys) - 15 beds
   - Block B (Boys) - 15 beds
   - Block C (Girls) - 15 beds
   - Block D (Girls) - 15 beds
3. Check occupancy percentages

#### Manage Allocations
1. Scroll to "Current Allocations" table
2. View all room assignments
3. Click "Vacate" when student leaves
4. Frees up room for new allocation

**Room Naming Convention:**
- A/B/C/D = Block letter
- 1 = Floor (01-03)
- 01-04 = Room number
- Example: A101 = Block A, Floor 1, Room 01

---

### 📋 Examination Records & Grades

Enter and track student exam performance.

#### Record Exam Result
1. Click "Examination Records" in sidebar
2. Scroll to "Enter Exam Results" form
3. Select:
   - Student from dropdown
   - Semester
   - Subject Code (e.g., CS101)
   - Subject Name (e.g., Data Structures)
4. Enter:
   - Marks Obtained
   - Total Marks (usually 100)
   - Exam Date
5. Click "Save Result"
6. Result recorded and displayed

#### View Grade Distribution
1. Scroll to "Exam Records" table
2. See all exam entries
3. Percentages calculated automatically
4. Color-coded by performance:
   - 80%+ = Excellent (Green)
   - 60-79% = Good (Yellow)
   - <60% = Needs Improvement (Red)

#### Track Performance
- View subject-wise scores
- Compare semester performance
- Identify high and low performers

---

### 👥 Central Student Database

Access complete student information in one place.

#### Search for Students
1. Click "Student Database" in sidebar
2. Use search bar to find by:
   - Full name
   - Student ID (e.g., STU001)
   - Email address
3. Results filter in real-time

#### View Student Information
- Student ID
- Full Name
- Email Address
- Phone Number
- Enrolled Course
- Enrollment Date
- Current Status (Active/Inactive)
- 10+2 Score

#### Export Data
1. Click "Export to CSV" button
2. File downloads as "students_export.csv"
3. Open in Excel or Google Sheets
4. Can create custom reports

---

### 📈 Reports & Analytics

Generate comprehensive institutional reports.

#### Types of Reports

**Admission Report:**
- Total applications received
- Approved/Pending/Rejected count
- Conversion rate
- Average entrance score

**Fee Collection Report:**
- Total amount recorded
- Amount collected
- Amount pending
- Collection rate by fee type

**Hostel Report:**
- Total capacity vs. occupied beds
- Vacancy status
- Block-wise occupancy
- Utilization percentage

**Academic Report:**
- Average student performance
- Top performers list
- Grade distribution
- Semester-wise analysis

#### Generate Report
1. Click "Reports & Analytics" in sidebar
2. Click "Generate" button for desired report type
3. Report displays in popup window
4. Click button again to download as file
5. Use for strategic planning and analysis

**Report Uses:**
- Board meetings and presentations
- Academic planning
- Resource allocation
- Performance evaluation

---

### ⚙️ System Settings & Administration

Manage system data and user access.

#### Backup Data
1. Click "Settings" in sidebar
2. Click "Backup All Data"
3. File downloads (e.g., erp_backup_2024-11-14.json)
4. Contains all system data
5. Last backup timestamp displayed

#### Export All Data
1. Click "Export All Data"
2. JSON file downloads with all records
3. Useful for:
   - System migration
   - Data analysis
   - Compliance reports

#### System Information
- System Version: 1.0.0
- Last Backup timestamp
- System status (All systems operational)

---

## Common Tasks & Workflows

### Task 1: Complete New Student Admission
```
1. Student submits online application (Admissions module)
2. Officer reviews and approves (Admissions module)
3. System creates student record automatically
4. Hostel allocated if needed (Hostel module)
5. Initial fee collected (Fee Collection module)
6. Student appears in Database (Student Database module)
```

### Task 2: Process Monthly Fee Collection
```
1. Check outstanding fees (Dashboard)
2. Students pay fees (multiple methods)
3. Record each payment (Fee Collection module)
4. Generate receipts automatically
5. View collection status (Dashboard)
6. Generate monthly report (Reports module)
```

### Task 3: Manage Hostel Occupancy
```
1. View current occupancy (Dashboard)
2. Receive allocation request
3. Check available rooms (Hostel module)
4. Allocate room to eligible student
5. Monitor capacity (Occupancy Status table)
6. Process vacations and check-outs
```

### Task 4: Record Academic Performance
```
1. Exam held for students
2. Entrance scores tabulated
3. Results entered (Examination module)
4. Performance displayed in records
5. Generate academic report (Reports module)
6. Share report with academic staff
```

### Task 5: System Backup & Safety
```
1. End of week/month
2. Click Backup in Settings
3. Secure backup file downloaded
4. Store in safe location
5. Maintain multiple backups
6. Test restore if critical
```

---

## Tips & Best Practices

### ✓ Do's
- ✓ Backup data regularly (weekly recommended)
- ✓ Verify data accuracy before saving
- ✓ Use descriptive names for reference numbers
- ✓ Update student status promptly
- ✓ Review dashboard daily
- ✓ Export reports for records
- ✓ Check email addresses for validity

### ✗ Don'ts
- ✗ Delete records without backup
- ✗ Enter duplicate admissions
- ✗ Skip required fields in forms
- ✗ Leave system unattended while logged in
- ✗ Share admin access with unauthorized users
- ✗ Modify data.json directly
- ✗ Use outdated browser

---

## Troubleshooting

### Issue: Form won't submit
**Solution:**
- Check all required fields are filled (marked with *)
- Verify email format is correct
- Ensure phone number is valid
- Try browser refresh and retry

### Issue: Data not appearing
**Solution:**
- Refresh page (Ctrl+R or Cmd+R)
- Check network connection
- Verify JavaScript is enabled
- Clear browser cache

### Issue: Receipt won't download
**Solution:**
- Check popup blocker settings
- Disable ad-blocker temporarily
- Try different browser
- Ensure sufficient disk space

### Issue: Search not working
**Solution:**
- Check search term spelling
- Try partial names or IDs
- Verify data exists in system
- Clear search field and retry

### Issue: Can't allocate hostel room
**Solution:**
- Verify student is in database
- Check room isn't already allocated
- Confirm bed number is available
- Select valid block

---

## Keyboard Shortcuts

- **Ctrl + R** - Refresh page
- **Ctrl + P** - Print current page
- **F12** - Open browser developer tools
- **Escape** - Close popups/forms
- **Tab** - Navigate between form fields

---

## Frequently Asked Questions (FAQs)

**Q: Can I edit records after submission?**
A: Currently, the system shows submitted records. For modifications, delete and re-enter. Future versions will include edit functionality.

**Q: How many students can the system handle?**
A: The system is designed for institutions with 1000-5000 students. For larger volumes, consider database migration.

**Q: Can I access the system on mobile?**
A: Yes, the interface is responsive and works on tablets and smartphones.

**Q: Is my data secure?**
A: Data is stored locally on the server. Implement HTTPS and access controls for production use.

**Q: Can multiple users access simultaneously?**
A: Yes, the system supports concurrent access. Currently without role-based enforcement.

**Q: How do I import data from another system?**
A: Use the CSV format for bulk import. Contact support for custom data migration.

---

## Support & Feedback

- **Documentation:** See README.md for technical details
- **Issues:** Check troubleshooting section above
- **Feedback:** System is actively maintained and improved
- **Future Updates:** Check regularly for new features

---

**Last Updated:** November 2024  
**Version:** 1.0.0
