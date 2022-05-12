import { useEffect, useState } from "react"

const useService = (_id) => {
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/items/${_id}`)
            .then(res => res.json())
            .then(data => {

                setService(data)
            })
    }, [_id]);
    return [service, setService]
};
export default useService;