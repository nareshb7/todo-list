import { GET_DATA } from "./ActionType"


const initialState1 = {
    user: {
        fName:'Nari',
        email:'naresh@gmail.com',
        mobile: "9010586402",
        password: 'Naresh@123',
        conPsd :'Naresh@123'
    }
}
const initialState={
    users:[]
}
const FormReducer =(state = initialState , action) => {
    switch(action.type) {
        case GET_DATA:  return {
             ...state, 
            // fName : state.fName,
            // email : state.email,
            // mobile : state.mobile,
            // password: state.password,
            // conPsd : state.conPsd
            //initialState.push(state.users)
            users: [...state.users,action.payLoad ]
            // users: action.payLoad

        }
         default: return state
    }
}

export default FormReducer