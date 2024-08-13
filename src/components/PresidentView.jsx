import { Collapsible } from "./Colapsible"  
import '../styles/presidentView.css'

const PresidentView = ({data, groupedData, time}) => {
    return (
        <div className="viewer-container">
            <div className="viewer_count">
                <p>{`Número de registros: ${data.length}, tiempo de respuesta de la petición al servidor: ${time} ms.`}</p>
            </div>
            <div className="viewer_list">
                <Collapsible label='Entidad Completa'>
                    <div>
                        {
                            data.map( president => (
                                <div key={president.id} className="item-container">
                                   <div className="image-container">
                                        <img src={president.image} alt={`${president.name} ${president.lastName}`} loading="lazy" />
                                   </div>
                                   <div className="info-container">
                                        <p className="name"><span>Nombre: </span>{`${president.name} ${president.lastName}`}</p>
                                        <p className="since"><span>Presidente desde: </span>{`${president.startPeriodDate}`} <span>Hasta: </span> {`${president.endPeriodDate}`} </p>
                                        <p className="party"><span>Partido político: </span>{`${president.politicalParty}`}</p>
                                        <p className="description">{president.description}</p>
                                   </div>
                                </div>
                            ))
                        }
                    </div>
                </Collapsible>
                <Collapsible label='Entidad Agrupada por Partido Político'>
                    <div className="">
                        {
                            groupedData.map( partido => (
                                <div className="item-container" key={partido.name}>
                                    <div className="partido-container">
                                        <div className="partido-info">
                                            <p><span>Partido politico: </span>{partido.name}</p>
                                            <p><span>Presidentes Electos: </span>{partido.count}</p>
                                        </div>
                                        <ul>
                                            {
                                                partido.presidents.map( presidente => (
                                                    <li key={presidente.id}><p>{`${presidente.name} ${presidente.lastName}`}</p></li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </Collapsible>
            </div>
        </div>
    )
}

export { PresidentView }