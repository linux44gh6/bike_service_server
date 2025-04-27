import express from 'express'
import { NotFound } from './Middlewares/NotFound'
import cors from 'cors'
import { globalErrorHandler } from './Middlewares/globalErrorHandler'
import router from './Routes'
const app = express()

app.use(express.json())
app.use(cors())
app.use('/api',router)
app.get('/', (req, res) => {
  res.send('Bike Service server is running')
})
app.use(globalErrorHandler)
app.use(NotFound)
export default app
