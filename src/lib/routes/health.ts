import { Router } from 'express'
const app = Router()

app.get('/', (_, res) => {
  res.json({
    status: 'OK',
  })
})

export default app
