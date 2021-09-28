import { useSelector } from "react-redux";

const IngredientCard = () => {
    const state = useSelector(state => state);

    const STR_INGREDIENT = 'strIngredient';
    const STR_DESCRIPTION = 'strDescription';
    const STR_TYPE = 'strType';
    const INGREDIENT = state.search.ingredients[0];

    const INGREDIENT_NAME = INGREDIENT[STR_INGREDIENT];
    const INGREDIENT_DESCR = INGREDIENT[STR_DESCRIPTION];
    const INGREDIENT_TYPE = INGREDIENT[STR_TYPE];
    const NO_INFO = '-';

    return (
        <li className="ingredient-card">
            <p className="bold-text">
                {INGREDIENT_NAME}
            </p>
            
            <p>
            <span className="bold-text">Description: </span> {INGREDIENT_DESCR || NO_INFO}
            </p>
            
            <p>
                <span className="bold-text">Type:</span> {INGREDIENT_TYPE || NO_INFO}
            </p>
        </li>
    )
}

export default IngredientCard;