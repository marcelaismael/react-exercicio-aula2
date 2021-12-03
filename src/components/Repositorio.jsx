import { useState, useEffect } from 'react'

function Repositorio () {
    const [repositorios, setRepositorios] = useState([])
    const [busca, setBusca] = useState('')                           
    const [filtro, setFiltro] = useState([])

    useEffect(() =>{
        fetch("https://api.github.com/users/marcelaismael/repos")
            .then(response => response.json())
            .then(data => setRepositorios(data))
    }, [])

    useEffect(()=> {
        setFiltro(                                                    
            repositorios.filter(repositorio =>  {
                return repositorio.name.includes(busca)
            })
        )
    }, [repositorios, busca])   

    
    return(        
        <>
            <input 
                placeholder="Insira o nome do repositório" 
                onChange={e => {setBusca(e.target.value)}} 
            />

            {filtro.map(item =>        
                <div key={item.id}>
                    <ul>
                        <li>
                            <h2>{item.name}</h2>
                        </li>
                    </ul>
                </div>
            )}
        </>

    )   
}

export default Repositorio