import { object, string } from 'yup'

export const schema = object().shape({
  email: string().email(),
  username: string().min(10, 'error'),
  password: string().min(4, 'error'),
})

