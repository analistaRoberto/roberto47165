import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) =>{
    const [count, setCout] = useState(1)
    return (
        <div>
            <h4>1</h4>
            <button>-</button>
            <button onClick={()=> onAdd()}>Agregar al Carrito</button>
            <button>+</button>

        </div>
    )
}
export default ItemCount