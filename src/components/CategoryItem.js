import { styled } from '@material-ui/core';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
