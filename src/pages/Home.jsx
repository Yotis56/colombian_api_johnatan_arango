import { useEffect, useState } from "react"
import { Tab } from "../components/tab"
import { EntityView } from "../components/EntityView"
import { groupFunctions } from '../utilities/groupEntities'

const API = 'https://api-colombia.com/api/v1/'

const Home = ( ) => {
    const [presidentes, setPresidentes] = useState([])
    const [aeropuertos, setAeropuertos] = useState([])
    const [atracciones, setAtracciones] = useState([])
    const [departamentos, setDepartamentos] = useState([])
    const [regiones, setRegiones] = useState([])
    const [selectedTab, setSelectedTab] = useState('')


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
                    case 'Region':
                        setRegiones(data)
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
        getData('Region')
        
    }, [])
    
    const partidosGrouped = groupFunctions.groupPresidents(presidentes)
    const atraccionesGrouped = groupFunctions.groupAtractions(atracciones, departamentos)
    const aeropuertosGrouped = groupFunctions.groupAirports(aeropuertos)
    const aeropuertosGroupedByRegion = groupFunctions.groupAirportsPerRegion(aeropuertos, regiones)
    
    return (
        <>
            <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <EntityView />
        </>
    )
}

export { Home }