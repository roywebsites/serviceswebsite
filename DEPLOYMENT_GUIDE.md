# Deployment Guide

This guide will help you deploy your Roy Mghames Legal Services application to Render (backend) and Netlify (frontend).

## Prerequisites

1. **GitHub Repository**: Ensure your code is pushed to a GitHub repository
2. **MongoDB Atlas**: Set up a MongoDB Atlas cluster for production database
3. **Environment Variables**: Prepare your production environment variables

## Backend Deployment to Render

### Step 1: Set up MongoDB Atlas
1. Go to [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a new cluster (free tier available)
3. Create a database user with read/write permissions
4. Get your connection string

### Step 2: Deploy to Render
1. Go to [Render](https://render.com/) and sign up/login
2. Click "New +" and select "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `roy-mghames-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or choose paid plan)

### Step 3: Set Environment Variables
In your Render service dashboard, add these environment variables:
- `MONGODB_URI`: Your MongoDB Atlas connection string
- `JWT_SECRET`: A strong secret key for JWT tokens
- `NODE_ENV`: `production`
- `FRONTEND_URL`: Your Netlify frontend URL (e.g., `https://your-app.netlify.app`)

### Step 4: Deploy
1. Click "Create Web Service"
2. Render will automatically build and deploy your backend
3. Note your service URL (e.g., `https://your-backend-service.onrender.com`)

## Frontend Deployment to Netlify

### Step 1: Prepare for Static Export
Your Next.js app is already configured for static export with:
- `output: 'export'` in `next.config.mjs`
- `unoptimized: true` for images (required for static export)

### Step 2: Deploy to Netlify
1. Go to [Netlify](https://netlify.com/) and sign up/login
2. Click "New site from Git"
3. Connect your GitHub repository
4. Configure the build settings:
   - **Build command**: `npm run build:frontend`
   - **Publish directory**: `out`
   - **Node version**: `18` (or your preferred version)

### Step 3: Set Environment Variables
In your Netlify site dashboard, go to Site settings > Environment variables:
- `NEXT_PUBLIC_API_URL`: Your Render backend URL (e.g., `https://your-backend-service.onrender.com`)

### Step 4: Deploy
1. Click "Deploy site"
2. Netlify will build and deploy your frontend
3. Your site will be available at a Netlify subdomain

### Step 5: Custom Domain (Optional)
1. In Netlify dashboard, go to Domain management
2. Add your custom domain
3. Configure DNS settings as instructed

## Post-Deployment

### Update Backend CORS
After deploying your frontend, update the `FRONTEND_URL` environment variable in Render with your actual Netlify URL.

### Test Your Application
1. Test all API endpoints from your frontend
2. Verify authentication works
3. Test blog and testimonial functionality
4. Check that images and assets load correctly

### Monitor and Maintain
1. Set up monitoring in Render dashboard
2. Monitor your MongoDB Atlas cluster
3. Set up error tracking (optional)
4. Regular backups of your database

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure `FRONTEND_URL` is set correctly in Render
2. **Build Failures**: Check Node.js version compatibility
3. **Database Connection**: Verify MongoDB Atlas network access settings
4. **Static Export Issues**: Ensure all pages are compatible with static export

### Support
- Render: [Documentation](https://render.com/docs)
- Netlify: [Documentation](https://docs.netlify.com/)
- MongoDB Atlas: [Documentation](https://docs.atlas.mongodb.com/)

## Cost Estimation

- **Render Backend**: Free tier available (sleeps after 15 min inactivity)
- **Netlify Frontend**: Free tier available (100GB bandwidth/month)
- **MongoDB Atlas**: Free tier available (512MB storage)

For production use, consider upgrading to paid plans for better performance and reliability.
