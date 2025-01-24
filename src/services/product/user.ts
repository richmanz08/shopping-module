import { useQuery } from '@tanstack/react-query'
import { clientJsonServerAPI } from '../client'

/*
 user interface
*/

export interface IUserData {
  id: number
  name: string
  mail: string
  point: number
}

export const getUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      try {
        const res = await clientJsonServerAPI.get('user_data')
        return res.data as IUserData
      } catch (error) {
        throw new Error('Exception get user')
      }
    },
  })
}
