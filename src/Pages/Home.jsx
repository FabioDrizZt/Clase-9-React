import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Bienvenidos a nuestro primer e-commerce</h1>
      <Outlet />
      <Footer />
    </>
  );
}
