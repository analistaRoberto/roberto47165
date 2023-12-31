import { useEffect, useState } from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import  ItemList  from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


const ItemListerContain = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()
    useEffect(() => {
        const asyncFuntion = categoryId ? getProductsByCategory : getProducts
        asyncFuntion(categoryId)
            .then(res => {
                setProducts(res)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <h1>
                Esta es una prueba

            </h1>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListerContain