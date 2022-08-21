import { axiosBase } from 'api/interceptors'
import axios from 'api/interceptors'

import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface'

import { IActor } from '@/shared/types/movies.types'

import { getActorsUrl } from '@/config/api.config'

export const ActorService = {
  async getAll(searchTerm?: string) {
    return axiosBase.get<IActor[]>(getActorsUrl(''), {
      params: searchTerm ? { searchTerm } : {},
    })
  },

  async getById(_id: string) {
    return axios.get<IActorEditInput>(getActorsUrl(`/${_id}`))
  },

  async getBySlug(slug: string) {
    return axiosBase.get<IActor>(getActorsUrl(`/by-slug/${slug}`))
  },

  async update(_id: string, data: IActorEditInput) {
    return axios.put<string>(getActorsUrl(`/${_id}`), data)
  },

  async create() {
    return axios.post<string>(getActorsUrl(`/`))
  },

  async delete(_id: string) {
    return axios.delete<string>(getActorsUrl(`/${_id}`))
  },
}
