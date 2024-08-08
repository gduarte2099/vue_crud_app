export const getMaxId = (state) => {
  return state.employees[state.employees.length - 1].id + 1
}