import { Link, useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function CountryDetail() {

    const {name} = useParams()
    const { data: country, isLoading} = useFetch(`/api/country/${name}`)

    if (isLoading) return <div className='h-screen grid content-center text-center font-bold text-3xl dark:text-white'>Loading...</div>

    return (
        <section className='dark:bg-gray-900 dark:text-white mx-8 mt-8 h-screen overflow-hidden'>

            
            <div>
                <Link to='/'><button className='card-shadow p-2 w-24 rounded-md font-bold uppercase text-gray-800 dark:text-white dark:bg-gray-700'>back</button></Link>
                <div className="mx-8 flex max-sm:block justify-around items-center gap-4">
                    
                    <div className='mt-8'>
                        <img src={country.flag} alt="" className='rounded-lg w-[28rem] h-full object-cover '/>
                    </div>

                    <div className=''>
                        <h5 className="p-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name}</h5>
                        <div className='flex max-sm:block justify-between item-start gap-4'>
                            <div className="p-5">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Native Name: <span className="text-gray-700 dark:text-gray-300">{country.nativeName}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Population: <span className="text-gray-700 dark:text-gray-300">{country.population.toLocaleString()}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Region: <span className="text-gray-700 dark:text-gray-300">{country.region}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Sub-Region: <span className="text-gray-700 dark:text-gray-300">{country.subregion}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Capital: <span className="text-gray-700 dark:text-gray-300">{country.capital}</span></h5>
                            </div>

                            <div className="p-5">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Top Level Domain: <span className="text-gray-700 dark:text-gray-300">{country.topLevelDomain}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Currencies: 
                                    {country.currencies && country.currencies.map((currency, index) => (
                                        <span key={index} className="text-gray-700 dark:text-gray-300"> {currency.name}</span>
                                    ))}
                                </h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Languages: 
                                    {country.languages && country.languages.map((language, index) => (
                                        <span key={index} className="text-gray-700 dark:text-gray-300"> {language.name}</span>
                                    ))}
                                </h5>
                            </div>

                        </div>

                        
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Borders: 
                            {country.borders && country.borders.map((border, index) => (
                                <span key={index} className='card-shadow p-2 m-1 w-24 rounded-md font-bold uppercase text-gray-800 dark:text-white dark:bg-gray-700'>
                                    {border}
                                </span>
                            ))}
                        </h5>
                        
                    </div>


                </div>

            </div>
            


        </section>
    )
}

export default CountryDetail