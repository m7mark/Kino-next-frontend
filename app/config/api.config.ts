export const API_URL = `${process.env.NEXT_PUBLIC_APP_API_URL}/api`

export const getAuthUrl = (s: string) => `/auth${s}`
export const getUsersUrl = (s: string) => `/users${s}`
export const getMoviesUrl = (s: string) => `/movies${s}`
export const getGenresUrl = (s: string) => `/genres${s}`
export const getActorsUrl = (s: string) => `/actors${s}`
export const getRatingsUrl = (s: string) => `/ratings${s}`
