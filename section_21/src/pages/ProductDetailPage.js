import { useParams } from "react-router-dom";

function ProductDetailPage () {
    const params = useParams();

    return (
        <>
            <h1>Product Detail</h1>
            {/* '.productId' needs to be matched with after ':' in route's path */}
            <p>{params.productId}</p>
        </>
    )
};

export default ProductDetailPage;