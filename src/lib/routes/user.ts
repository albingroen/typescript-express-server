import { Router } from 'express'
import { createUser, deleteUser, getUser, updateUser } from '../methods/user'
const app = Router()

app.post('/', async (req, res) => {
  const user = await createUser(req.body)
  res.json(user)
})

app.get('/:id', async (req, res) => {
  const { id } = req.query
  const user = await getUser(id as string)
  res.json(user)
})

app.put('/:id', async (req, res) => {
  const { id } = req.query
  const user = await updateUser(id as string, req.body)
  res.json(user)
})

app.delete('/:id', async (req, res) => {
  const { id } = req.query
  const user = await deleteUser(id as string)
  res.json(user)
})

export default app
