# Quick Start Guide

## Installation (5 minutes)

1. **Install dependencies**
   ```bash
   npm install
   cd client
   npm install
   cd ..
   ```

2. **Initialize database**
   ```bash
   npm run init
   ```

3. **Start the application**
   ```bash
   # Terminal 1 - Backend
   npm start
   
   # Terminal 2 - Frontend
   cd client
   npm start
   ```

4. **Login**
   - Go to http://localhost:3000
   - Email: `admin@college.edu`
   - Password: `admin123`

## Features to Test

### 1. Admissions
- Click "New Admission" to submit an admission form
- Approve/reject admissions from the list
- Approved admissions automatically create student records

### 2. Fee Collection
- Click "Record Payment" to record a fee payment
- View all fee transactions
- Click receipt icon to generate PDF receipt

### 3. Hostel Management
- View room occupancy
- Allocate rooms to students
- Vacate rooms when students leave

### 4. Examination Records
- Add exam records for students
- View grades and marks
- Track student performance

### 5. Dashboard
- View real-time statistics
- See fee collection trends
- Monitor hostel occupancy

## Troubleshooting

**Port already in use?**
- Change PORT in `.env` file

**Database errors?**
- Delete `data/student_management.db`
- Run `npm run init` again

**CORS errors?**
- Update `CLIENT_URL` in `.env`

## Next Steps

1. Create more users (staff, students)
2. Submit admission forms
3. Process admissions
4. Record fee payments
5. Allocate hostel rooms
6. Add exam records
7. View dashboard statistics

Enjoy using the Student Management ERP System!

