# Roy Mghames Legal Services - Full Stack Setup

## 🎉 Backend Migration Complete!

Your application has been successfully restructured with a **separate Express.js backend** and **Next.js frontend**.

## 📁 New Project Structure

```
roy-mghames/
├── backend/                 # Express.js API Server
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── middleware/     # Authentication middleware
│   │   ├── models/         # MongoDB models
│   │   ├── routes/         # API routes
│   │   └── server.ts       # Main server file
│   ├── .env               # Backend environment variables
│   ├── package.json       # Backend dependencies
│   └── tsconfig.json      # TypeScript configuration
├── src/                   # Next.js Frontend
│   ├── app/              # Next.js app directory
│   ├── components/       # React components
│   ├── contexts/         # React contexts
│   └── styles/          # CSS styles
├── package.json          # Frontend + orchestration scripts
└── README.md            # This file
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Install all dependencies (frontend + backend)
npm run setup
```

### 2. Environment Configuration

#### Backend Environment (backend/.env)

The backend needs these environment variables. Update `backend/.env`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database Configuration
MONGODB_URI=your-mongodb-connection-string

# JWT Configuration
JWT_SECRET=your-super-secure-jwt-secret-key
```

#### Frontend Environment (.env.local)

Your existing `.env.local` should work as-is.

### 3. Start Development Servers

```bash
# Start both frontend and backend simultaneously
npm run dev
```

This will start:

- **Frontend**: http://localhost:3000 (Next.js)
- **Backend**: http://localhost:5000 (Express.js)

### 4. Individual Server Control

```bash
# Start only frontend
npm run dev:frontend

# Start only backend
npm run dev:backend
```

## 🔄 API Endpoints

All API calls now go to the Express backend at `http://localhost:5000`:

### Authentication

- `POST /api/auth/login` - Admin login
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Admin logout

### Blogs

- `GET /api/blogs` - Get all blogs
- `POST /api/blogs` - Create blog (admin)
- `GET /api/blogs/:id` - Get single blog
- `PUT /api/blogs/:id` - Update blog (admin)
- `DELETE /api/blogs/:id` - Delete blog (admin)

### Testimonials

- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Create testimonial (admin)
- `GET /api/testimonials/:id` - Get single testimonial
- `PUT /api/testimonials/:id` - Update testimonial (admin)
- `DELETE /api/testimonials/:id` - Delete testimonial (admin)

### Health Check

- `GET /api/health` - Server status

## 🛠️ Development

### Frontend Changes Made

- ✅ Updated all API calls to point to Express backend
- ✅ Added proper CORS credentials to requests
- ✅ Maintained existing authentication flow

### Backend Features

- ✅ **Express.js** with TypeScript
- ✅ **MongoDB** with Mongoose ODM
- ✅ **JWT Authentication** with HTTP-only cookies
- ✅ **CORS** configured for frontend
- ✅ **Security** headers with Helmet.js
- ✅ **Logging** with Morgan
- ✅ **Error Handling** middleware

### Available Scripts

```bash
# Development
npm run dev              # Both servers
npm run dev:frontend     # Next.js only
npm run dev:backend      # Express only

# Production Build
npm run build           # Build both
npm run build:frontend  # Build Next.js
npm run build:backend   # Build Express

# Production Start
npm start              # Start both
npm start:frontend     # Start Next.js
npm start:backend      # Start Express

# Utilities
npm run setup          # Install all dependencies
npm run backend:install # Install backend deps only
```

## 🔧 Configuration Notes

### CORS

The backend is configured to accept requests from `http://localhost:3000` (frontend) with credentials enabled.

### Authentication

- Uses HTTP-only cookies for security
- JWT tokens expire in 7 days
- Same authentication flow as before

### Database

- Uses existing MongoDB connection
- All existing data models maintained
- Same database schemas

## 🚨 Important Notes

1. **Both servers must run** for the application to work fully
2. **Environment variables** need to be set in both places
3. **Database connection** is now handled by the Express backend
4. **API calls** now go to port 5000 instead of Next.js API routes

## 🎯 Next Steps

1. **Update your MongoDB URI** in `backend/.env`
2. **Set a secure JWT_SECRET** in `backend/.env`
3. **Run `npm run dev`** to start both servers
4. **Test the admin login** at http://localhost:3000/admin/login

## 🔍 Troubleshooting

### Backend Won't Start

- Check `backend/.env` file exists and has correct values
- Ensure MongoDB URI is valid
- Check port 5000 isn't in use

### Frontend Can't Connect

- Ensure backend is running on port 5000
- Check browser network tab for CORS errors
- Verify API URLs point to `http://localhost:5000`

### Authentication Issues

- Check JWT_SECRET is set in backend/.env
- Clear browser cookies and try again
- Check browser console for auth errors

Your application is now ready with a proper separation of concerns! 🎉




