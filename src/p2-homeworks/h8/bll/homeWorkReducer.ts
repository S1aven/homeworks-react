import {UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[], action: homeWorkReducerAT): UserType[] => { // need to fix any
  switch (action.type) {

    case ACTIONS_TYPE.SORT_UP: {
      // need to fix
      return [...state].sort((prev, next) => {
        return prev.name.toLowerCase() < next.name.toLowerCase() ? -1 : 1;
      });
    }
    case ACTIONS_TYPE.SORT_DOWN: {
      // need to fix
      return [...state].sort((prev, next) => {
        return prev.name.toLowerCase() < next.name.toLowerCase() ? -1 : 1
      }).reverse()
    }
    case ACTIONS_TYPE.CHECK_AGE: {
      // need to fix
      return state.filter(users => users.age > action.payload.age)
    }

    default:
      return state
  }
};

export enum ACTIONS_TYPE {
  SORT_UP = 'SORT_UP',
  SORT_DOWN = 'SORT_DOWN',
  CHECK_AGE = 'CHECK_AGE',
}

//---sortUp
export type SortUpAT = {
  type: ACTIONS_TYPE.SORT_UP
};

export const sortUpAC = (): SortUpAT => {
  return {
    type: ACTIONS_TYPE.SORT_UP,
  }
}

//---SortDown
export type SortDownAT = {
  type: ACTIONS_TYPE.SORT_DOWN
};

export const sortDownAC = (): SortDownAT => {
  return {
    type: ACTIONS_TYPE.SORT_DOWN,
  }
}

//---CheckAge
export type CheckAgeAT = {
  type: ACTIONS_TYPE.CHECK_AGE
  payload: {
    age: number
  }
};

export const checkAgeAC = (age: number): CheckAgeAT => {
  return {
    type: ACTIONS_TYPE.CHECK_AGE,
    payload: {age},
  }
}


export type homeWorkReducerAT = SortUpAT | SortDownAT | CheckAgeAT