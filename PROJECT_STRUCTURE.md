# Project Structure

## Root Directory
```
student-management-erp/
├── client/                 # React frontend
├── server/                 # Node.js backend
├── data/                   # Database files (created on first run)
├── backups/                # Database backups (created on backup)
├── package.json            # Backend dependencies
├── .env                    # Environment variables (create from .env.example)
├── .gitignore             # Git ignore file
├── README.md              # Main documentation
├── SETUP.md               # Setup guide
├── QUICKSTART.md          # Quick start guide
└── CONTRIBUTING.md        # Contributing guide
```

## Backend Structure
```
server/
├── config/
│   └── database.js        # Database configuration and initialization
├── middleware/
│   └── auth.js            # Authentication and authorization middleware
├── routes/
│   ├── auth.js            # Authentication routes
│   ├── students.js        # Student management routes
│   ├── admissions.js      # Admission management routes
│   ├── fees.js            # Fee management routes
│   ├── hostel.js          # Hostel management routes
│   ├── exams.js           # Examination routes
│   ├── dashboard.js       # Dashboard statistics routes
│   └── receipts.js        # Receipt generation routes
├── scripts/
│   ├── init.js            # Database initialization script
│   ├── createAdmin.js     # Admin user creation script
│   └── backup.js          # Database backup script
└── index.js               # Main server file
```

## Frontend Structure
```
client/
├── public/
│   ├── index.html         # HTML template
│   ├── manifest.json      # Web app manifest
│   └── robots.txt         # Robots file
├── src/
│   ├── components/
│   │   ├── Layout.js      # Main layout component
│   │   └── ProtectedRoute.js  # Route protection component
│   ├── context/
│   │   └── AuthContext.js # Authentication context
│   ├── pages/
│   │   ├── Login.js       # Login page
│   │   ├── Dashboard.js   # Dashboard page
│   │   ├── Admissions.js  # Admissions page
│   │   ├── Students.js    # Students page
│   │   ├── Fees.js        # Fees page
│   │   ├── Hostel.js      # Hostel page
│   │   └── Exams.js       # Exams page
│   ├── App.js             # Main app component
│   ├── index.js           # Entry point
│   └── index.css          # Global styles
└── package.json           # Frontend dependencies
```

## Database Schema

### Tables
- `users` - User authentication and roles
- `students` - Central student database
- `admissions` - Admission applications
- `fee_transactions` - Fee payment records
- `hostel_allocations` - Hostel room assignments
- `hostel_rooms` - Hostel room inventory
- `exam_records` - Examination records

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Students
- `GET /api/students` - Get all students
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create student
- `PUT /api/students/:id` - Update student

### Admissions
- `GET /api/admissions` - Get all admissions
- `GET /api/admissions/:id` - Get admission by ID
- `POST /api/admissions` - Submit admission form
- `PUT /api/admissions/:id/process` - Process admission

### Fees
- `GET /api/fees` - Get all fee transactions
- `GET /api/fees/student/:student_id` - Get student fees
- `POST /api/fees` - Record fee payment
- `GET /api/receipts/:receipt_number` - Generate receipt PDF

### Hostel
- `GET /api/hostel/rooms` - Get all rooms
- `GET /api/hostel/occupancy` - Get room occupancy
- `GET /api/hostel/allocations` - Get all allocations
- `GET /api/hostel/student/:student_id` - Get student allocation
- `POST /api/hostel/allocate` - Allocate room
- `POST /api/hostel/vacate/:student_id` - Vacate room

### Exams
- `GET /api/exams` - Get all exam records
- `GET /api/exams/student/:student_id` - Get student exam records
- `POST /api/exams` - Create exam record
- `PUT /api/exams/:id` - Update exam record

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics

## Features

### 1. Admissions Management
- Online admission form submission
- Application tracking
- Approval/rejection workflow
- Automatic student record creation

### 2. Fee Collection
- Multiple fee types
- Multiple payment methods
- Automated receipt generation
- Fee transaction history

### 3. Hostel Management
- Room inventory management
- Real-time occupancy tracking
- Room allocation and deallocation
- Bed-level tracking

### 4. Examination Records
- Multiple exam types
- Automatic grade calculation
- Semester and academic year tracking
- Student performance tracking

### 5. Dashboard
- Real-time statistics
- Fee collection trends
- Course-wise student distribution
- Recent admissions and transactions
- Hostel occupancy metrics

## Security

- JWT-based authentication
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Secure API endpoints
- Input validation
- SQL injection protection

## Real-time Features

- WebSocket-based live updates
- Real-time dashboard updates
- Live notifications
- Instant data synchronization

## Data Backup

- Database backups stored in `backups/` directory
- Backup script: `node server/scripts/backup.js`
- Regular backups recommended

## Deployment

### Development
- Backend: `npm start`
- Frontend: `cd client && npm start`

### Production
- Build frontend: `cd client && npm run build`
- Use PM2: `pm2 start server/index.js`
- Set up reverse proxy (nginx)
- Use HTTPS
- Set strong JWT_SECRET
- Regular database backups

