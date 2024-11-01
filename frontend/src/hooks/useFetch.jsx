import { useEffect, useState } from "react"


function useFetch(url) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("unable to fetch data") 
                }
                const data = await response.json();
                setData(data.countries)
            } catch (error) {
                console.log(error)
            }finally {
                setIsLoading(false)
            }
        }

        fetchData();
    }, [url])

    return { data, isLoading }
}

export default useFetch