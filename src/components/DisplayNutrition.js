import WaterIceData from '../data/WaterIceDummyData.json';

function DisplayNutrition({ itemType, flavor, size }) {
    if (!itemType || !flavor || !size) return null;

    const normalize = (str) => str.toLowerCase().replace(/\s+/g, '-');

    const item = WaterIceData.find(
    (entry) =>
        normalize(entry.type) === itemType &&
        normalize(entry.flavor) === flavor &&
        normalize(entry.size) === size
    );

    if (!item) return <p>No nutrition info found for this selection</p>;

    return(
        <div>
            <p>Here's the nutrition information for a {item.size} {item.flavor} {item.type}: </p>
            <ul>
                <li>Calories: {item.calories}</li>
                <li>Total Fat: {item.totalFat}g</li>
                <li>Saturated Fat: {item.saturatedFat}g</li>
                <li>Trans Fat: {item.transFat}g</li>
                <li>Cholesterol: {item.cholesterol}mg</li>
                <li>Sodium: {item.sodium}mg</li>
                <li>Total Carbohydrates: {item.totalCarbohydrates}g</li>
                <li>Sugars: {item.sugars}g</li>
                <li>Added Sugars: {item.addedSugars}g</li>
                <li>Protein: {item.protein}g</li>
            </ul>
        </div>
    );
}

export default DisplayNutrition