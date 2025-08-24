#!/bin/bash

echo "🚀 Roy Mghames Legal Services - Deployment Script"
echo "=================================================="

# Check if git is clean
if [ -n "$(git status --porcelain)" ]; then
    echo "❌ Git working directory is not clean. Please commit or stash your changes."
    exit 1
fi

# Check if we're on main/master branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ] && [ "$CURRENT_BRANCH" != "master" ]; then
    echo "⚠️  You're not on main/master branch. Current branch: $CURRENT_BRANCH"
    read -p "Do you want to continue? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "✅ Git status is clean"

# Build both frontend and backend
echo "🔨 Building application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the errors and try again."
    exit 1
fi

echo "✅ Build completed successfully"

# Push to remote
echo "📤 Pushing to remote repository..."
git push origin $CURRENT_BRANCH

if [ $? -ne 0 ]; then
    echo "❌ Push failed. Please check your git configuration."
    exit 1
fi

echo "✅ Code pushed successfully"

echo ""
echo "🎉 Deployment initiated!"
echo ""
echo "Next steps:"
echo "1. Backend will automatically deploy on Render"
echo "2. Frontend will automatically deploy on Netlify"
echo "3. Check your deployment dashboards for status"
echo ""
echo "Backend URL: https://your-backend-service.onrender.com"
echo "Frontend URL: https://your-app.netlify.app"
echo ""
echo "Don't forget to:"
echo "- Set environment variables in Render dashboard"
echo "- Set environment variables in Netlify dashboard"
echo "- Update CORS settings after frontend deployment"
