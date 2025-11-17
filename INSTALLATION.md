# Installation & Quick Start Guide

## Prerequisites Check

Before installation, ensure you have:

- [ ] Node.js v12 or higher installed
- [ ] npm (comes with Node.js)
- [ ] Git (for version control)
- [ ] A code editor (VS Code recommended)
- [ ] 100MB free disk space
- [ ] Internet connection for npm packages

### Check Your System

#### Windows
```powershell
# Check Node.js
node --version

# Check npm
npm --version
```

#### macOS / Linux
```bash
# Check Node.js
node --version

# Check npm
npm --version
```

Expected output: v12.0.0 or higher

---

## Installation Steps

### Step 1: Download/Clone Project

**Option A: Using Git**
```bash
git clone https://github.com/your-repo/erp-student-management.git
cd erp-student-management
```

**Option B: Manual Download**
1. Download project ZIP file
2. Extract to desired location
3. Open terminal in extracted folder

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- express@4.18.2
- body-parser@1.20.2
- cors@2.8.5

**Wait time:** 1-3 minutes depending on internet speed

### Step 3: Verify Installation

```bash
# List installed packages
npm list

# Check if all dependencies installed successfully
npm ls --depth=0
```

Expected output should show all three packages with versions.

### Step 4: Start the Server

```bash
npm start
```

Or directly:

```bash
node server.js
```

**Success indicators:**
- Server console shows startup message
- Displays: "http://localhost:3000"
- Shows "All systems operational"

### Step 5: Access the Application

1. Open web browser
2. Navigate to: `http://localhost:3000`
3. System should load with dashboard visible
4. Sample data pre-loaded and ready to use

---

## Troubleshooting Installation

### Issue: npm: command not found
**Solution:**
- Install Node.js from https://nodejs.org/
- Restart terminal after installation
- Verify: `node --version`

### Issue: Port 3000 already in use
**Solution:**
```bash
# Windows: Find process using port 3000
netstat -ano | findstr :3000

# Kill the process
taskkill /PID <PID> /F

# Or change port in server.js
# Change line: const PORT = process.env.PORT || 3000;
```

### Issue: npm install fails
**Solution:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules
rm -r node_modules

# Try install again
npm install
```

### Issue: Server won't start
**Solution:**
- Check for syntax errors: `node -c server.js`
- Review error message in console
- Check if all files present
- Verify Node.js version is v12+

---

## First-Time Configuration

### 1. Initial Login
- System loads with admin access
- No password required for prototype
- User role shows "Admin"

### 2. Navigate System
- Use left sidebar to access modules
- Dashboard opens by default
- Sample data pre-loaded

### 3. Explore Modules
1. **Dashboard** - View key metrics
2. **Admissions** - See sample applications
3. **Fee Collection** - View payment records
4. **Hostel** - Check allocations
5. **Examination** - View exam records
6. **Student Database** - See all students
7. **Reports** - Generate analytics
8. **Settings** - Backup data

### 4. Test Basic Functionality
- Add new admission application
- Record a fee payment
- Allocate hostel room
- Enter exam result
- Generate report
- Create backup

---

## Running the System

### Development Mode
```bash
npm start
```
- Auto-restarts on file changes
- Shows detailed console logs
- Good for testing and development

### Production Mode
```bash
NODE_ENV=production npm start
```
- Optimized performance
- Minimal logging
- Better error handling

### Run in Background

**Windows:**
```powershell
Start-Process node server.js
```

**macOS/Linux:**
```bash
nohup node server.js &
```

### Stop the Server
- Press `Ctrl + C` in terminal where server runs
- Or kill process using port 3000

---

## File Structure

```
erp-student-management/
├── public/
│   ├── index.html          (Main UI)
│   ├── app.js              (Frontend logic)
│   ├── styles.css          (Main styling)
│   └── dashboard.css       (Dashboard styles)
├── server.js               (Express server)
├── package.json            (Dependencies)
├── data.json               (Data storage)
├── README.md               (Documentation)
├── USER_GUIDE.md           (Usage guide)
├── INSTALLATION.md         (This file)
└── .gitignore              (Git exclusions)
```

---

## Database Initialization

The system uses JSON for data storage.

### Automatic Initialization
- `data.json` created automatically on first run
- Pre-populated with sample data
- Expands as new records added

### Manual Initialization
If `data.json` missing, create one:

```json
{
  "students": [],
  "admissions": [],
  "fees": [],
  "hostel": [],
  "exams": []
}
```

### Data Backup
```bash
# Backup current data
cp data.json data_backup_$(date +%Y%m%d).json
```

---

## Customization

### Change Default Port
Edit `server.js`:
```javascript
const PORT = process.env.PORT || 5000; // Changed from 3000
```

### Add Institution Name
Edit `server.js`:
```javascript
console.log('ERP System for Your College Name');
```

### Customize Colors
Edit `public/styles.css`:
```css
/* Change primary color */
background: linear-gradient(135deg, #your-color-1 0%, #your-color-2 100%);
```

---

## Next Steps After Installation

1. **Read Documentation**
   - Review README.md for features
   - Check USER_GUIDE.md for usage

2. **Test Features**
   - Create admissions
   - Record fees
   - Allocate hostels
   - Enter exams

3. **Data Backup**
   - Create first backup via Settings
   - Store in secure location

4. **Customize**
   - Add institution details
   - Modify colors and branding
   - Add custom fields

5. **Deploy**
   - Choose hosting platform
   - Configure domain
   - Set up SSL certificate

---

## Recommended Hosts for Deployment

- **Heroku** - Easy deployment, free tier available
- **DigitalOcean** - Affordable VPS hosting
- **AWS** - Scalable cloud platform
- **Replit** - Quick hosting for prototypes
- **Railway** - Modern deployment platform

---

## Performance Tips

1. **Database Optimization**
   - Archive old records monthly
   - Keep data.json under 10MB
   - Regular cleanup of test data

2. **Server Optimization**
   - Enable gzip compression
   - Implement caching
   - Use CDN for static files

3. **Client Optimization**
   - Use modern browser
   - Enable JavaScript
   - Clear browser cache regularly

---

## Security Best Practices

✓ Do's:
- ✓ Change default credentials (when auth implemented)
- ✓ Use HTTPS in production
- ✓ Backup data regularly
- ✓ Keep Node.js updated
- ✓ Review server logs
- ✓ Limit data.json access

✗ Don'ts:
- ✗ Share data.json file
- ✗ Run on public networks without firewall
- ✗ Keep demo data in production
- ✗ Use admin account for regular users

---

## Getting Help

### Documentation
- README.md - Project overview
- USER_GUIDE.md - Usage instructions
- This file - Installation guide

### Common Issues
- Check troubleshooting section above
- Review error messages in console
- Check browser console (F12)

### Community Support
- GitHub Issues
- Stack Overflow
- Official documentation

---

## Version Information

- **System Version:** 1.0.0
- **Node Version Required:** v12+
- **Last Updated:** November 2024
- **Status:** Production Ready

---

## Success Checklist

After installation, verify:

- [ ] Node.js and npm installed
- [ ] Dependencies installed (npm install successful)
- [ ] Server starts without errors
- [ ] Dashboard loads at http://localhost:3000
- [ ] Sample data visible in all modules
- [ ] Forms work and data saves
- [ ] Reports generate successfully
- [ ] Backup function works
- [ ] All navigation buttons functional

If all checked, **installation successful!** 🎉

---

**Enjoy using ERP Student Management System!**

For issues or questions, refer to the troubleshooting section or documentation files.
