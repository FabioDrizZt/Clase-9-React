import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div>
      <h3 onClick={()=> navigate(-1)}>Back</h3>
      <img
        src="https://edicom.com.ar/dam/jcr:ff2ca114-b0b9-40c5-9c9c-f854ce6959e0/mercado_livre_integration.png"
        alt="Logo-ML"
      />
      <Link to="/">
        <h3>Home</h3>
      </Link>
      <Link to="/shop">
        <h3>Shop</h3>
      </Link>
      <Link to="/contact">
        <h3>Contacto</h3>
      </Link>
    </div>
  );
}
