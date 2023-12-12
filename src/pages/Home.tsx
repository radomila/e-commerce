import useProducts from '../hooks/useProducts';
import {
  HomepageImg,
  HomepageItem,
  HomepageContainer,
  HomepageItemText,
  HomepageTitle,
  HomepagePrice,
} from '../StyledComponents';

export default function Home() {
  const { products, loading } = useProducts();
  console.log(products);

  return (
    <HomepageContainer>
      {products.slice(0, 4).map((product) => {
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
