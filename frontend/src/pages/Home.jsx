import { useState, useEffect } from "react"
import { HomeCard, HomeHead } from "../components"
import useFetch from "../hooks/useFetch"


function Home() {

    const {data, isLoading} = useFetch(`/api/countries`)
    const [filteredCountries, setFilteredCountries] = useState([])

    useEffect(() => {
        if (data) {
            setFilteredCountries(data)
        }
    }, [data])

    if (isLoading) return <div className='h-screen grid content-center text-center font-bold text-3xl dark:text-white'>Loading...</div>


    return (
        <>
            {
                filteredCountries.length === 0 ?  (<div className='h-screen flex flex-col justify-center items-center text-center font-bold text-3xl dark:text-white'>
                    <h1>the searched country does not exist in our Database</h1> 
                    <button onClick={() => window.location.reload()} className='card-shadow p-2 w-24 rounded-md font-bold uppercase text-gray-800 dark:text-white dark:bg-gray-700'>back</button>
                    </div>) :
                (<HomeHead setFilteredCountries={setFilteredCountries} data={data} />)
            }
            <HomeCard countries={filteredCountries} />
        </>
    )
}

export default Home 

