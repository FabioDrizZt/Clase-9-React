import { Link, Outlet } from "react-router-dom";

export default function Shop({data}) {

  return (
    <>
      <h3>Listado de proudctos</h3>
      <Outlet />
      {data.map((producto) => (
        <Link key={producto.id} to={`${producto.id}`}>
          <li>{producto.title}</li>
        </Link>
      ))}
    </>
  );
}
