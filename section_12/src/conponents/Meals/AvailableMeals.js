import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css' ;

const PORK_MEALS = [
    {
        id: 'm1',
        name: 'Pork Fillet',
        description: '2 Pork Fillets, cabage salad, and lemon on the top',
        price: 800
    },
    {
        id: 'm2',
        name: 'Pork Fillet Big',
        description: '3 Pork Fillets, cabage salad, and lemon on the top',
        price: 1200 
    },
    {
        id: 'm3',
        name: 'Special Pork Fillet',
        description: 'Several Pork Fillets, cabage salad, and lemon on the top',
        price: 1500
    },
    {
        id: 'm4',
        name: 'Stick Pork Fillet',
        description: 'A thick large Pork Fillets, cabage salad, and lemon on the top',
        price: 1400
    }
]
 
const AvailableMeals = (props) => {
const mealsList = PORK_MEALS.map(meal => (
    <MealItem 
        id={meal.id} 
        key={meal.id} 
        name={meal.name}
        description={meal.description}
        price={meal.price}      
    />
));

    return (
        <section className={classes.summary}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
};

export default AvailableMeals;