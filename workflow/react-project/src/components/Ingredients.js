import { useSelector } from "react-redux";

const Ingredients = (props) => {
    const state = useSelector(state => state);
    const result = [];
    let strIngredient = 'strIngredient';
    let strMeasure = 'strMeasure';

    // console.log(props.type);
    // console.log(props.data);

    const createTr = (i, ingredient, qnty, measure) => {
        return (
            <tr key={i}>
                <td>{i}</td>
                <td>{ingredient}</td>
                <td>{qnty}</td>
                <td>{measure}</td>
            </tr>
        )
    };
    
    if(props.data) {
        for(let i = 1; i < 16; i++) {
            const ingredient = props.data[strIngredient + i];
    
            let measure = props.data[strMeasure + i];
            let qnty = '';
    
            if(measure) {
                qnty = measure.replace(/(^\D+) |(\D+$)/, '');
                measure = measure.replace(qnty, '');
            }
    
            if(ingredient) {
                result.push(createTr(i, ingredient, qnty, measure));
            } else {
                break;
            }
        }
    } else {
        for(let i = 1; i < 16; i++) {
            const ingredient = state.randomCocktail.cocktail[0][strIngredient + i];
    
            let measure = state.randomCocktail.cocktail[0][strMeasure + i];
            let qnty = '';
    
            if(measure) {
                qnty = measure.replace(/(^\D+) |(\D+$)/, '');
                measure = measure.replace(qnty, '');
            }
    
            if(ingredient) {
                result.push(createTr(i, ingredient, qnty, measure));
            } else {
                break;
            }
        }
    }

    return result;
}

export default Ingredients;