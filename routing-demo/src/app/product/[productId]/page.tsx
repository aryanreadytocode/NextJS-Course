export default function ProductDetail({params} : {params: {productId: String}}) {
    return <h1>Details about Product: {params.productId} </h1>
}