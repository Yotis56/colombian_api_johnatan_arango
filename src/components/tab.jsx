import '../styles/tab.css'

const Tab = ({selectedTab, setSelectedTab}) => {
    
    const handleClick = (event) => {
        const name = event.target.attributes['name'].value
        setSelectedTab(name)
    }

    return (
        <>
            <nav>
                <ul className='items'>
                    <li name='presidentes' onClick={handleClick} className={selectedTab === 'presidentes' ? 'active' : ''} >Presidentes</li>
                    <li name='atracciones' onClick={handleClick} className={selectedTab === 'atracciones' ? 'active' : ''} >Atracciones Turísticas</li>
                    <li name='aeropuertos' onClick={handleClick} className={selectedTab === 'aeropuertos' ? 'active' : ''} >Aeropuertos</li>
                </ul>
            </nav>
            
        </>
    )
}

export { Tab }