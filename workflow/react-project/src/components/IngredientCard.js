import { useSelector } from "react-redux";

const IngredientCard = () => {
    const state = useSelector(state => state);

    const strIngredient = 'strIngredient';
    const strDescription = 'strDescription';
    const strType = 'strType';

    const ingredientName = state.search.ingredients[0][strIngredient];
    const ingredientDescr = state.search.ingredients[0][strDescription];
    const ingredientType = state.search.ingredients[0][strType];
    const noInfo = '-';

    return (
        <li className="ingredient-card">
            <p className="bold-text">
                {ingredientName}
            </p>
            
            <p>
            <span className="bold-text">Description: </span> {ingredientDescr || noInfo}
            </p>
            
            <p>
                <span className="bold-text">Type:</span> {ingredientType || noInfo}
            </p>
        </li>
    )
}

export default IngredientCard;