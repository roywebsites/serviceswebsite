# MongoDB Connection Setup

## Current Issue

Your backend is trying to connect to MongoDB but failing because the connection string has placeholder values:

```
❌ MongoDB connection error: Error: querySrv ENOTFOUND _mongodb._tcp.cluster0.xxxxx.mongodb.net
```

## Quick Fix

You need to update the `MONGODB_URI` in `backend/.env` with your actual MongoDB Atlas credentials.

### Step 1: Get Your MongoDB Connection String

1. **Go to [MongoDB Atlas](https://cloud.mongodb.com/)**
2. **Log into your account**
3. **Click "Connect" on your cluster**
4. **Choose "Connect your application"**
5. **Copy the connection string**

It should look like:

```
mongodb+srv://username:password@cluster0.abcdef.mongodb.net/database-name?retryWrites=true&w=majority
```

### Step 2: Update Backend Environment

Edit `backend/.env` and replace the placeholder:

```env
# Replace this line:
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster0.xxxxx.mongodb.net/roy-mghames-legal?retryWrites=true&w=majority

# With your actual connection string:
MONGODB_URI=mongodb+srv://realusername:realpassword@cluster0.abcdef.mongodb.net/roy-mghames-legal?retryWrites=true&w=majority
```

### Step 3: Add JWT Secret

Also make sure you have a secure JWT secret:

```env
JWT_SECRET=your-super-secure-random-string-here-make-it-long-and-complex
```

### Step 4: Restart the Backend

After updating the `.env` file:

```bash
# Stop the current dev server (Ctrl+C)
# Then restart:
npm run dev
```

## Test the Connection

Once updated, you should see:

```
🚀 Roy Mghames Legal Services API running on port 5000
📱 Health check: http://localhost:5000/api/health
📊 MongoDB Connected: cluster0-shard-00-00.abcdef.mongodb.net:27017
```

Instead of the connection error.

## Alternative: Use a Local MongoDB

If you don't have MongoDB Atlas set up, you can use a local MongoDB:

```env
MONGODB_URI=mongodb://localhost:27017/roy-mghames-legal
```

But you'll need to install MongoDB locally first.

## Verify It's Working

Visit: http://localhost:5000/api/health

You should see:

```json
{
  "status": "OK",
  "message": "Roy Mghames Legal Services API is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```




