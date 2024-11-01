import { Link } from "react-router-dom"


// eslint-disable-next-line react/prop-types
function HomeCard({countries}) {

    return (
        <section className="mx-8 mt-8 pb-8 h-full overflow-hidden">
            <div className="grid lg:grid-cols-4 gap-8 md:grid-cols-2 sm:grid-cols-1">
                {
                    // eslint-disable-next-line react/prop-types
                    countries.map((country, index) => (
                        <div key={index} className="mt-8 w-72 max-sm:w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <Link to={`country/${country.name}`}><img className="rounded-t-lg w-full h-48 object-cover" src={country.flag} alt="" /></Link>
                            <div className="p-5">
                                <Link to={`country/${country.name}`}><h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{country.name}</h5></Link>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Population: <span className="text-gray-700 dark:text-gray-300">{country.population.toLocaleString()}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Region: <span className="text-gray-700 dark:text-gray-300">{country.region}</span></h5>
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Capital: <span className="text-gray-700 dark:text-gray-300">{country.capital}</span></h5>
                            </div>
                        </div>

                    ))
                }
                </div>
        </section>

    )
}

export default HomeCard