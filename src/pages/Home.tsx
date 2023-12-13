import useProducts from '../hooks/useProducts';
import {
  HomepageImg,
  HomepageItem,
  HomepageContainer,
  HomepageItemText,
  HomepageTitle,
  HomepagePrice,
} from '../StyledComponents';

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
    <HomepageContainer>
      {products.slice(0, 4).map((product: Product) => {
        return (
          <HomepageItem key={product.id}>
            <HomepageImg src={product.image} alt={product.title} />
            <HomepageItemText>
              <HomepageTitle>{product.title}</HomepageTitle>
              <HomepagePrice>{product.price} $</HomepagePrice>
            </HomepageItemText>
          </HomepageItem>
        );
      })}
    </HomepageContainer>
  );
}
