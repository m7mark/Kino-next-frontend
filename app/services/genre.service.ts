import { axiosBase } from 'api/interceptors'
import axios from 'api/interceptors'

import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface'

import { IGenre } from '@/shared/types/movies.types'

import { getGenresUrl } from '@/config/api.config'

export const GenreService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IGenre[]>(getGenresUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },

  async getById(_id: string) {
    return axios.get<IGenreEditInput>(getGenresUrl(`/${_id}`))
  },

  async getBySlug(slug: string) {
    return axiosBase.get<IGenre>(getGenresUrl(`/by-slug/${slug}`))
  },

  async update(_id: string, data: IGenreEditInput) {
    return axios.put<string>(getGenresUrl(`/${_id}`), data)
  },

  async create() {
    return axios.post<string>(getGenresUrl(`/`))
  },

  async delete(_id: string) {
    return axios.delete<string>(getGenresUrl(`/${_id}`))
  },
}
