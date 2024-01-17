import { useState, useEffect } from "react";
import { server_calls } from "../api/server";

export const useGetData = () => {
    const [ contactData, setData ] = useState<[]>([])

    async function handleDataFetch() {
        const result = await server_calls.get()
        setData(result)
    }

    // useEffect on mount
    useEffect( () => {
        handleDataFetch();
    },[]) // without the empty arry it will run everytime something on the page changes. 
    // with an empty array here it will only occur on mount. 
    // You can also pass a component and it will just look for that one componet
    return { contactData, getData:handleDataFetch}
}