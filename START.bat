@echo off
REM ERP Student Management System - Windows Startup Script

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║   ERP Student Management System - Starting...          ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Check if Node is installed
node --version > nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

REM Check if npm dependencies are installed
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
)

REM Start the server
echo.
echo Starting server on http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

node server.js

pause
