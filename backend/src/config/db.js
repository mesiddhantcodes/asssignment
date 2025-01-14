const mongoose = require('mongoose');

const connectDB = async () => {
    console.log('MONGO_URI:', process.env.MONGO_URI);

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection failed', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
