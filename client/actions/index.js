import * as api from "../api";

// Action Creator
export const getEmployees = () => async (dispatch) => {
  try {
    const { data } = await api.fetchEmployees();
    const action = { type: "FETCH_ALL", payload: data };
    dispatch(action);
  } catch (error) {
    console.log(error.message);
  }
};

export const createEmployee = (Employee) => async (dispatch) => {
  try {
    const { data } = await api.createAgenda(Employee);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = (id) => async (dispatch) => {
  try {
    await api.deleteEmployee(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = (id, Employee) => async (dispatch) => {
  try {
    const { data } = await api.updateAgenda(id, Employee);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
