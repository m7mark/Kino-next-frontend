import axios from 'axios'

import { API_URL } from '@/config/api.config'

export const axiosBase = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})
