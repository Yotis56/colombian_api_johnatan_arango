import { useEffect, useState } from "react"
import { Tab } from "../components/tab"
import { groupFunctions } from '../utilities/groupEntities'
import { PresidentView } from "../components/PresidentView"
import { AtractionView } from "../components/AtractionView"
import { AirportView } from "../components/AirportView"

const API = 'https://api-colombia.com/api/v1/'

const Home = ( ) => {
    const [presidentes, setPresidentes] = useState([])
    const [aeropuertos, setAeropuertos] = useState([])
    const [atracciones, setAtracciones] = useState([])
    const [departamentos, setDepartamentos] = useState([])
    const [regiones, setRegiones] = useState([])
    const [selectedTab, setSelectedTab] = useState('presidentes')
    const [responseTime, setResponseTime] = useState({})


    useEffect( () => {
        const getData = async (endpoint) => {
            try {
                const start = Date.now()
                const rawData = await fetch(`${API}${endpoint}`)
                const time = Date.now() - start
                console.log(responseTime)
                setResponseTime({
                    ...responseTime,
                    [endpoint]: time
                })
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
            <header>
                <h1>Reto de uso API Colombia</h1>
                <p>Esta aplicación sencilla es parte del reto de implementación de la API Colombia para algunas entidades, trayendo la información, procesándola y mostrandola</p>
            </header>
            <Tab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            { selectedTab === 'presidentes' &&
                <PresidentView data={presidentes} groupedData={partidosGrouped} time={responseTime.President} />
            }
            { selectedTab === 'atracciones' &&
                <AtractionView data={atracciones} groupedData={atraccionesGrouped} time={responseTime.TouristicAttraction} />
            }
            { selectedTab === 'aeropuertos' &&
                <AirportView data={aeropuertos} groupedData={aeropuertosGrouped} time={responseTime.Airport} />
            }
        </>
    )
}

export { Home }