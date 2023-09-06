const products = [
    {
        id: '1',
        name: 'deportivo',
        price: 1000,
        category: 'deportivo',
        img:'https://www.ryk.cl/on/demandware.static/-/Sites-ryk-master-catalog/default/dw9093ddde/images/large/F3410651/F3410651.jpg',
        stock: 25,
        description: 'Descripcion de iphone 12'
    },
    {id: '2', name: 'optico', price: 800,  category: 'optico', img:'https://www.ryk.cl/on/demandware.static/-/Sites-ryk-master-catalog/default/dwfbdf6907/images/large/E3710490/E3710490.jpg'},
    {id: '3', name: 'infantil', price: 200,  category: 'infantil', img:'https://www.ryk.cl/on/demandware.static/-/Sites-ryk-master-catalog/default/dw6453e72c/images/large/E6510006/E6510006.jpg'}    

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}
export const getProductsById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id == id))
        }, 500)
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category = categoryId))
        }, 500)
    })
}