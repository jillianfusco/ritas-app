import WaterIceData from '../data/CompleteWaterIceData.json';


function DisplayNutrition({ itemType, flavor, size }) {
    if (!itemType || !flavor || !size) return null;

    const normalize = (value) => {
        if (!value) return '';
        return value
          .toString()
          .toLowerCase()
          .replace(/['’]/g, '')            // remove apostrophes
          .replace(/\//g, '')              // remove slashes (S/F → SF)
          .replace(/[^a-z0-9]+/g, ' ')     // replace remaining non-alphanumerics with space
          .replace(/\s+/g, ' ')            // collapse multiple spaces
          .trim();
      };
      
      
      const item = WaterIceData.find(
        (entry) =>
          normalize(entry.type) === normalize(itemType) &&
          normalize(entry.flavor) === normalize(flavor) &&
          normalize(entry.size) === normalize(size)
      );
      

      if (!item) {
        console.log('No match for:', {
          itemType: normalize(itemType),
          flavor: normalize(flavor),
          size: normalize(size)
        });
        return <p>No nutrition info found for this selection</p>;
      }

    console.log('Looking for:', normalize(itemType), normalize(flavor), normalize(size));
    console.log('Normalized flavor:', normalize(flavor));

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