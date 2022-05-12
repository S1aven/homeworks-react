const LOADING = 'LOADING'

export type initStateType = {
    isLoading: boolean
}

const initState = {
    isLoading: false
}

export const loadingReducer = (state: initStateType = initState, action: LoadingAT): initStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                isLoading: action.loading
            }
        }
        default: return state
    }
}

type LoadingAT = {
    type: 'LOADING'
    loading: boolean
}

export const loadingAC = (loading: boolean): LoadingAT => {
    return {
        type: LOADING,
        loading: loading
    }

} // fix any