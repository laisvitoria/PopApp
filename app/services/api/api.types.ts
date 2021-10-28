import { GeneralApiProblem } from "./api-problem"
import { Character } from "../../models/character/character"

export interface State {
  id: number
  nome: string
  sigla: string
}

export type GetStatesResult = { kind: "ok"; states: State[] } | GeneralApiProblem
export type GetStateResult = { kind: "ok"; state: State } | GeneralApiProblem

export type GetCharactersResult = { kind: "ok"; characters: Character[] } | GeneralApiProblem
export type GetCharacterResult = { kind: "ok"; character: Character } | GeneralApiProblem
