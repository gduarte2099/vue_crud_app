//import axios from "axios"
import infoJson from '../services/employees.json'

export const getEmployees = ({ commit }) => {
  /*axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
    commit('SET_EMPLOYEES', response.data)
  })*/

  commit('SET_EMPLOYEES', infoJson)

}

export const modifyEmp = ({commit}, employee) => {
  //console.log(employee);
  commit('MODIFY_EMPLOYEE', employee)
}

export const deleteEmp = ({commit}, idEmp) => {
  commit('DELETE_EMPLOYEE', idEmp)
}

export const addEmp = ({commit}, employee) => {
  commit('ADD_EMPLOYEE', employee)
}