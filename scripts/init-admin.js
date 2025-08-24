const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Admin schema (duplicate for standalone script)
const AdminSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'super_admin'],
    default: 'admin',
  },
}, {
  timestamps: true,
});

AdminSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

AdminSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const Admin = mongoose.model('Admin', AdminSchema);

async function initializeAdmin() {
  try {
    // Connect to MongoDB
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/roy-mghames-legal';
    await mongoose.connect(MONGODB_URI);
    
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@roymghames.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      return;
    }

    // Create admin user
    const admin = new Admin({
      email: 'admin@roymghames.com',
      password: 'admin123', // Change this!
      name: 'Roy Mghames',
      role: 'super_admin',
    });

    await admin.save();
    console.log('Admin user created successfully!');
    console.log('Email: admin@roymghames.com');
    console.log('Password: admin123');
    console.log('⚠️  Please change the password after first login!');

  } catch (error) {
    console.error('Error initializing admin:', error);
  } finally {
    await mongoose.disconnect();
  }
}

// Run the script
initializeAdmin(); 