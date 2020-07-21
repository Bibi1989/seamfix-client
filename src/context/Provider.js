import React, { useReducer } from "react";
import Axios from "axios";

export const ScheduleContext = React.createContext();

const types = {
  LANG: "LANG",
  FETCH: "FETCH",
  ADD: "ADD",
  DELETE: "DELETE",
  ERROR: "ERROR",
};

const initialState = {
  lang: "ENGLISH",
  schedules: [],
  schedule: {},
  errors: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case types.LANG:
      return {
        ...state,
        lang: action.payload,
      };
    case types.FETCH:
      return {
        ...state,
        schedules: action.payload,
      };
    case types.ADD:
      return {
        ...state,
        schedule: action.payload,
      };
    case types.DELETE:
      return {
        ...state,
        schedules: state.schedules.filter(
          (schedule) => schedule._id !== action.payload
        ),
      };
    case types.ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};

// const URL = `http://localhost:5000/api/upload`;
const URL = `https://seamfix-server.herokuapp.com/api/upload`;

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getLang = (lang) => {
    dispatch({ type: types.LANG, payload: lang });
  };

  const getSchedules = async () => {
    try {
      const response = await Axios.get(`${URL}`);

      dispatch({ type: types.FETCH, payload: response.data.data });
    } catch (error) {
      console.log(error.response);
    }
  };

  const scheduleReport = async (data) => {
    try {
      const response = await Axios.post(`${URL}`, data);
      dispatch({ type: types.ADD, payload: response.data.data });
    } catch (error) {
      dispatch({ type: types.ERROR, payload: error.response.data.error });
    }
  };

  const cancelSchedule = async (id) => {
    try {
      await Axios.delete(`${URL}/${id}`);
      dispatch({ type: types.DELETE, payload: id });
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <ScheduleContext.Provider
      value={{
        getLang,
        getSchedules,
        scheduleReport,
        cancelSchedule,
        lang: state.lang,
        schedules: state.schedules,
        schedule: state.schedule,
        errors: state.errors,
      }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
