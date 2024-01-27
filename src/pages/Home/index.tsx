import useProducts from '../../hooks/useProducts';
import { Container } from './Container';
import Card from '../../components/Card';

interface Rating {
  count: number;
  rate: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export default function Home() {
  const { products, loading }: { products: Product[]; loading: boolean } =
    useProducts();

  return (
    <Container>
      {products
        .sort(function (product1: Product, product2: Product) {
          return product1.price - product2.price;
        })
        .slice(0, 4)
        .map((product: Product) => {
          return (
            <>
              <Card product={product} />
            </>
          );
        })}
    </Container>
  );
}
