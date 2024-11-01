import { Route, Routes } from "react-router-dom"
import { CountriesRegions, CountryDetail, Home } from "../pages"
import { HomeCard } from "../components"

function AllRoutes() {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:region" element={<HomeCard />}/>
                <Route path="country/:name" element={<CountryDetail />}/>
                <Route path="region/:region" element={<CountriesRegions />}/>
            </Routes>
        </section>
    )
}

export default AllRoutes