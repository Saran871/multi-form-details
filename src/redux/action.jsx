import {actionType, activeType} from './action.type'

   
export const basicInfo =(data)=>{
    return{
        type: actionType.BASICINFO,
        payload:data,
    }
}
export const contactInfo =(data)=>{
    return{
        type: actionType.CONTACTINFO,
        payload:data,
    }
}
export const personelInfo =(data)=>{
    return{
        type: actionType.PERSONELINFO,
        payload:data,
    }
}
export const customerBaisc =(data)=>{
    return{
        type: actionType.CUSTOMERBASIC,
        payload:data,
    }
}
export const customerDetails =(data)=>{
    return{
        type: actionType.CUSTOMERDETAILS,
        payload:data,
    }
}
export const empDetails =(data)=>{
    return{
        type: actionType.EMPDETAILS,
        payload:data,
    }
}
export const leaveRequest =(data)=>{
    return{
        type: actionType.LEAVEREQUEST,
        payload:data,
    }
}
export const teamLeader =(data)=>{
    return{
        type: actionType.TEAMLEADER,
        payload:data,
    }
}
export const paymentInfo =(data)=>{
    return{
        type: actionType.PAYMENTINFO,
        payload:data,
    }
}
export const activeTab =(tab)=>{
    return{
        type: activeType.ACTIVE_TAB,
        payload: tab
    }
}
export const activeStep =(step)=>{
    return{
        type: activeType.ACTIVE_STEP,
        payload: step
    }
}

