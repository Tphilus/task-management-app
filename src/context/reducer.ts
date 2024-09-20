import { IStates, Action } from "../types"


const reducer = (state: IStates, action: Action) => {
    const {type} = action
  switch(type) {
    default:
        return state;
  }
}

export default reducer