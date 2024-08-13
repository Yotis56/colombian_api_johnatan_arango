import { Collapsible } from "./Colapsible"

const AtractionView = ({data, groupedData, time}) => {
    return (
        <div className="viewer-container">
            <div className="viewer_count">
                <p>{`Número de registros: ${data.length}, tiempo de respuesta de la petición al servidor: ${time} ms.`}</p>
            </div>
            <div className="viewer_list">
                <Collapsible label='Entidad Completa'>
                <div>
                        {
                        data.map( atraction => (
                            <div key={atraction.id} className="item-container">
                                <div className="image-container">
                                    <img src={atraction.images[0]} alt={`${atraction.name}`} loading="lazy" />
                                </div>
                                <div className="info-container">
                                    <p className="name"><span>Nombre: </span>{`${atraction.name}`}</p>
                                    <p className="since"><span>Ubicación: </span>{`${atraction.city.name}`}</p>
                                    <p className="description">{atraction.description}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </Collapsible>
                <Collapsible label='Entidad Agrupada por Departamento y Ciudad'>
                    <div className="small-container">
                        {
                            groupedData.map( atraction => (
                                <div className="item-container small" key={atraction.id}>
                                    <div className="partido-container">
                                        <div className="partido-info">
                                            <p><span>Departamento: </span>{atraction.departamento}</p>
                                            <p><span>Atracciones: </span>{atraction.count}</p>
                                        </div>
                                        <ul>
                                            {
                                            atraction.cities.map( city => (
                                                <li key={city.id} className="grouped-airport__city">
                                                    <p><span>{city.city}</span>{`: ${city.count}`}</p>
                                                </li>
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

export { AtractionView }