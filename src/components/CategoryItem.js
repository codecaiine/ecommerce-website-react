import { styled } from '@material-ui/core';

const Container = styled.div``;

const CategoryItem = ({ item }) => (
  <Container>
    <Image src={item.img} />
    <Details>
      <Title>{item.title}</Title>
      <Button>SHOP NOW</Button>
    </Details>
  </Container>
);

export default CategoryItem;
