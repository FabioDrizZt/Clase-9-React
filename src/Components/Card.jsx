import { useParams } from "react-router-dom";

export default function Card({ data }) {
  const params = useParams();
  let product = data?.find((product) => product.id === params.id);
  console.log(product);
  return (
    <div>
      <h2>{product?.title}</h2>
      <img src={product?.thumbnail} alt={product?.title} width="300px" />
    </div>
  );
}
