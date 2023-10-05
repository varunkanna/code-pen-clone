import { useState, useEffect } from 'react'

function useLocalStorage(key, initVal) {
    const url = 'code-pen-clone-';
    const PerfixedKey = url + key;
    const [value, setValue] = useState(() => {
        const getVal = localStorage.getItem(PerfixedKey);

        if(getVal != null) return JSON.parse(getVal);
        if(typeof initVal === 'function'){
            return initVal();
        }else{
            return initVal;
        }
    })

    useEffect(() => {
        localStorage.setItem(PerfixedKey, JSON.stringify(value));
    },[PerfixedKey, value])
    

  return [value, setValue]
}

export default useLocalStorage