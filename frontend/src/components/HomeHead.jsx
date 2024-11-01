import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


function HomeHead({data, setFilteredCountries}) {
    
    const [inputs, setInputs] = useState()
    const regions = ['Africa', 'Asia', 'Americas', 'Europe', 'Oceania']
    const [show, setShow] = useState(true)
    
    const handleSearch = () => {
        const filtered = data.filter(country => 
            country.name.toLowerCase().includes(inputs.toLowerCase())
        )
        
        setFilteredCountries(filtered)
        if (filtered.length === 0) {
            return <div className='h-screen text-center font-bold text-3xl dark:text-white'>{inputs} does not exist in our Database...</div>

        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    useEffect(() => {
        if (inputs === '') {
            setFilteredCountries(data)
        }
    }, [inputs, data, setFilteredCountries])

    return (
        <section className='m-8'>
            <div className="flex justify-between items-center max-sm:block">
                <div className="flex item-center gap-4 border dark:shadow-lg shadow-slate-400 w-fit max-sm:w-full p-2 shadow">
                    <button onClick={handleSearch}><i className="bi bi-search dark:text-white"></i></button>
                    <input type="search" onKeyDown={handleKeyDown} placeholder="search for a country" className="w-[20rem] outline-none dark:text-white dark:bg-slate-900" onChange={(e) => setInputs(e.target.value)}/>
                </div>

                <div className="max-sm:mt-5 relative">
                    
                    <button onClick={() => setShow(!show)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 " type="button">Filter By Region <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    </button>

                    <div id="dropdownHover" className={`z-10 ${show ? 'hidden' : 'block'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                            {
                                regions.map((region, index) => (
                                    <li key={index}>
                                        <Link to={`region/${region}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{region}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
                </div>
                
        </section>
    )
}

HomeHead.propTypes = {
    setFilteredCountries: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            flag: PropTypes.string,
            population: PropTypes.number,
            region: PropTypes.string,
            capital: PropTypes.string
        })
    ).isRequired
}

export default HomeHead