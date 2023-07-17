import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food, Delivered To You</h2>
            <p>
                Choose your favorite meal from our broad section of available meals 
                and enjoy a delicious suthentic Japanese dinner in Hirosaki!
            </p>
            <p>
                All our meat are from Aomori.  
            </p>
            <p>
                Oil that we use is 100% soy-beans oil. 
            </p>
            <p>
                Bread flakes are originally made with our local bakery. 
            </p>
            <p>
                Our Special sauce are based on vegetable and chicken bouillon. 
                We've used the special recipe for it since our restaurant was built in 1955. 
            </p>
        </section>
        
    )
}

export default MealsSummary;