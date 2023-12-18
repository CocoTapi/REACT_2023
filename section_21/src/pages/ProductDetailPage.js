import { useParams, Link } from "react-router-dom";

function ProductDetailPage () {
    const params = useParams();

    return (
        <>
            <h1>Product Detail</h1>
            {/* '.productId' needs to be matched with after ':' in route's path */}
            <p>{params.productId}</p>
            <p>
                {/* relative="path" goes sibling component. ="route" goes parent's path (Home) */}
                <Link to='..' relative="path">Back</Link> 
            </p>
        </>
    )
};

export default ProductDetailPage;