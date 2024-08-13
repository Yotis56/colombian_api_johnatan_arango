import { Collapsible } from "./Colapsible"

const AirportView = ({data, groupedData, specialGroupedData, time}) => {
    console.log(specialGroupedData)
    return (
        <div className="viewer-container">
            <div className="viewer_count">
                <p>{`Número de registros: ${data.length}, tiempo de respuesta de la petición al servidor: ${time} ms.`}</p>
            </div>
            <div className="viewer_list">
                <Collapsible label='Entidad Completa'>
                    <div className="small-container">
                        {
                        data.map( airport => (
                            <div key={airport.id} className="item-container small">
                                <div className="info-container">
                                    <p className="name"><span>Nombre: </span>{`${airport.name}`}</p>
                                    <p className="since"><span>Tipo: </span>{`${airport.type}`}</p>
                                    <p className="party"><span>Departamento: </span>{`${airport.department.name}`}</p>
                                    <p className="party"><span>Ciudad: </span>{`${airport.city.name}`}</p>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </Collapsible>
                <Collapsible label='Entidad Agrupada por Departamento y Ciudad'>
                    <div className="small-container">
                        {
                            groupedData.map( department => (
                                <div className="item-container small" key={department.id}>
                                    <div className="partido-container">
                                        <div className="partido-info">
                                            <p><span>Departamento: </span>{department.department}</p>
                                            <p><span>No. de Aeropuertos: </span>{department.count}</p>
                                        </div>
                                        <ul>
                                            {
                                            department.cities.map( city => (
                                                <li key={city.id}>
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
                <Collapsible label='Visualización de datos agrupados por región'>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Región</th>
                                    <th>Departamento</th>
                                    <th>Ciudad</th>
                                    <th>Tipo de aeropuerto</th>
                                    <th>Conteo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.entries(specialGroupedData.Region).map( ([region, departmentObject]) => (
                                       Object.entries(departmentObject.departamento).map( ([departamento, cityObject]) => (
                                            Object.entries(cityObject.ciudad).map( ([ciudad, tipoObject]) => (
                                                Object.entries(tipoObject.tipo).map( ([tipo, count], index) => (
                                                    <tr>
                                                        <td>{region}</td>
                                                        <td>{departamento}</td>
                                                        <td>{ciudad}</td>
                                                        <td>{tipo}</td>
                                                        <td>{count}</td>
                                                    </tr>
                                                ))
                                            ))     
                                       ))
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </Collapsible>
            </div>
        </div>
    )
}

export { AirportView }