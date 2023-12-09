import { useEffect, useState } from "react";
import React from "react";

import MealItem from "./MealItem";
import Card from "../UI/Card";
import classes from './MealList.module.css';

const MealList = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async() => {
            const response = await fetch('https://react-http-d316b-default-rtdb.firebaseio.com/meals.json');

            if (!response.ok) {
                throw new Error('Something went wrong!')
            }
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        }

       fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
       })
    }, []);

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                 <p>Loading...</p>
            </section>
        )
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }
    
    const content = meals.map((item) => {
        return <MealItem key={item.id} item={item} />
        
    })
    
    return (
        <Card>
            <section className={classes.meals}>
                <ul>
                    {content}
                </ul>
            </section>
        </Card>
    )
};

export default MealList;