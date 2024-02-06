import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>

      <Link to="/home">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>
    </div>
  );
};

export default Nav;
