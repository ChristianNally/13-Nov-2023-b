import {useParams, useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const Product = () => {
  const params = useParams(); // req.params
  console.log(params);

  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 2000);
  }, [navigate]);

  // useEffect(() => {
  //   fetch(`/api/products/${params.productId}`)
  // }, [params.productId]);

  return (
    <div>
      <h2>Product Component</h2>
      <h2>Product Number {params.productId}</h2>
    </div>
  );
};

export default Product;
