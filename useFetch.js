import {useState, useEffect, useRef} from 'react';

export const useFetch = (url) => {

    const isMounted = useRef(true)

    const [state, setstate] = useState({data : null, loading : true, error : null});


    useEffect(() => {
 
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        //inicializo el state para que loading sea true y se muestr en cada peticion
        setstate({data : null, loading : true, error : null});

        fetch( url )
            .then(resp => resp.json())
            .then (data => {

                setTimeout(()=>{
                    if(isMounted.current){
                        setstate({
                            ...state,
                            loading :false,
                            data
                        })
                    }else{
                        console.log('setState no se llamo')
                    }

                }, 4000)
            })
    }, [url])

    return state;

}
