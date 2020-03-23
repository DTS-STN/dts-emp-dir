import { GET_EMPLOYEES, GET_EMPLOYEE_DETAILS, GET_EMPLOYEE_ORG, EMPLOYEE_LOADING } from '../actions/types'

const initialState = {
  // data: [
  //   { id: 1, photo: url3, name: 'Anne Hathaway', title:'Actress / Jewelry thief',  department: 'ESDC' , organization: 'ITTB' , phone: '613-999-6666' },
  //   { id: 2, photo: url4, name: 'Cate Blanchett', title:'Wizard Galadriel',  department: 'ESDC' , organization: 'ITTB' , phone: '613-999-7777' },
  //   { id: 3, photo: url1, name: 'Harry Bosch', title:'Detective', department: 'ESDC' , organization: 'ITTB' , phone:'613-999-9999' },
  //   { id: 4, photo: url2, name: 'Rocky Balboa', title:'Boxer',  department: 'ESDC' , organization: 'ITTB' , phone: '613-999-8888' }
  // ],
  data: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case GET_EMPLOYEE_DETAILS:
      return {
        ...state,
        
        loading: false
      };
    case GET_EMPLOYEE_ORG:
      return {
        ...state,
        
        loading: false
      };
    case EMPLOYEE_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
