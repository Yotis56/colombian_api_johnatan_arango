import { useEffect, useState } from "react"

const API = 'https://api-colombia.com/api/v1/'

const Home = ( ) => {
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
                }
            } catch (e) {
                console.error(e)
            }
        }
        getData('President')
        getData('TouristicAttraction')
        getData('Airport')

    }, [])

    const [presidentes, setPresidentes] = useState([])
    const [aeropuertos, setAeropuertos] = useState([])
    const [atracciones, setAtracciones] = useState([])
    return (
        <>
            <p>Home page under construction</p>
        </>
    )
}

export { Home }