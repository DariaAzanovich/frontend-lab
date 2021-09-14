import { useSelector } from "react-redux";

const Ingredients = () => {
    const state = useSelector(state => state);
    const result = [];
    let strIngredient = 'strIngredient';
    let strMeasure = 'strMeasure';
    console.log(state);

    const createTr = (i, ingredient, qnty, measure) => {
        return (
            <tr>
                <td results="all">{i}</td>
                <td>{ingredient}</td>
                <td>{qnty}</td>
                <td>{measure}</td>
            </tr>
        )
    };

    for(let i = 1; i < 16; i++) {
        const ingredient = state.fetchRandomCocktail.cocktail[0][strIngredient + i];

        let measure = state.fetchRandomCocktail.cocktail[0][strMeasure + i];
        let qnty = '';

        if(measure) {
            qnty = measure.replace(/\D+$/, '');
            measure = measure.replace(qnty, '');
        }

        if(ingredient) {
            result.push(createTr(i, ingredient, qnty, measure));
        } else {
            break;
        }
    }

    return (
        result
    )
}

export default Ingredients;