import { useEffect, useState } from "react"

const API = 'https://api-colombia.com/api/v1/'

const Home = ( ) => {
    const [presidentes, setPresidentes] = useState([])
    const [aeropuertos, setAeropuertos] = useState([])
    const [atracciones, setAtracciones] = useState([])
    const [departamentos, setDepartamentos] = useState([])

    useEffect( () => {
        const getData = async (endpoint) => {
            try {
                const rawData = await fetch(`${API}${endpoint}`)
                const data = await rawData.json()
                switch(endpoint){
                    case 'President':
                        setPresidentes(data)
                        break
                    case 'TouristicAttraction':
                        setAtracciones(data)
                        break
                    case 'Airport':
                        setAeropuertos(data)
                        break
                    case 'Department':
                        setDepartamentos(data)
                        break
                }
            } catch (e) {
                console.error(e)
            }
        }
        getData('President')
        getData('TouristicAttraction')
        getData('Airport')
        getData('Department')
        
    }, [])
    
    let partidosGrouped = []
    let atraccionesGrouped = []
    let aeropuertosGrouped = []

    const groupPresidents = () => {
        presidentes.forEach( presidente => {
            const existsPartido = partidosGrouped.find( partido => partido.name.toLowerCase() === presidente.politicalParty.toLowerCase())
            if (existsPartido) {
                const index = partidosGrouped.findIndex( partido => partido.name.toLowerCase() === presidente.politicalParty.toLowerCase())
                partidosGrouped[index].count += 1
                partidosGrouped[index].presidents.push(presidente)
            } else {
                partidosGrouped.push({
                name: presidente.politicalParty,
                count: 1,
                presidents: [presidente]})               
            }
        })
        partidosGrouped.sort((a,b) => b.count - a.count)
    }
    
    const groupAtractions = () => {
        atracciones.forEach( atraccion => {
            // obtengo el objeto Departamento de la atracción
            const departmentAtraction = departamentos.find( departamento => departamento.id === atraccion.city.departmentId )
            // miro si ese departamento ya está en mi array agrupado
            const departmentIndex = atraccionesGrouped.findIndex( item => item.id === departmentAtraction.id)
            if (departmentIndex !== -1) {
                // Si el departamento existe, ahora busco si existe la ciudad en el array agrupado
                const cityIndex = atraccionesGrouped[departmentIndex].cities.findIndex( item => item.id === atraccion.cityId)
                if (cityIndex !== -1){
                    // si el departamento y la ciudad existen, simplemente aumento la cuenta
                    atraccionesGrouped[departmentIndex].count += 1
                    atraccionesGrouped[departmentIndex].cities[cityIndex].count += 1
                } else {
                    // en este caso, existe el departamento, pero tengo que crear la ciudad.
                    atraccionesGrouped[departmentIndex].cities.push({
                        city: atraccion.city.name,
                        id: atraccion.cityId,
                        count: 1,
                    })
                    atraccionesGrouped[departmentIndex].count += 1
                }
            } else {
                // en este caso, no existe ni el departamento ni la ciudad en el array agrupado, así que creo ambos.
                atraccionesGrouped.push({
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
    }


    const groupAirports = () => {
        aeropuertos.forEach( aeropuerto => {
            const departmentIndex = aeropuertosGrouped.findIndex( item => item.id === aeropuerto.deparmentId)
            if (departmentIndex !== -1){
                aeropuertosGrouped[departmentIndex].count += 1
                const cityIndex = aeropuertosGrouped[departmentIndex].cities.findIndex( item => item.id === aeropuerto.cityId)
                if (cityIndex !== -1) {
                    aeropuertosGrouped[departmentIndex].cities[cityIndex].count += 1
                } else {
                    aeropuertosGrouped[departmentIndex].cities.push({
                        city: aeropuerto.city.name,
                        id: aeropuerto.cityId,
                        count: 1
                    })
                }
            } else {
                aeropuertosGrouped.push({
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
    }

    groupPresidents()
    groupAtractions()
    groupAirports()
    console.log(aeropuertosGrouped)
    return (
        <>
            <p>Home page under construction</p>
        </>
    )
}

export { Home }