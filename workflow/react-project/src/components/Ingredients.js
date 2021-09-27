import { useSelector } from "react-redux";

const Ingredients = (props) => {
    const state = useSelector(state => state);
    const result = [];
    let strIngredient = 'strIngredient';
    let strMeasure = 'strMeasure';

    const createIngredient = (cocktails, ind) => {
        for(let i = 1; i < 16; i++) {
            const ingredient = cocktails[ind][strIngredient + i];
    
            let measure = cocktails[ind][strMeasure + i];
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

    createIngredient(state.cocktailData.cocktails, 0);   

    return result;
}

export default Ingredients;