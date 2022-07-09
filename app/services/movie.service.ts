import { axiosBase } from 'api/interceptors'

import { IMovie } from '@/shared/types/movies.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieServise = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },
}
