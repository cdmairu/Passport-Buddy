import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://mongodb:27017/passport_buddy');
    console.log('📊 MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

connectDB();

// Routes
app.get('/', (req, res) => {
  res.json({ 
    message: '🌍 Passport-Buddy API is running!',
    version: '1.0.0',
    endpoints: {
      auth: '/api/auth',
      flights: '/api/flights',
      posts: '/api/posts'
    }
  });
});

// API Routes (to be implemented)
app.get('/api/auth', (req, res) => {
  res.json({ message: 'Auth endpoints ready for implementation' });
});

app.get('/api/flights', (req, res) => {
  res.json({ message: 'Flight endpoints ready for implementation' });
});

app.get('/api/posts', (req, res) => {
  res.json({ message: 'Post endpoints ready for implementation' });
});

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
