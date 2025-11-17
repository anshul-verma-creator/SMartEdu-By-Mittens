# Setup Guide - Student ERP System

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- SQLite3

## Installation Steps

### 1. Install Backend Dependencies
```bash
npm install
```

### 2. Install Frontend Dependencies
```bash
npm install --prefix client
```

### 3. Environment Configuration
Create a `.env` file in the root directory (copy from `.env.example`):
```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (Change this in production!)
JWT_SECRET=your-super-secret-key-change-in-production

# Client URL (for CORS and Socket.IO)
CLIENT_URL=http://localhost:3000
REACT_APP_API_URL=http://localhost:5000
```

### 4. Initialize Database and Create Admin User
```bash
npm run init
```

This will:
- Create SQLite database
- Set up all required tables
- Create default admin user with credentials:
  - Email: `admin@college.edu`
  - Password: `admin123`

## Running the Application

### Option 1: Development Mode (Recommended)
Run both backend and frontend concurrently:
```bash
npm run dev
```

This will:
- Start backend server on `http://localhost:5000`
- Start frontend on `http://localhost:3000`
- Enable real-time updates via Socket.IO

### Option 2: Run Separately
Terminal 1 - Backend:
```bash
npm run server
```

Terminal 2 - Frontend:
```bash
npm run client
```

### Production Mode
```bash
npm run build
npm start
```

## Default Login Credentials
- **Email**: admin@college.edu
- **Password**: admin123

## Architecture Overview

### Backend (Express.js + SQLite)
- Port: 5000
- API Routes: `/api/*`
- Real-time: Socket.IO
- Database: SQLite3

### Frontend (React)
- Port: 3000
- Proxy: http://localhost:5000
- UI Framework: Material-UI
- Charts: Recharts

## Database Structure

### Core Tables
- **users**: Authentication and user management
- **students**: Student records and profiles
- **admissions**: Admission applications and processing
- **fee_transactions**: Fee payments and receipts
- **hostel_allocations**: Hostel room assignments
- **hostel_rooms**: Hostel room inventory
- **exam_records**: Examination results and grades

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Students
- `GET /api/students` - List all students
- `GET /api/students/:id` - Get student details
- `POST /api/students` - Create new student
- `PUT /api/students/:id` - Update student

### Admissions
- `GET /api/admissions` - List admissions
- `POST /api/admissions` - Submit admission form
- `PUT /api/admissions/:id/process` - Process admission

### Fees
- `GET /api/fees` - List fee transactions
- `POST /api/fees` - Record fee payment
- `GET /api/receipts/:receipt_number` - Generate receipt PDF

### Hostel
- `GET /api/hostel/rooms` - List hostel rooms
- `GET /api/hostel/occupancy` - Get occupancy status
- `POST /api/hostel/allocate` - Allocate hostel room
- `POST /api/hostel/vacate/:student_id` - Vacate hostel

### Exams
- `GET /api/exams` - List exam records
- `POST /api/exams` - Create exam record
- `PUT /api/exams/:id` - Update exam record

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

### Health Check
- `GET /api/health` - Check server status

## Troubleshooting

### Port Already in Use
If port 5000 is already in use, change it in `.env`:
```
PORT=5001
```

### Database Connection Error
Ensure the `data` directory exists:
```bash
mkdir data
npm run init
```

### CORS Error
Check that `CLIENT_URL` in `.env` matches your frontend URL.

### Socket.IO Connection Failed
- Ensure backend server is running on port 5000
- Check network connectivity
- Verify firewall settings

## Features

✓ Student Management
✓ Admission Processing
✓ Fee Collection & Receipts
✓ Hostel Allocation
✓ Examination Records
✓ Dashboard & Analytics
✓ Real-time Updates
✓ JWT Authentication
✓ Role-based Access Control
✓ PDF Receipt Generation

## Security Considerations

1. Change `JWT_SECRET` in production
2. Use HTTPS in production
3. Implement rate limiting
4. Regular database backups
5. Update dependencies regularly
6. Validate all inputs on backend

## Support & Documentation

For detailed feature documentation, refer to:
- `FEATURES.md` - Feature overview
- `USER_GUIDE.md` - User instructions
- `API.md` - API documentation
