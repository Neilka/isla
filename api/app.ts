/**
 * This is a API server
 */

import express, {
  type Request,
  type Response,
  type NextFunction,
} from 'express'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import authRoutes from './routes/auth.js'
import bookRoutes from './routes/books.js'
import platformRoutes from './routes/platforms.js'

// for esm mode
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// load env
dotenv.config()

const app: express.Application = express()

app.use(cors())
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

/**
 * API Routes
 */
app.use('/api/auth', authRoutes)
app.use('/api/books', bookRoutes)
app.use('/api/platforms', platformRoutes)

/**
 * Root
 */
app.get('/', (req: Request, res: Response) => {
  res.json({
    success: true,
    message: '图书爆款工坊 API 服务运行中',
    endpoints: {
      search: '/api/books/search?q=书名',
      detail: '/api/books/:id',
      generateNotes: 'POST /api/books/:id/notes',
    },
  });
});

/**
 * Root - redirect to frontend
 */
app.get('/', (req: Request, res: Response) => {
  res.redirect('http://localhost:5173')
})

/**
 * health
 */
app.use(
  '/api/health',
  (req: Request, res: Response, next: NextFunction): void => {
    res.status(200).json({
      success: true,
      message: 'ok',
    })
  },
)

/**
 * error handler middleware
 */
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    error: 'Server internal error',
  })
})

/**
 * 404 handler
 */
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    error: 'API not found',
  })
})

export default app
