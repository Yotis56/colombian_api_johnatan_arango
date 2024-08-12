import { Collapsible } from "./Colapsible"

const AtractionView = ({data, groupedData, time}) => {
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

export { AtractionView }