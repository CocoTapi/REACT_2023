import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DummyData = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p2',
    price: 7,
    title: 'Doraemon',
    description: 'The slice of life about a boy named Nobita and a cat robot from 22th century, Doraemon.'
  },
  {
    id: 'p3',
    price: 6,
    title: 'Natsume Yujin Cho',
    description: 'A story about a lonely boy, Natsume, and lonly yokai(ghosts/demons)'
  },
  {
    id: 'p4',
    price: 6,
    title: 'Detective Conan',
    description: 'The detective story about a very smart highschooler who accidentaly poisened to be 7 years old'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DummyData.map((item) => (
          <ProductItem 
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}  
            description={item.description}
          />
          )
         )}
      </ul>
    </section>
  );
};

export default Products;
