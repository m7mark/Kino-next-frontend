import { axiosBase } from 'api/interceptors'
import axios from 'api/interceptors'

import { IActor } from '@/shared/types/movies.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },
  async delete(_id: string) {
    return axios.delete<string>(getActorsUrl(`/${_id}`))
  },
}
