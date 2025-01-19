import mongoose from 'mongoose';

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Database connected successfully');

  } catch (error) {
    console.log(`error: ${error.message}`);
  }
}

export default conectarDB;