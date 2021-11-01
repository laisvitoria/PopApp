// Action - ações no redux
export function toggleState(state: any): any{
    return {
      type: 'TOGGLE_STATE', // Ação a ser realizada, única dentro do redux
      state,
    }
}

export function loadStates(state?: any): any{
  return {
    type: 'LOAD_STATES', // Ação a ser realizada, única dentro do redux
    state
  }
}