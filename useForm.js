import { useState, useEffect } from 'react';


export const useForm = (initialState = {}) => {

    const [values, setValues] = useState(initialState);

   /*  const { email, name, descripcion } = values; */

    const handleInputChange = ({target}) => { //hacemos destructurin del evento que viene como e
        setValues({
            ...values,
            [target.name]  : target.value
        })
    }

    const reset = () => {
        setValues( initialState )
    }

/* 
    console.log(values)
    useEffect(() => {
        console.log('cambio email, name o descripcion')
    }, [email, name, descripcion])
 */

    return [values, handleInputChange, reset]


}