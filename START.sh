#!/bin/bash

# ERP Student Management System - macOS/Linux Startup Script

echo ""
echo "╔════════════════════════════════════════════════════════╗"
echo "║   ERP Student Management System - Starting...          ║"
echo "╚════════════════════════════════════════════════════════╝"
echo ""

# Check if Node is installed
if ! command -v node &> /dev/null; then
    echo "ERROR: Node.js is not installed"
    echo "Please install Node.js from https://nodejs.org/"
    exit 1
fi

# Check if npm dependencies are installed
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Start the server
echo ""
echo "Starting server on http://localhost:3000"
echo "Press Ctrl+C to stop the server"
echo ""

node server.js
