export const SET_EMPLOYEES = (state, employees) => {
  state.employees = employees
}

export const MODIFY_EMPLOYEE = (state, employee) => {
  state.employees[employee.id-1].name = employee.name
  state.employees[employee.id-1].email = employee.email
}

export const DELETE_EMPLOYEE = (state, idEmp) => {
  state.employees = state.employees.filter( emp => emp.id!== idEmp)
}

export const ADD_EMPLOYEE = (state, employee) => {
  state.employees.push(employee)
}