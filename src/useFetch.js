import { useEffect, useState} from "react";
import App from "./App";
export default function useFetch(options={}, url){
    const [loading, setLoading]=useState(false)
    const [data, setData]= useState(null)
    const [errors, setErrors]=useState(null)
useEffect(()=>{
    fetch(url, {
        ...options,
        headers: {
            'Accept': 'applicaton/json; charset=UTF-8',
            ...options.headers
        }
    })
    .then(r=>r.json()).then(data=>{
        setLoading(false)
        setData(data)
    }).catch((e)=>{
        setErrors(e)
    }).finally(()=>{setLoading(false)
    })
},[])
return
{data, loading,errors}
}