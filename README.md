# Student Management ERP System

A comprehensive, low-cost ERP solution for educational institutions that integrates admissions, fee collection, hostel management, and examination records into a single, unified system.

## Features

- **Admissions Management**: Online admission forms with approval workflow
- **Student Database**: Centralized student information management
- **Fee Collection**: Automated fee payment recording with digital receipt generation
- **Hostel Management**: Real-time room allocation and occupancy tracking
- **Examination Records**: Comprehensive exam record management with grading
- **Real-time Dashboard**: Live metrics and statistics for administrators
- **Role-based Access Control**: Admin, Staff, and Student roles with appropriate permissions
- **Real-time Updates**: WebSocket-based live updates across the system
- **Data Security**: JWT-based authentication and secure data handling

## Tech Stack

### Backend
- Node.js with Express.js
- SQLite database (easily migratable to PostgreSQL)
- JWT authentication
- Socket.IO for real-time updates
- PDFKit for receipt generation

### Frontend
- React.js
- Material-UI for components
- React Router for navigation
- Axios for API calls
- Recharts for data visualization
- Socket.IO Client for real-time updates

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or download the project**
   ```bash
   cd "E:\VSCode prj\Student management ERP  based"
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Create environment file**
   ```bash
   copy .env.example .env
   ```
   Edit `.env` and update the values if needed:
   ```
   PORT=5000
   JWT_SECRET=your-secret-key-change-in-production
   CLIENT_URL=http://localhost:3000
   NODE_ENV=development
   ```

5. **Create admin user**
   ```bash
   node server/scripts/createAdmin.js
   ```

6. **Start the application**

   **Option 1: Run both server and client separately**
   ```bash
   # Terminal 1 - Start backend server
   npm start
   
   # Terminal 2 - Start frontend
   cd client
   npm start
   ```

   **Option 2: Run both concurrently (if concurrently is installed)**
   ```bash
   npm run dev
   ```

7. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## Default Credentials

- **Email**: admin@college.edu
- **Password**: admin123
- **Role**: Admin

## Database

The system uses SQLite by default, which stores data in `data/student_management.db`. The database is automatically created and initialized on first run.

### Database Schema
- `users`: User authentication and roles
- `students`: Central student database
- `admissions`: Admission applications
- `fee_transactions`: Fee payment records
- `hostel_allocations`: Hostel room assignments
- `hostel_rooms`: Hostel room inventory
- `exam_records`: Examination records

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Students
- `GET /api/students` - Get all students (Admin/Staff)
- `GET /api/students/:id` - Get student by ID
- `POST /api/students` - Create student (Admin/Staff)
- `PUT /api/students/:id` - Update student

### Admissions
- `GET /api/admissions` - Get all admissions (Admin/Staff)
- `GET /api/admissions/:id` - Get admission by ID
- `POST /api/admissions` - Submit admission form
- `PUT /api/admissions/:id/process` - Process admission (Admin/Staff)

### Fees
- `GET /api/fees` - Get all fee transactions (Admin/Staff)
- `GET /api/fees/student/:student_id` - Get student fees
- `POST /api/fees` - Record fee payment (Admin/Staff)
- `GET /api/receipts/:receipt_number` - Generate receipt PDF

### Hostel
- `GET /api/hostel/rooms` - Get all rooms
- `GET /api/hostel/occupancy` - Get room occupancy
- `GET /api/hostel/allocations` - Get all allocations (Admin/Staff)
- `GET /api/hostel/student/:student_id` - Get student allocation
- `POST /api/hostel/allocate` - Allocate room (Admin/Staff)
- `POST /api/hostel/vacate/:student_id` - Vacate room (Admin/Staff)

### Exams
- `GET /api/exams` - Get all exam records (Admin/Staff)
- `GET /api/exams/student/:student_id` - Get student exam records
- `POST /api/exams` - Create exam record (Admin/Staff)
- `PUT /api/exams/:id` - Update exam record (Admin/Staff)

### Dashboard
- `GET /api/dashboard/stats` - Get dashboard statistics (Admin/Staff)

## Features in Detail

### 1. Admissions Management
- Online admission form submission
- Application tracking with unique application numbers
- Approval/rejection workflow
- Automatic student record creation upon approval

### 2. Fee Collection
- Multiple fee types (tuition, hostel, library, examination, etc.)
- Multiple payment methods (cash, card, online, cheque)
- Automated receipt generation (PDF)
- Receipt tracking and retrieval
- Fee transaction history

### 3. Hostel Management
- Room inventory management
- Real-time occupancy tracking
- Room allocation and deallocation
- Bed-level tracking
- Occupancy statistics

### 4. Examination Records
- Multiple exam types (midterm, final, assignment, quiz)
- Automatic grade calculation
- Semester and academic year tracking
- Student performance tracking

### 5. Dashboard
- Real-time statistics
- Fee collection trends
- Course-wise student distribution
- Recent admissions and transactions
- Hostel occupancy metrics

## Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Secure API endpoints
- Input validation
- SQL injection protection (parameterized queries)

## Real-time Features

The system uses Socket.IO for real-time updates:
- New student registration notifications
- Admission submission alerts
- Fee payment notifications
- Hostel allocation updates
- Dashboard statistics updates

## Data Backup

The SQLite database file is stored in the `data/` directory. For production use:
1. Regularly backup the `data/student_management.db` file
2. Consider migrating to PostgreSQL for better scalability
3. Implement automated backup scripts

## Customization

### Adding New Roles
1. Update the role check in `server/middleware/auth.js`
2. Add role-specific routes and permissions
3. Update frontend components to handle new roles

### Adding New Features
1. Create database table in `server/config/database.js`
2. Create API routes in `server/routes/`
3. Create frontend components in `client/src/pages/`
4. Add navigation items in `client/src/components/Layout.js`

## Migration to PostgreSQL

To migrate from SQLite to PostgreSQL:
1. Install PostgreSQL driver: `npm install pg`
2. Update database configuration in `server/config/database.js`
3. Update connection string in `.env`
4. Run database migrations

## Troubleshooting

### Port Already in Use
- Change the PORT in `.env` file
- Or kill the process using the port

### Database Errors
- Delete `data/student_management.db` and restart the server
- Check database file permissions

### CORS Errors
- Update `CLIENT_URL` in `.env` to match your frontend URL
- Check CORS configuration in `server/index.js`

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Build the frontend: `cd client && npm run build`
3. Use a process manager like PM2: `pm2 start server/index.js`
4. Set up a reverse proxy (nginx) for production
5. Use HTTPS with SSL certificates
6. Set strong `JWT_SECRET` in production
7. Regular database backups
8. Monitor logs and errors

## License

MIT License - feel free to use this project for educational purposes.

## Support

For issues and questions, please create an issue in the project repository.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

