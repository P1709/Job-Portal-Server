import express from 'express'
import { createJobController, deleteJobController, getAllJobController, updateJobController } from '../controllers/jobController.js'

const route = express.Router()

route.post('/create-jobs', createJobController)

route.get('/get-jobs', getAllJobController)

// Update
route.patch('/update-jobs/:id', updateJobController)

// Delete
route.delete('/delete-jobs/:id', deleteJobController)

export default route