function reducer(state, action) {
  switch (action.type) {
    case "SET_TODO":
      return {
        ...state,
        todo: action.value,
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.todo],
        todo: "",
      };

    case "SET_SEARCH":
      return {
        ...state,
        search: action.value,
      };
  }
}
export default reducer;
