import { IUserBase, IUser } from '../../types'
import { Document } from 'mongoose'
import User from '../schemas/user'

export async function getUser(id: string): Promise<Document<IUser>> {
  return User.findById(id)
}

export async function createUser(values: IUserBase): Promise<Document<IUser>> {
  return User.create(values)
}

export async function updateUser(
  id: string,
  values: IUserBase
): Promise<Document<IUser>> {
  return User.findByIdAndUpdate(id, values, { new: true })
}

export async function deleteUser(id: string): Promise<Document<IUser>> {
  return User.findByIdAndDelete(id, { new: true })
}
