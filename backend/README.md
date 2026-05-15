# Hardik Traders — Backend API

Production-ready Node.js + Express + MongoDB backend for Hardik Traders industrial B2B platform.

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js 18+ |
| Framework | Express.js 4.x |
| Database | MongoDB Atlas + Mongoose |
| Auth | JWT (jsonwebtoken) + bcryptjs |
| Security | Helmet, express-mongo-sanitize, express-rate-limit |
| File Uploads | Multer |

## Folder Structure

```
backend/
├── config/
│   └── db.js               # MongoDB connection
├── controllers/
│   ├── authController.js   # Login, seed admin
│   ├── enquiryController.js# Submit, list, update, delete
│   └── productController.js# CRUD + image upload
├── middleware/
│   └── auth.js             # JWT protect middleware
├── models/
│   ├── Admin.js
│   ├── Enquiry.js
│   ├── Product.js
│   └── Testimonial.js
├── routes/
│   ├── authRoutes.js
│   ├── enquiryRoutes.js
│   └── productRoutes.js
├── uploads/                # Product images (gitignored)
├── .env.example
├── package.json
└── server.js
```

## Setup Instructions

### 1. Install dependencies
```bash
cd backend
npm install
```

### 2. Configure environment
```bash
cp .env.example .env
```
Edit `.env` and fill in your values:
```env
PORT=5000
MONGODB_URI=mongodb+srv://<user>:<pass>@cluster0.xxxxx.mongodb.net/hardiktraders
JWT_SECRET=your_super_secret_key_here
ADMIN_EMAIL=admin@hardiktraders.com
ADMIN_PASSWORD=YourStrongPassword123
FRONTEND_URL=http://localhost:5173
```

### 3. Seed the first admin
```bash
npm run dev
# Then POST to:
curl -X POST http://localhost:5000/api/auth/seed
```
> ⚠️ Disable the `/seed` route in production.

### 4. Run development server
```bash
npm run dev
```

## API Reference

### Auth
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/auth/login` | Public | Admin login → returns JWT |
| GET | `/api/auth/me` | Bearer | Get current admin info |
| POST | `/api/auth/seed` | Public | Create initial admin (disable in prod) |

### Enquiries
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| POST | `/api/enquiries` | Public | Submit contact form |
| GET | `/api/enquiries` | Bearer | List all (supports ?status=new&search=&page=&limit=) |
| PATCH | `/api/enquiries/:id/status` | Bearer | Update status (new/contacted/closed) + notes |
| DELETE | `/api/enquiries/:id` | Bearer | Delete enquiry |

### Products
| Method | Endpoint | Auth | Description |
|---|---|---|---|
| GET | `/api/products` | Public | List products (?category=&featured=&search=&page=) |
| GET | `/api/products/:id` | Public | Get single product |
| POST | `/api/products` | Bearer | Create product + upload images |
| PUT | `/api/products/:id` | Bearer | Update product |
| DELETE | `/api/products/:id` | Bearer | Delete product |

## Deployment (Render)

1. Push to GitHub
2. New Web Service on [Render](https://render.com)
3. Root directory: `backend`
4. Build command: `npm install`
5. Start command: `node server.js`
6. Add all environment variables in Render dashboard
7. MongoDB Atlas → Network Access → Allow `0.0.0.0/0`

## Security Notes

- Rate limiting: 200 req/15min globally; 10 enquiries/hour per IP
- All inputs sanitized against NoSQL injection (mongo-sanitize)
- Passwords hashed with bcrypt (12 rounds)
- JWT tokens expire in 7 days
- Helmet sets secure HTTP headers
- Never expose `.env` in version control
