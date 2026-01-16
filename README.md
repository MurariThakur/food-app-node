# 🍔 Food App Node

A full-featured RESTful API for a food delivery application built with Node.js, Express, and MongoDB. This backend service provides comprehensive functionality for managing restaurants, food items, categories, users, and authentication.

## 📝 Description

Food App Node is a robust backend API that powers food delivery applications. It handles user authentication, restaurant management, food catalog, order processing, and administrative functions. Built with modern Node.js practices, it offers a scalable and secure foundation for food delivery platforms.

## ✨ Features

- 🔐 **User Authentication & Authorization** - Secure JWT-based authentication with role-based access control
- 👤 **User Management** - Complete user profile management and account operations
- 🏪 **Restaurant Management** - CRUD operations for restaurant listings and details
- 🍕 **Food Catalog** - Manage food items with categories, prices, and descriptions
- 📂 **Category Management** - Organize food items into categories
- 🛡️ **Admin Panel** - Administrative middleware for protected operations
- 🔒 **Secure Password Handling** - Bcrypt encryption for user passwords
- 🌐 **CORS Enabled** - Cross-origin resource sharing for frontend integration
- 📊 **Request Logging** - Morgan middleware for HTTP request logging

## 🛠️ Tech Stack

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

**Core Technologies:**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Fast, minimalist web framework
- **MongoDB** - NoSQL database for data storage
- **Mongoose** - MongoDB object modeling tool

**Key Dependencies:**
- **bcryptjs** - Password hashing and encryption
- **jsonwebtoken** - JWT authentication implementation
- **cors** - Enable CORS with various options
- **dotenv** - Environment variable management
- **morgan** - HTTP request logger middleware
- **colors** - Console output styling
- **nodemon** - Auto-restart during development

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (v4.4 or higher) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** - Package manager

## 🚀 Setup Steps

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd food-app-node
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
PORT=8080
MONGO_URL=mongodb://localhost:27017/food-app
JWT_SECRET=your_jwt_secret_key_here
```

**Environment Variables Explained:**
- `PORT` - Server port number (default: 8080)
- `MONGO_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT token generation

### 4️⃣ Start MongoDB

Make sure MongoDB is running on your system:

```bash
# Windows
net start MongoDB

# macOS/Linux
sudo systemctl start mongod
```

### 5️⃣ Run the Application

**Development Mode (with auto-restart):**
```bash
npm run serve
```

**Production Mode:**
```bash
npm start
```

The server will start on `http://localhost:8080`

## 📡 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - User login

### User Management
- `GET /api/v1/user/profile` - Get user profile
- `PUT /api/v1/user/profile` - Update user profile
- `DELETE /api/v1/user/profile` - Delete user account

### Restaurant
- `GET /api/v1/restaurant` - Get all restaurants
- `POST /api/v1/restaurant` - Create restaurant (Admin)
- `PUT /api/v1/restaurant/:id` - Update restaurant (Admin)
- `DELETE /api/v1/restaurant/:id` - Delete restaurant (Admin)

### Category
- `GET /api/v1/category` - Get all categories
- `POST /api/v1/category` - Create category (Admin)
- `PUT /api/v1/category/:id` - Update category (Admin)
- `DELETE /api/v1/category/:id` - Delete category (Admin)

### Food
- `GET /api/v1/food` - Get all food items
- `POST /api/v1/food` - Create food item (Admin)
- `PUT /api/v1/food/:id` - Update food item (Admin)
- `DELETE /api/v1/food/:id` - Delete food item (Admin)

## 📁 Project Structure

```
food-app-node/
├── config/          # Database configuration
├── controllers/     # Request handlers
├── middleware/      # Custom middleware (auth, admin)
├── models/          # Mongoose schemas
├── routes/          # API routes
├── utils/           # Utility functions
├── .env             # Environment variables
├── server.js        # Application entry point
└── package.json     # Project dependencies
```

## 👨‍💻 Author

**Murari**

Made with ❤️ by Murari
