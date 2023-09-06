const ItemDetail =({name, price, img, stock, description}) => {
    return (
      <div>
        <h1>{name}</h1>
        <img src={img} style={{width: 500}} />
        <h3>{price}</h3>
        <h3>{description}</h3>
      </div>  
    )
}
export default ItemDetail