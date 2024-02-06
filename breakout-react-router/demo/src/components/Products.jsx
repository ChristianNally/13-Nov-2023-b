import {Link, Navigate} from 'react-router-dom';

const Products = (props) => {
  if (props.dontNavigate) {
    return <Navigate to="/home" />;
  }

  return (
    <div>
      <h2>Products Component</h2>
      <Link to="/products/1">Product #1 </Link>
      <Link to="/products/2">Product #2 </Link>
      <Link to="/products/3">Product #3 </Link>
      <Link to="/products/4">Product #4 </Link>
    </div>
  );
};

export default Products;
