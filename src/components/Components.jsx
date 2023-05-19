import {useState} from 'react'
const Components = () => {
const [cont,setCont] = useState(false)
    
    const acumulador = () => {
        console.log("Soy un clic");
        setCont(cont + 1)
    }
    
    return (
        <>
        <button onClick ={acumulador}>Acumulando</button>
            <p>{cont}</p>
        </>
    )
}


export default Components 