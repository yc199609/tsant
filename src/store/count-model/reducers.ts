import { ModifyAction } from './actions';
import { DECREMENT, INCREMENT } from './consts';


export const count = (state = 0, action: ModifyAction): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1
    case DECREMENT:
      return state - 1
    default:
      return state
  }
}
