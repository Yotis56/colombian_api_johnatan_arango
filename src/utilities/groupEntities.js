const groupPresidents = (presidentes) => {
    let groupedData = []
    presidentes.forEach( presidente => {
        const existsPartido = groupedData.find( partido => partido.name.toLowerCase() === presidente.politicalParty.toLowerCase())
        if (existsPartido) {
            const index = groupedData.findIndex( partido => partido.name.toLowerCase() === presidente.politicalParty.toLowerCase())
            groupedData[index].count += 1
            groupedData[index].presidents.push(presidente)
        } else {
            groupedData.push({
            name: presidente.politicalParty,
            count: 1,
            presidents: [presidente]})               
        }
    })
    return groupedData.sort((a,b) => b.count - a.count)
}

const groupAtractions = (atracciones, departamentos) => {
    let groupedData = []
    atracciones.forEach( atraccion => {
        // obtengo el objeto Departamento de la atracción
        const departmentAtraction = departamentos.find( departamento => departamento.id === atraccion.city.departmentId )
        // miro si ese departamento ya está en mi array agrupado
        const departmentIndex = groupedData.findIndex( item => item.id === departmentAtraction.id)
        if (departmentIndex !== -1) {
            // Si el departamento existe, ahora busco si existe la ciudad en el array agrupado
            const cityIndex = groupedData[departmentIndex].cities.findIndex( item => item.id === atraccion.cityId)
            if (cityIndex !== -1){
                // si el departamento y la ciudad existen, simplemente aumento la cuenta
                groupedData[departmentIndex].count += 1
                groupedData[departmentIndex].cities[cityIndex].count += 1
            } else {
                // en este caso, existe el departamento, pero tengo que crear la ciudad.
                groupedData[departmentIndex].cities.push({
                    city: atraccion.city.name,
                    id: atraccion.cityId,
                    count: 1,
                })
                groupedData[departmentIndex].count += 1
            }
        } else {
            // en este caso, no existe ni el departamento ni la ciudad en el array agrupado, así que creo ambos.
            groupedData.push({
                departamento: departmentAtraction.name,
                id: departmentAtraction.id,
                count: 1, 
                cities: [{
                    city: atraccion.city.name,
                    id: atraccion.cityId,
                    count: 1
                }]
            })
        }
    })
    return groupedData
}

const groupAirports = (aeropuertos) => {
    let groupedData = []
    aeropuertos.forEach( aeropuerto => {
        const departmentIndex = groupedData.findIndex( item => item.id === aeropuerto.deparmentId)
        if (departmentIndex !== -1){
            groupedData[departmentIndex].count += 1
            const cityIndex = groupedData[departmentIndex].cities.findIndex( item => item.id === aeropuerto.cityId)
            if (cityIndex !== -1) {
                groupedData[departmentIndex].cities[cityIndex].count += 1
            } else {
                groupedData[departmentIndex].cities.push({
                    city: aeropuerto.city.name,
                    id: aeropuerto.cityId,
                    count: 1
                })
            }
        } else {
            groupedData.push({
                department: aeropuerto.department.name,
                id: aeropuerto.deparmentId,
                count: 1,
                cities: [{
                    city: aeropuerto.city.name,
                    id: aeropuerto.cityId,
                    count: 1
                }]
            })
        }
    })
    return groupedData
}

const groupAirportsPerRegion = (aeropuertos, regiones) => {
    let groupedData = {
        "Region": {}
    }
    aeropuertos.forEach( aeropuerto => {
        const airportRegion = regiones.find( item => item.id === aeropuerto.department.regionId)
        if (!groupedData.Region[airportRegion.name]) {
            groupedData.Region = {
                ...groupedData.Region,
                [airportRegion.name]: {
                    "departamento": {}
                }
            }
        }
        if (!groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name]){
            groupedData.Region[airportRegion.name].departamento = {
                ...groupedData.Region[airportRegion.name].departamento,
                [aeropuerto.department.name]: {
                    "ciudad": {}
                }
            }
        }
        if (!groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad[aeropuerto.city.name]){
            groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad = {
                ... groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad,
                [aeropuerto.city.name]: {
                    "tipo": {}
                }
            }
        }
        if (!groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad[aeropuerto.city.name].tipo[aeropuerto.type]) {
            groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad[aeropuerto.city.name].tipo = {
                ...groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad[aeropuerto.city.name].tipo,
                [aeropuerto.type]: 1
            }
        } else {
            groupedData.Region[airportRegion.name].departamento[aeropuerto.department.name].ciudad[aeropuerto.city.name].tipo[aeropuerto.type] += 1
        }
        
    })
    return groupedData
}

const groupFunctions = {
    groupPresidents,
    groupAtractions,
    groupAirports,
    groupAirportsPerRegion
}
export { groupFunctions }