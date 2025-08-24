import mongoose from "mongoose";
import dotenv from "dotenv";
import Admin from "../src/models/Admin";

// Load environment variables
dotenv.config();

async function createAdmin() {
  try {
    // Connect to MongoDB
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }

    await mongoose.connect(mongoUri);
    console.log("📊 Connected to MongoDB");

    // Create admin user
    const adminData = {
      email: "admin@roymghames.com",
      password: "Admin123!@#", // You should change this password
      name: "Admin User",
      role: "admin",
    };

    // Remove existing admin if it exists
    await Admin.deleteOne({ email: adminData.email });
    console.log("🗑️ Removed existing admin user");

    // Create new admin
    const admin = new Admin(adminData);
    await admin.save();

    console.log("✅ Admin user created successfully");
    console.log("Email:", adminData.email);
    console.log("Password:", adminData.password);
    console.log("\n⚠️ IMPORTANT: Change this password after first login!");
  } catch (error) {
    console.error("❌ Error:", error);
  } finally {
    await mongoose.disconnect();
    process.exit(0);
  }
}

createAdmin();
