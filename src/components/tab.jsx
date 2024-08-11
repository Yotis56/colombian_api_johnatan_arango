

const Tab = ({selectedTab, setSelectedTab}) => {
    
    const handleClick = (event) => {
        const target = event.target.attributes['name'].value
        console.log(target)
    }

    return (
        <>
            <nav>
                <ul>
                    <li name='presidentes' id='presidentes' onClick={handleClick}>Presidentes</li>
                    <li name='atracciones' onClick={handleClick}>Atracciones Turísticas</li>
                    <li name='aeropuertos' onClick={handleClick}>Aeropuertos</li>
                </ul>
            </nav>
            
        </>
    )
}

export { Tab }