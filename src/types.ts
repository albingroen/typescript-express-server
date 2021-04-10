export interface INode {
  createdAt: string
  updatedAt: string
  _id: string
}

export interface IUserBase {
  auth0Id: string
}

export type IUser = IUserBase & INode
