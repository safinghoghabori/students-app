import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../types";

export const addStudent = (studentData) => {
  console.log(studentData);
  return {
    type: ADD_STUDENT,
    payload: studentData,
  };
};

export const deleteStudent = (rollno) => {
  return {
    type: DELETE_STUDENT,
    payload: rollno,
  };
};

export const editStudent = (studentData) => {
  return {
    type: EDIT_STUDENT,
    payload: studentData,
  };
};
