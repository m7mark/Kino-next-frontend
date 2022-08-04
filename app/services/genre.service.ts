import { axiosBase } from 'api/interceptors'
import axios from 'api/interceptors'

import { IGenre } from '@/shared/types/movies.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },
  async deleteGenre(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`))
  },
}
