// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';
import nameRoutes from './routes/nameRoutes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Default health check route
app.get('/', (req, res) => {
  res.send('✅ API is working');
});



// ✅ Connections
let authConnection;
let nameConnection;

// Connect both databases
const connectDatabases = async () => {
  try {
    authConnection = mongoose.createConnection(process.env.MONGO_URI1);
    nameConnection = mongoose.createConnection(process.env.MONGO_URI2);


    // Wait for the connections to be ready
    await Promise.all([
      authConnection.asPromise(),
      nameConnection.asPromise()
    ]);

    app.locals.authDB = authConnection;
    app.locals.nameDB = nameConnection;

    console.log("✅ Connected to both databases");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

// Call the connection function before starting server
connectDatabases().then(() => {
  // ✅ Routes after DB is ready
  app.use('/api/auth', (req, res, next) => {
    req.authDB = app.locals.authDB;
    next();
  }, authRoutes);

  app.use('/api/name', (req, res, next) => {
    req.nameDB = app.locals.nameDB;
    next();
  }, nameRoutes);

  // 🟢 Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
