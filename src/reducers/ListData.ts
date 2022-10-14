

const ListReducer = (state = [], action: any) => {
  switch (action.type) {
    case "ADDLIST":
      return action.payload
    default:
      return state
  }
}
export default ListReducer;
