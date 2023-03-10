import { object, string } from 'yup'

export const schema = object().shape({
  username: string().email(),
  password: string().min(4, 'error'),
})