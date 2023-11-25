import{actionType, activeType} from './action.type';

const initial ={
    activeStep:0,
    activeTab:0
}

export const multiformReducer =(state={}, action)=>{
    // console.log(...action.payload)
    switch(action.type){
        case actionType.BASICINFO:
            return {...state,...action.payload}
        case actionType.CONTACTINFO:            
            return {...state, ...action.payload}
        case actionType.PERSONELINFO:
            return {...state, ...action.payload}
        case actionType.EMPDETAILS:
            return {...state, ...action.payload}
        case actionType.TEAMLEADER:
            return {...state, ...action.payload}
        case actionType.LEAVEREQUEST:
            return {...state, ...action.payload}
        case actionType.CUSTOMERBASIC:
            return {...state, ...action.payload}
        case actionType.CUSTOMERDETAILS:
            return {...state, ...action.payload}
        case actionType.PAYMENTINFO:
            return {...state, ...action.payload}
        
        default :
            return state;        
    }
}
export const tabReducer =(state=initial, action)=>{
    switch(action.type){
        case activeType.ACTIVE_TAB:
            console.log(action.payload)
            return{
                ...state,
                activeTab: action.payload ,
            }
        case activeType.ACTIVE_STEP:
            return{
                ...state,
                activeStep: action.payload 
            }
        default:
            return state;
    }
}