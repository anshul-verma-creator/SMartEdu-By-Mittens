# 🚀 QUICK START GUIDE

## First Time Setup (5 Minutes)

```bash
# 1. Navigate to project directory
cd "e:\VSCode prj\FINAL STUDENT ERP"

# 2. Install everything
npm run install-all

# 3. Initialize database (creates admin user)
npm run init

# 4. Start the system
npm run dev
```

## That's It! 🎉

- Open **http://localhost:3000** in your browser
- Login with:
  - Email: `admin@college.edu`
  - Password: `admin123`

---

## All Available Commands

### Installation & Setup
```bash
npm install                 # Install backend dependencies
npm install --prefix client # Install frontend dependencies
npm run install-all         # Install both at once
npm run init               # Initialize database + create admin
```

### Running the Application

#### Option 1: Development Mode (Recommended)
```bash
npm run dev                # Runs backend + frontend together
```

#### Option 2: Run Separately
```bash
npm run server             # Backend only (Terminal 1)
npm run client             # Frontend only (Terminal 2)
```

#### Option 3: Production Mode
```bash
npm run build              # Build frontend
npm start                  # Start backend (serves built frontend)
```

### Testing
```bash
npm run test              # Run integration tests
```

### Building
```bash
npm run build             # Build React app for production
```

---

## What Each Port Does

| Port | Service | URL |
|------|---------|-----|
| 3000 | React Frontend | http://localhost:3000 |
| 5000 | Backend API | http://localhost:5000 |
| - | WebSocket (Socket.IO) | ws://localhost:5000 |

---

## Access Points

### Frontend (User Interface)
```
http://localhost:3000
```
All pages are proxied through to the backend API at `:5000`

### Backend API (Development Testing)
```
http://localhost:5000/api/health          # Check server status
http://localhost:5000/api/students        # Test API (needs auth)
```

### Database
```
Location: data/student_management.db
Type: SQLite3
Auto-created during: npm run init
```

---

## Default Login Credentials

```
Email:    admin@college.edu
Password: admin123
```

⚠️ **IMPORTANT**: Change these credentials in production!

---

## Troubleshooting Quick Fixes

### "Port 5000 already in use"
```bash
# Edit .env file
PORT=5001
# Then restart: npm run dev
```

### "Database not found"
```bash
# Reinitialize
npm run init
```

### "Can't connect to frontend"
```bash
# Check backend is running
curl http://localhost:5000/api/health

# Verify package.json proxy setting:
# "proxy": "http://localhost:5000"
```

### "Socket.IO connection failed"
1. Ensure backend is running: `npm run server`
2. Check browser console for errors (F12)
3. Verify firewall allows port 5000
4. Check .env has correct URLs

### "Login fails"
1. Make sure database is initialized: `npm run init`
2. Check admin user exists: run `npm run init` again
3. Check backend is running: see logs

---

## File Locations Quick Reference

### Key Files
```
Project Root
├── server/index.js              ← Backend entry point
├── client/src/App.js            ← Frontend entry point
├── package.json                 ← Backend config
├── client/package.json          ← Frontend config
├── .env                         ← Environment variables
└── data/
    └── student_management.db    ← Database file
```

### Import Locations
```
Frontend:    client/src/pages/  (Login, Dashboard, etc.)
Backend API: server/routes/     (students, fees, etc.)
Database:    server/config/database.js
Auth:        server/middleware/auth.js
```

---

## Features Available

✅ **Admission Management** - Apply, review, approve applications  
✅ **Student Management** - Create, update student profiles  
✅ **Fee Collection** - Record payments, generate receipts  
✅ **Hostel Allocation** - Assign rooms, track occupancy  
✅ **Exam Records** - Record marks, calculate grades  
✅ **Dashboard** - View statistics and reports  
✅ **Real-time Updates** - Live notifications via Socket.IO  
✅ **PDF Receipts** - Generate fee receipt PDFs  

---

## Development vs Production

### Development
```bash
npm run dev                    # Start both servers
NODE_ENV=development          # In .env
```
- Hot reload enabled
- Detailed error messages
- Debug logging

