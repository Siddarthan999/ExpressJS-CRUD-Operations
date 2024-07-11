const { request, response } = require('express');
const cityData = require('../data/cityData');

const getAllCityData = (request, response) => {
    response.status(200).json(cityData)
}

const addNewCityData = (request, response) => {
    const {id} = request.body
    cityData.map(iterator => {
    if(iterator.id == id)
    {
        return response.status(409).json({message: 'Duplicate data :('})
    }
    })
    console.log("Post method Called");
    console.log(request.body);
    cityData.push(request.body)
    return response.status(201).json({message: 'Added Successfully :)'})
}

// const getCityById = (request, response) => {
//     const id = Number(request.params.id);
//     const index = cityData.findIndex(iterator => iterator.id === id)
//     if(index != -1)
//     {
//         return response.status(200).json(cityData[index]);
//     }
//     else
//     {
//         return response.status(401).json({message: 'Invalid ID'});
//     }
// }

const getCityById = (request, response) => {
    let expectedCityData;
    if(request.city)
    {
        expectedCityData = request.city
    }
    if(expectedCityData)
    {
        return response.status(200).json(expectedCityData);
    }
    else
    {
        return response.status(404).json({message: 'Invalid ID'});
    }
}

const updateCityData = (request,response) => {
    const id = Number(request.params.id);
    const index = cityData.findIndex(iterator => iterator.id === id)
    const dataToBeUpdated = request.body;
    if(index !== -1)
    {
        cityData[index] = {id, ...dataToBeUpdated}
        return response.status(200).json({message: 'Updated Successfully'})
    }
    else
    {
        return response.status(401).json({message: 'Invalid ID'});
    }
}

const deleteCityData = (request,response) => {
    const id = Number(request.params.id);
    const index = cityData.findIndex(iterator => iterator.id === id)
    if(index !== -1)
    {
        cityData.splice(index, 1)
        return response.status(200).json({message: 'Deleted Successfully'})
    }
    else
    {
        return response.status(401).json({message: 'Invalid ID'});
    }
}


module.exports = {getAllCityData, addNewCityData, getCityById, updateCityData, deleteCityData}