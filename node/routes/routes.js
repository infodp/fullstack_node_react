import express from 'express'
import { getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog } from '../controllers/BlogController.js'
const router = express.Router()

router.get('/', getAllBlogs)
router.get('/:id', getBlog)
router.post('/', createBlog)
router.put('/:id', updateBlog)
router.delete('/:id', deleteBlog)

export default router
