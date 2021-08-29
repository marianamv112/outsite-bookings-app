const express = require('express');
const propertyRoutes = express.Router();
const db = require("../outsite_properties.json")

const getRegions = () => {
    const regions = [... new Set(db.properties.map(property => property.region))]
    return regions;
}

propertyRoutes.get('/regions/:region', (req, res) => {
    const region = req.params.region
    const properties = db.properties.filter(property => property.region === region)
    res.send({ properties: properties });
});

propertyRoutes.get('/regions', (req, res) => {
    const regions = getRegions();
    res.send({ regions: regions });
});

const getPropertiesByRegion = () => {
    const regions = getRegions();

    var locations = db.properties.reduce((property, current) => {
        regions.forEach((region) => {
            if (!property[region] && current.region === region) {
                property[region] = [{ id: current.id, name: current.wfContent.name, houseName: current.wfContent.houseName }]
            }
            else if (property[region] && current.region === region) {
                property[region].push({ id: current.id, name: current.wfContent.name, houseName: current.wfContent.houseName});
            }

        });
        return property;
    }, {});

    return regions.map((region) => {
        return {
            region: region,
            data: locations[region]
        };
    });
}

propertyRoutes.get('/locations', (req, res) => {
    const results = getPropertiesByRegion()
    res.send({ locations: results });
});


propertyRoutes.get('/space/:id', (req, res) => {
    let space = db.properties.filter(property => property.id === req.params.id)[0]
    res.send({ space: space });
});

module.exports = propertyRoutes;