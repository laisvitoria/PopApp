import apisauce from 'apisauce'
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"

const create = (config: ApiConfig = DEFAULT_API_CONFIG) => {
  const api = apisauce.create({
    baseURL: config.url,
    timeout: config.timeout,
    headers: {
        Accept: "application/json",
    },
  })

  const getStates = () => api.get(`/localidades/estados?orderBy=nome`)

  const getState = (sigla: string) => api.get(`/localidades/estados/${sigla}`)

  return {
    getStates,
    getState,
  }
}

export type ApiType = {
  getStates: () => Promise<Types.GetStatesResult>,
  getState: (sigla: string) => Promise<Types.GetStateResult>,
}

export default {
  create
}