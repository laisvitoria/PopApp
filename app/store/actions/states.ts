// Action - ações no redux
export function toggleState(state: any): any{
    return {
      type: 'TOGGLE_STATE', // Ação a ser realizada, única dentro do redux
      state,
    }
}