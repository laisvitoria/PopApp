
export type StateType = {
    id: string,
    title: string,
};

const states: StateType[] = [
    {
      id: "1",
      title: "Sergipe",
    },
    {
      id: "2",
      title: "Bahia",
    },
    {
      id: "3",
      title: "Pernambuco",
    },
    {
      id: "4",
      title: "Pernambuco",
    },
    {
      id: "5",
      title: "Pernambuco",
    },
    {
      id: "6",
      title: "Pernambuco",
    },
    {
      id: "7",
      title: "Pernambuco",
    },
    {
      id: "8",
      title: "Pernambuco",
    },
    {
      id: "9",
      title: "Pernambuco",
    },
    {
      id: "10",
      title: "Pernambuco",
    },
    {
      id: "11",
      title: "Pernambuco",
    },
];

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
