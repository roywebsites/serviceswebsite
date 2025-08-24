# Backend & Admin Panel Setup Guide

This guide will help you set up the backend and admin panel for the Roy Mghames Legal Website.

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env.local` file in your project root with the following variables:

```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/roy-mghames-legal
# For MongoDB Atlas (cloud), use:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/roy-mghames-legal

# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production

# Admin Credentials (Change these!)
ADMIN_EMAIL=admin@roymghames.com
ADMIN_PASSWORD=admin123

# JWT Secret (Change this!)
JWT_SECRET=your-jwt-secret-key-change-this
```

### 2. Database Setup Options

#### Option A: Local MongoDB

1. Install MongoDB on your system
2. Start MongoDB service: `mongod`
3. Use the local connection string: `mongodb://localhost:27017/roy-mghames-legal`

#### Option B: MongoDB Atlas (Cloud - Recommended)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string and replace in `.env.local`
5. Whitelist your IP address in Atlas

### 3. Install Dependencies & Initialize

```bash
# Install dependencies (already done)
npm install

# Initialize admin user
node scripts/init-admin.js

# Start development server
npm run dev
```

## 📊 Admin Panel Access

After setup, access the admin panel at:

- URL: `http://localhost:3000/admin`
- Email: `admin@roymghames.com`
- Password: `admin123`

**⚠️ IMPORTANT: Change the admin password after first login!**

## 🔧 Features

### Admin Panel Features

- **Dashboard**: Overview statistics for blogs and testimonials
- **Blog Management**: Create, edit, delete, and publish blog posts
- **Testimonial Management**: Create, edit, delete, and publish testimonials
- **Authentication**: Secure login/logout with JWT tokens

### API Endpoints

#### Authentication

- `POST /api/auth/login` - Admin login
- `POST /api/auth/logout` - Admin logout
- `GET /api/auth/me` - Get current user

#### Blogs

- `GET /api/blogs` - Get all blogs (public)
- `POST /api/blogs` - Create blog (admin only)
- `GET /api/blogs/[id]` - Get single blog
- `PUT /api/blogs/[id]` - Update blog (admin only)
- `DELETE /api/blogs/[id]` - Delete blog (admin only)

#### Testimonials

- `GET /api/testimonials` - Get all testimonials (public)
- `POST /api/testimonials` - Create testimonial (admin only)
- `GET /api/testimonials/[id]` - Get single testimonial
- `PUT /api/testimonials/[id]` - Update testimonial (admin only)
- `DELETE /api/testimonials/[id]` - Delete testimonial (admin only)

## 🗄️ Database Schema

### Blog Schema

```javascript
{
  title: String (required),
  slug: String (required, unique),
  content: String (required),
  excerpt: String (required, max 300 chars),
  author: String (default: "Roy Mghames"),
  publishedAt: Date,
  tags: [String],
  published: Boolean (default: false),
  featured: Boolean (default: false),
  imageUrl: String (optional),
  createdAt: Date,
  updatedAt: Date
}
```

### Testimonial Schema

```javascript
{
  name: String (required),
  company: String (optional),
  position: String (optional),
  content: String (required, max 500 chars),
  rating: Number (1-5, default: 5),
  imageUrl: String (optional),
  published: Boolean (default: false),
  featured: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

### Admin User Schema

```javascript
{
  email: String (required, unique),
  password: String (required, hashed),
  name: String (required),
  role: String (enum: ['admin', 'super_admin']),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔒 Security Features

- Password hashing with bcrypt
- JWT-based authentication
- HTTP-only cookies for token storage
- Protected admin routes
- Input validation and sanitization

## 🚀 Deployment Considerations

### Environment Variables for Production

1. Change all default passwords and secrets
2. Use strong, unique JWT secrets
3. Set `NEXTAUTH_URL` to your production domain
4. Use MongoDB Atlas for production database

### Recommended Production Setup

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/roy-mghames-legal
NEXTAUTH_URL=https://yourdomain.com
NEXTAUTH_SECRET=very-long-random-secret-for-production
JWT_SECRET=another-very-long-random-secret
```

## 🛠️ Troubleshooting

### Common Issues

1. **MongoDB Connection Failed**

   - Check if MongoDB is running
   - Verify connection string in `.env.local`
   - Check firewall settings

2. **Admin Login Not Working**

   - Run `node scripts/init-admin.js` to create admin user
   - Check environment variables
   - Verify JWT_SECRET is set

3. **API Routes Not Working**
   - Ensure `.env.local` file exists
   - Check Next.js development server is running
   - Verify MongoDB connection

### Database Management

To view your database:

- **Local MongoDB**: Use MongoDB Compass or CLI
- **MongoDB Atlas**: Use the Atlas dashboard

### Adding More Admin Users

You can create additional admin users by:

1. Using the existing admin panel (future feature)
2. Modifying the `scripts/init-admin.js` script
3. Directly adding to the database

## 🎯 Next Steps

1. **Test the admin panel**: Create sample blogs and testimonials
2. **Customize the design**: Modify CSS in `admin.module.css`
3. **Add image upload**: Implement file upload for blog and testimonial images
4. **Email notifications**: Add email alerts for new content
5. **SEO optimization**: Add meta tags and structured data

## 📞 Support

If you encounter any issues during setup:

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB is accessible
4. Check the Next.js development server logs

The backend is now fully functional and ready for content management!
