
export type StateType = {
    id: string,
    title: string,
};

const states: StateType[] = [];

const INITIAL_STATE = {
    selectedState: {},
    states: states
}

export default function reducerStates(initialState = INITIAL_STATE, action) {
    console.log(action);

    if (action.type === "TOGGLE_STATE") {
        return {
            ...initialState,
            selectedState: action.state
        }
    }

    return initialState
}
