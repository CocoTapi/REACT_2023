import { Link, useNavigate } from 'react-router-dom'

function HomePage () {
    const navigate = useNavigate()

    const navigateHandler = () => {
        navigate('./products')
    }

    return (
    <>
        <h1>My Home Page</h1>
        <p>
            Go to <Link to="/products">My List of Products</Link>
        </p>
        <p>
            <button onClick={navigateHandler}>Products</button>
        </p>
    </>
    )
};

export default HomePage;