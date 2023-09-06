import { useEffect, useState } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContain = () => {
    const [product, setProduct] = useState(null)

    const {productId} = useParams()
    useEffect(() => {
        getProductsById(productId)
            .then(res => {
                setProduct(res)
            })
        .catch(error =>{
            console.error(error)
        })
    }, [productId])
    return (
        <div>
            <h1>
            Aqui estaran los detalles del producto
            </h1>
            <ItemDetail {...product}/>
        </div>
    )
}
export default ItemDetailContain