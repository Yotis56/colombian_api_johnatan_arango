import { useEffect, useState } from "react"

const API = 'https://api-colombia.com/api/v1/'

const partidosPolEjemplo = [
    {
        name: 'Partido Liberal',
        noPresidents: 2, 
        presidents: [
            // {...},
            // {...},
        ]
    },
    /* { Se repite la estructura con otro objeto de un partido político}*/ 
]
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
    let partidosPol = []

    const orderPresidents = () => {
        presidentes.forEach( presidente => {
            const partido = partidosPol.find( partido => partido.name.toLowerCase() === presidente.politicalParty.toLowerCase())
            if (partido) {
                const index = partidosPol.findIndex( partido => partido.name.toLowerCase() === presidente.politicalParty.toLowerCase())
                partidosPol[index].noPresidents += 1
                partidosPol[index].presidents.push(presidente)
            } else {
                partidosPol.push({
                name: presidente.politicalParty,
                noPresidents: 1,
                presidents: [presidente]})               
            }
        })
        partidosPol.sort((a,b) => b.noPresidents - a.noPresidents)
    }
    orderPresidents()
    console.log(partidosPol)
    return (
        <>
            <p>Home page under construction</p>
        </>
    )
}

export { Home }