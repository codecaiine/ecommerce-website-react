import { styled } from '@material-ui/core';
import { categories } from '../data';
import CategoryItem from './CategoryItem';

const Container = styled.div``;

const Categories = () => (
  <Container>
    {categories.map((item) => (
      <CategoryItem item={item} key={item.id} />
    ))}
  </Container>
);

export default Categories;
