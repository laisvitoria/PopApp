export type RegionType = {
    id: number,
    nome: string,
    sigla: string, 
};

export type StateType = {
    id: number,
    nome: string,
    sigla: string,
    regiao: RegionType
};

const states: StateType[] = [];

const INITIAL_STATE = {
    selectedState: {},
    states: states
}

export default function reducerStates(initialState = INITIAL_STATE, action) {
    console.log(action)

    if (action.type === "TOGGLE_STATE") {
        return {
            ...initialState,
            selectedState: action.state
        }
    }

    if (action.type === "LOAD_STATES") {
        return {
           ...initialState,
            states: action.state
        }
    }

    return initialState
}
