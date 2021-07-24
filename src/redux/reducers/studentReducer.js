import { ADD_STUDENT, DELETE_STUDENT, EDIT_STUDENT } from "../types";

const initialState = {
  students: [],
};

export const studentReducer = (state = initialState, action) => {
  console.log("action payload...", action.payload);
  console.log("state...", state);
  switch (action.type) {
    case ADD_STUDENT: {
      return {
        ...state,
        students: state.students.concat(action.payload),
      };
    }

    case DELETE_STUDENT: {
      return {
        ...state,
        students: state.students.filter(
          (stud) => stud.rollno !== action.payload
        ),
      };
    }

    case EDIT_STUDENT: {
      return {
        ...state,
        students: state.students.map((stud) => {
          const temp = Object.assign({}, stud);
          if (temp.rollno === action.payload.rollno) {
            temp.rollno = action.payload.rollno;
            temp.name = action.payload.name;
            temp.email = action.payload.email;
            temp.address = action.payload.address;
            temp.contact = action.payload.contact;
          }
          return temp;
        }),
      };
    }
  }
};
