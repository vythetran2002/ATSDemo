import { useState, useEffect } from "react";
import axios from 'axios';

const UseFetch = (url) => {
    const [data, setData] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(url);
        setData(response.data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return data;
}

export default UseFetch;