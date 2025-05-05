import WaterIceData from '../data/CompleteWaterIceData.json';


function DisplayNutrition({ itemType, flavor, size }) {
    if (!itemType || !flavor || !size) return null;

    const normalize = (value) =>
        value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
    

    const item = WaterIceData.find(
    (entry) =>
        entry.type === normalize(itemType) &&
        entry.flavor === normalize(flavor) &&
        entry.size === normalize(size)
    );

    if (!item) return <p>No nutrition info found for this selection</p>;

    return(
        <div>
            <p>Here's the nutrition information for a {item.size} {item.flavor} {item.type}: </p>
            <ul>
                <li>Calories: {item.calories}</li>
                <li>Total Fat: {item.fat}g</li>
                <li>Saturated Fat: {item.saturated_fat}g</li>
                <li>Trans Fat: {item.trans_fat}g</li>
                <li>Cholesterol: {item.cholesterol}mg</li>
                <li>Sodium: {item.sodium}mg</li>
                <li>Total Carbohydrates: {item.total_carbohydrates}g</li>
                <li>Sugars: {item.total_sugar}g</li>
                <li>Added Sugars: {item.added_sugar}g</li>
                <li>Protein: {item.protein}g</li>
            </ul>

        </div>
    );
}

export default DisplayNutrition