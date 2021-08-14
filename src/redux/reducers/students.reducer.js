import { studentsConstants } from '../constants/students.constants'
const initialState = {
    students: {}
}
export function students(state=initialState, action) {
    switch (action.type) {
        case studentsConstants.SET_STUDENTS:
            return { ...state, students: action.payload }
        default:
            return state;
    }
}
