import { GET_DATA } from "./ActionType"

export const getData =(props)=> {
  return {
    type: GET_DATA,
    payLoad: props
  }
}