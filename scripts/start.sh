#!/bin/bash

echo "🚀 Starting Passport-Buddy..."

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker Desktop first."
    exit 1
fi

# Check if .env exists
if [ ! -f "../.env" ]; then
    echo "⚠️  Warning: .env file not found. Using defaults from .env.example"
fi

echo "🔨 Building and starting all services..."
docker-compose up --build -d

echo "⏳ Waiting for services to start..."
sleep 10

echo "✅ Passport-Buddy started!"
echo ""
echo "🌐 Access points:"
echo "  Frontend: http://localhost:3000"
echo "  Backend API: http://localhost:5001"
echo "  MongoDB: localhost:27017"
echo ""
echo "🔧 Useful commands:"
echo "  View logs: docker-compose logs -f"
echo "  Stop app: ./stop.sh"
