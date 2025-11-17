@echo off
REM Student ERP System - Quick Start Script for Windows
REM This script initializes and starts the complete system

setlocal enabledelayedexpansion

echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  Student ERP System - Setup & Start                   ║
echo ╚════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
node -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ✗ Node.js is not installed or not in PATH
    echo   Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js detected: 
node -v
echo.

REM Check if npm is installed
npm -v >nul 2>&1
if %errorlevel% neq 0 (
    echo ✗ npm is not installed or not in PATH
    pause
    exit /b 1
)

echo ✓ npm detected: 
npm -v
echo.

REM Step 1: Check if node_modules exists
if not exist "node_modules" (
    echo [1/4] Installing backend dependencies...
    call npm install
    if %errorlevel% neq 0 (
        echo ✗ Failed to install backend dependencies
        pause
        exit /b 1
    )
    echo ✓ Backend dependencies installed
) else (
    echo ✓ Backend dependencies already installed
)
echo.

REM Step 2: Check if client node_modules exists
if not exist "client\node_modules" (
    echo [2/4] Installing frontend dependencies...
    cd client
    call npm install
    cd ..
    if %errorlevel% neq 0 (
        echo ✗ Failed to install frontend dependencies
        pause
        exit /b 1
    )
    echo ✓ Frontend dependencies installed
) else (
    echo ✓ Frontend dependencies already installed
)
echo.

REM Step 3: Initialize database
if not exist "data\student_management.db" (
    echo [3/4] Initializing database...
    call npm run init
    if %errorlevel% neq 0 (
        echo ✗ Failed to initialize database
        pause
        exit /b 1
    )
    echo ✓ Database initialized
) else (
    echo ✓ Database already exists
)
echo.

REM Step 4: Start development servers
echo [4/4] Starting development servers...
echo.
echo ╔════════════════════════════════════════════════════════╗
echo ║  System Ready!                                         ║
echo ║                                                        ║
echo ║  Backend (API):   http://localhost:5000              ║
echo ║  Frontend (App):  http://localhost:3000              ║
echo ║                                                        ║
echo ║  Login with:                                          ║
echo ║  Email: admin@college.edu                            ║
echo ║  Password: admin123                                   ║
echo ║                                                        ║
echo ║  Press Ctrl+C to stop                                ║
echo ╚════════════════════════════════════════════════════════╝
echo.

call npm run dev

pause
