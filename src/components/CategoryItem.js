import { styled } from '@material-ui/core';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

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
