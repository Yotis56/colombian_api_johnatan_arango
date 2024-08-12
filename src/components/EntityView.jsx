import { Collapsible } from "./Colapsible"

const EntityView = ({data, groupedData, time}) => {
    // acá falta enviar como props la entidad agrupada
   
    return (
        <div className="viewer-container">
            <div className="viewer_count">
                <p>{`Número de registros: ${data.length}, tiempo de respuesta de la petición al servidor: ${time} ms.`}</p>
            </div>
            <div className="viewer_list">
                <Collapsible label='Entidad Completa'>
                    <ul>    
                    </ul>
                </Collapsible>
                <Collapsible label='Entidad Agrupada'>
                    <p>Content still to be filled</p>
                </Collapsible>
            </div>
        </div>
    )
}

export { EntityView }

//Primero, debería hacer tres componentes, uno por cada entidad (ya que cada una tiene cosas distintas que mostrar)
// lo otro es que para no complicarme, es mejor poner una orderedList con cada info de cada item. la info original y la ordenada
// Para los aeropuertos tengo dos arrays (la info original y agrupada), y la tabla esa cacorra por región. Lo mejor es primero preguntar, porque si se puede no más mostrar la estructura del objeto