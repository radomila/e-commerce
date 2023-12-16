import { Item } from './Item';
import { Image } from './Image';
import { Text } from './Text';
import { Title } from './Title';
import { Price } from './Price';

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

interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  return (
    <Item>
      <Image src={product.image} alt={product.title} />
      <Text>
        <Title>{product.title}</Title>
        <Price>{product.price} $</Price>
      </Text>
    </Item>
  );
}

export default Card;
