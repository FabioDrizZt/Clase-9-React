import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Card from "./Components/Card";
import ErrorComponent from "./Pages/ErrorComponent";

function App() {
  const [data, setData] = useState([]);
  const url = "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas";

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data.results);
      setData(res.data.results);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/shop" element={<Shop data={data} />}>
              <Route path="/shop/:id" element={<Card data={data} />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
