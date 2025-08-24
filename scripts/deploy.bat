@echo off
echo 🚀 Roy Mghames Legal Services - Deployment Script
echo ==================================================

REM Check if git is clean
git diff-index --quiet HEAD --
if %errorlevel% neq 0 (
    echo ❌ Git working directory is not clean. Please commit or stash your changes.
    pause
    exit /b 1
)

REM Check if we're on main/master branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
if not "%CURRENT_BRANCH%"=="main" if not "%CURRENT_BRANCH%"=="master" (
    echo ⚠️  You're not on main/master branch. Current branch: %CURRENT_BRANCH%
    set /p CONTINUE="Do you want to continue? (y/N): "
    if /i not "%CONTINUE%"=="y" (
        pause
        exit /b 1
    )
)

echo ✅ Git status is clean

REM Build both frontend and backend
echo 🔨 Building application...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed. Please fix the errors and try again.
    pause
    exit /b 1
)

echo ✅ Build completed successfully

REM Push to remote
echo 📤 Pushing to remote repository...
git push origin %CURRENT_BRANCH%

if %errorlevel% neq 0 (
    echo ❌ Push failed. Please check your git configuration.
    pause
    exit /b 1
)

echo ✅ Code pushed successfully

echo.
echo 🎉 Deployment initiated!
echo.
echo Next steps:
echo 1. Backend will automatically deploy on Render
echo 2. Frontend will automatically deploy on Netlify
echo 3. Check your deployment dashboards for status
echo.
echo Backend URL: https://your-backend-service.onrender.com
echo Frontend URL: https://your-app.netlify.app
echo.
echo Don't forget to:
echo - Set environment variables in Render dashboard
echo - Set environment variables in Netlify dashboard
echo - Update CORS settings after frontend deployment
echo.
pause
