# Roy Mghames Legal Services - Backend API

Express.js backend server for the Roy Mghames Legal Services website.

## Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Environment Configuration:**
   Create a `.env` file in the backend directory:

   ```env
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000

   # Database Configuration
   MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/roy-mghames-legal?retryWrites=true&w=majority

   # JWT Configuration
   JWT_SECRET=your-super-secure-jwt-secret-key-change-this-in-production
   ```

3. **Development:**

   ```bash
   npm run dev
   ```

4. **Production Build:**
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Admin logout

### Blogs

- `GET /api/blogs` - Get all blogs (public)
- `POST /api/blogs` - Create blog (admin only)
- `GET /api/blogs/:id` - Get single blog
- `PUT /api/blogs/:id` - Update blog (admin only)
- `DELETE /api/blogs/:id` - Delete blog (admin only)

### Testimonials

- `GET /api/testimonials` - Get all testimonials (public)
- `POST /api/testimonials` - Create testimonial (admin only)
- `GET /api/testimonials/:id` - Get single testimonial
- `PUT /api/testimonials/:id` - Update testimonial (admin only)
- `DELETE /api/testimonials/:id` - Delete testimonial (admin only)

### Health Check

- `GET /api/health` - Server health status

## Features

- **Express.js** - Fast, unopinionated web framework
- **TypeScript** - Type safety and better development experience
- **MongoDB** - Document database with Mongoose ODM
- **JWT Authentication** - Secure token-based authentication
- **CORS** - Cross-origin resource sharing configured
- **Security** - Helmet.js for security headers
- **Logging** - Morgan HTTP request logger
- **Hot Reload** - Nodemon for development

## Architecture

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts       # MongoDB connection
│   ├── middleware/
│   │   └── auth.ts           # Authentication middleware
│   ├── models/
│   │   ├── Admin.ts          # Admin user model
│   │   ├── Blog.ts           # Blog post model
│   │   └── Testimonial.ts    # Testimonial model
│   ├── routes/
│   │   ├── auth.ts           # Authentication routes
│   │   ├── blogs.ts          # Blog routes
│   │   └── testimonials.ts   # Testimonial routes
│   └── server.ts             # Main server file
├── dist/                     # Compiled JavaScript
├── package.json
├── tsconfig.json
└── README.md
```

