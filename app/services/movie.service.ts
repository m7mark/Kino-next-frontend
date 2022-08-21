import { axiosBase } from 'api/interceptors'
import axios from 'api/interceptors'

import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

import { IMovie } from '@/shared/types/movies.types'

import { getMoviesUrl } from '@/config/api.config'

export const MovieService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IMovie[]>(getMoviesUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },
  async getMostPopularMovies() {
    const { data: movies } = await axiosBase.get<IMovie[]>(
      getMoviesUrl('/most-popular')
    )
    return movies
  },

  async getById(_id: string) {
    return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
  },
  // TO DO: create description field in movie edit page
  async update(_id: string, data: IMovieEditInput) {
    return axios.put<string>(getMoviesUrl(`/${_id}`), {
      ...data,
      description: 'film',
    })
  },

  async getByGenres(genreIds: string[]) {
    return axiosBase.post<IMovie[]>(getMoviesUrl('/by-genres'), { genreIds })
  },

  async getByActor(actorId: string) {
    return axiosBase.get<IMovie[]>(getMoviesUrl(`/by-actor/${actorId}`))
  },

  async create() {
    return axios.post<string>(getMoviesUrl(`/`))
  },
  async delete(_id: string) {
    return axios.delete<string>(getMoviesUrl(`/${_id}`))
  },
}