### Production
```bash
npm run build                  # Build frontend
NODE_ENV=production npm start  # Start backend
```
- Optimized build
- Minimal error messages
- Better performance

---

## Environment Variables (.env)

```env
# Server Configuration
PORT=5000                      # Backend port
NODE_ENV=development           # development or production

# JWT Secret (CHANGE IN PRODUCTION!)
JWT_SECRET=your-secret-key

# URLs
CLIENT_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000

# Optional
DATABASE_PATH=./data/student_management.db
API_TIMEOUT=30000
MAX_FILE_SIZE=50mb
```

---

## Useful npm Scripts Explained

| Script | What It Does | When to Use |
|--------|-------------|------------|
| `npm install-all` | Install all dependencies | First time setup |
| `npm run init` | Create database + admin user | First time setup |
| `npm run dev` | Start backend + frontend | Development |
| `npm run server` | Start backend only | Testing API separately |
| `npm run client` | Start frontend only | Testing frontend separately |
| `npm start` | Start backend (production) | Production deployment |
| `npm run build` | Build React app | Before production deployment |

---

## Common Workflows

### Fresh Start
```bash
npm run install-all
npm run init
npm run dev
```

### Continue Development
```bash
npm run dev
```

### Run Backend Tests
```bash
npm run server
# In another terminal, use Postman or curl to test API
```

### Prepare for Deployment
```bash
npm run build
# Then deploy with: NODE_ENV=production npm start
```

---

## Windows Batch Script

We've provided `START_DEV.bat` for Windows users:

```batch
START_DEV.bat
```

This script will:
1. Check Node.js installation
2. Install dependencies if needed
3. Initialize database if needed
4. Start development servers
5. Display server URLs

Double-click `START_DEV.bat` to start everything!

---

## Getting Help

1. **Check documentation**:
   - FIX_SUMMARY.md - What was fixed
   - FIXES_AND_INTEGRATION.md - Detailed integration guide
   - SETUP_COMPLETE.md - Setup instructions

2. **Check logs**:
   - Terminal shows backend logs
   - Browser console (F12) shows frontend logs

3. **Verify setup**:
   - Visit http://localhost:5000/api/health
   - Check database exists: `data/student_management.db`
   - Check .env file is present

---

## Quick Reference: What Runs Where

```
Frontend React App
    ↓
http://localhost:3000
    ↓
Proxies to Backend
    ↓
http://localhost:5000 (Express.js + SQLite)
    ↓
Real-time WebSocket
    ↓
Socket.IO on port 5000
```

---

## Expected Console Output

When you run `npm run dev`, you should see:

```
Backend:
  ╔════════════════════════════════════════════════════════╗
  ║     ERP Student Management System Server               ║
  ║     Server running on: http://localhost:5000          ║
  ║     Features:                                         ║
  ║     ✓ Admission Management                            ║
  ║     ✓ Student Database                                ║
  ║     ... (more features listed)                        ║
  ╚════════════════════════════════════════════════════════╝

Frontend:
  On Your Network: http://192.168.x.x:3000
  Local: http://localhost:3000
```

---

## Success Checklist ✅

After running `npm run dev`, verify:

- [ ] Backend starts without errors
- [ ] "Database tables created successfully" message appears
- [ ] Frontend loads at http://localhost:3000
- [ ] No console errors in browser (F12)
- [ ] Can login with admin@college.edu / admin123
- [ ] Dashboard loads and shows statistics
- [ ] Can navigate between pages

If all checked, system is working! 🎉

---

## Next Steps

1. **Explore the Interface** - Try all pages and features
2. **Add Test Data** - Create admissions, students, etc.
3. **Test Real-time** - Watch Socket.IO updates work
4. **Read Documentation** - Review detailed guides
5. **Deploy** - Follow production instructions when ready

---

**Status**: ✅ Ready to Use  
**Version**: 1.0.0  
**Last Updated**: November 2024

Enjoy your Student ERP System! 🚀
