# Setup Guide

## Quick Start

1. **Install Dependencies**
   ```bash
   # Install backend dependencies
   npm install
   
   # Install frontend dependencies
   cd client
   npm install
   cd ..
   ```

2. **Initialize Database**
   ```bash
   npm run init
   ```
   This will create the database tables and admin user.

3. **Start the Application**
   ```bash
   # Start backend server
   npm start
   
   # In another terminal, start frontend
   cd client
   npm start
   ```

4. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

5. **Login**
   - Email: admin@college.edu
   - Password: admin123

## Environment Variables

Create a `.env` file in the root directory:

```
PORT=5000
JWT_SECRET=your-secret-key-change-in-production
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

## Database Backup

To backup the database:
```bash
node server/scripts/backup.js
```

Backups are stored in the `backups/` directory.

## Troubleshooting

### Port Already in Use
Change the PORT in `.env` file or kill the process using the port.

### Database Errors
Delete `data/student_management.db` and run `npm run init` again.

### CORS Errors
Update `CLIENT_URL` in `.env` to match your frontend URL.

## Production Deployment

1. Set `NODE_ENV=production` in `.env`
2. Build the frontend: `cd client && npm run build`
3. Use a process manager like PM2: `pm2 start server/index.js`
4. Set up a reverse proxy (nginx) for production
5. Use HTTPS with SSL certificates
6. Set strong `JWT_SECRET` in production
7. Regular database backups

