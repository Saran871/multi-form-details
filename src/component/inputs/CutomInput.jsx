import React from 'react';
import {Form} from 'react-bootstrap'
import {ErrorMessage} from '@hookform/error-message';


export const CustomTextInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>          
            <Form.Control type={type} name={name} {...register(name)} placeholder={placeholder}/>
            {
                errors && 
                <ErrorMessage 
                    errors={errors} name={`${name}`} 
                    render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}> {message}</p>} 
                />
            }
            
        </Form.Group>
    )
}
export const CustomDateInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>          
            <Form.Control type={type} name={name} {...register(name)} />
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
}
export const CustomEmailInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>          
            <Form.Control type={type} name={name} {...register(name)} placeholder={placeholder} />
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
}
export const CustomNumberInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, maxLength, ...rest}=props     
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>          
            <Form.Control type="number" name={name} {...register(name)}  placeholder={placeholder} maxLength={maxLength} />
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
}

export const CustomRadioInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props   
    return (
        <Form.Group className="mt-3 d-flex flex-column" >
            <Form.Label className='text-primary fw-bold w-100'>{labelText}  </Form.Label>
                <div className='d-flex '>{
                    options.map((option)=>{
                        return <Form.Group key={option.value} className='p-2' >
                            <Form.Check  
                                type='radio'
                                id={`${name}-${option.value}`}
                                name={name}
                                value={option.value}
                                {...register(name)}
                                label={option.label}
                                defaultChecked={option.value}
                            />
                        </Form.Group>
                    })
                }</div>
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
}


export const CustomSelectInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props

    
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>                     
            <Form.Select name={name} ref={register} {...rest}>
                {options.map((option) =>{
                    return <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                
                    })}
            
            </Form.Select>
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
} 

export const CustomCheckboxInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props       
            
    
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>          
            <Form.Check type="checkbox" name={name} ref={register} {...rest} />
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
}

export const CustomTextAreaInput = (props) => {
    const {type,  name, register, labelText, id ,placeholder, options,errors, ...rest}=props;
    return (
        <Form.Group className="mt-3">
            <Form.Label className='text-primary fw-bold'>{labelText}  </Form.Label>          
            <Form.Control as="textarea" rows={3} name={name} {...register(name)} {...rest} />
            {
                errors && 
                <ErrorMessage errors={errors} name={`${name}`} render={({message})=><p style={{color: 'red', fontSize:'14.5px', fontWeight:500}}>{message}</p>} />
            }
            
        </Form.Group>
    )
}
