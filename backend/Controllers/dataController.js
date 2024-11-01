const data = require('../data.json')


exports.countries = async(req, res) => {
    try {
        const countries = await data.map((country, index) => {
            return country
        })
        res.status(200).json({countries: countries});
    } catch (error) {
        res.status(400).json({message: "could not fetch the data..."});
    }
}


exports.country = async(req, res) => {
    const { name } = req.params
    try {
        const country = await data.find(country => country.name === name.charAt(0).toUpperCase() + name.slice(1))
        res.status(200).json({ countries: country})
    } catch (error) {
        res.status(400).json({ message: `could not find ${name.charAt(0).toUpperCase() + name.slice(1)}`})
    }
}

exports.regions = async(req, res) => {
    const region = req.params.region
    try {
        if (region) {
            const countriesRegion = data.filter(country => country.region === region.charAt(0).toUpperCase() + region.slice(1))
            res.status(200).json({countries: countriesRegion})
        } else {
            res.status(400).json({message: `region ${region.charAt(0).toUpperCase() + region.slice(1)} is not existing`})
        }
    } catch (error) {
        res.status(404).json({message: error})
    }
}
