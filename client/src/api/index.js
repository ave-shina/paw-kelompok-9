import axios from "axios";

const url = "http://localhost:3000/api/employees";

export const fetchEmployees = () => axios.get(url);
export const createEmployee = (newEmployee) => axios.post(url, newEmployee);
export const deleteEmployee = (id) => axios.delete(`${url}/:id=${id}`);
export const updateEmployee = (id, updateEmployee) =>
  axios.put(`${url}/:id=${id}`, updateEmployee);
