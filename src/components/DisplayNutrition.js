import WaterIceData from '../data/CompleteWaterIceData.json';
import GelatiData from '../data/CompleteGelatiData.json';


function DisplayNutrition({ itemType, flavor, custardFlavor, size }) {
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
      
     
    // 🍧 WATER ICE DISPLAY
  
    if (itemType === 'water-ice') {
        const item = WaterIceData.find((entry) =>
        normalize(entry.type) === normalize(itemType) &&
        normalize(entry.flavor) === normalize(flavor) &&
        normalize(entry.size) === normalize(size)
        );

        if (!item) {
        console.log('No water ice match for:', { itemType, flavor, size });
        return null;
        }

        return (
        <div>
            <p>Here's the nutrition information for a {item.size} {item.flavor} {item.type}:</p>
            <ul>
            <li>Calories: {item.calories}</li>
            <li>Calories from Fat: {item.calories_from_fat}</li>
            <li>Total Fat: {item.fat}g</li>
            <li>Saturated Fat: {item.saturated_fat}g</li>
            <li>Trans Fat: {item.trans_fat}g</li>
            <li>Cholesterol: {item.cholesterol}mg</li>
            <li>Sodium: {item.sodium}mg</li>
            <li>Total Carbohydrates: {item.total_carbohydrates}g</li>
            <li>Dietary Fiber: {item.dietary_fiber}g</li>
            <li>Total Sugars: {item.total_sugar}g</li>
            <li>Added Sugars: {item.added_sugar}g</li>
            <li>Protein: {item.protein}g</li>
            <li>Vitamin D: {item.vitamin_d}mcg</li>
            <li>Vitamin D %DV: {item.vitamin_d_pdv}%</li>
            <li>Calcium: {item.calcium}mg</li>
            <li>Calcium %DV: {item.calcium_pdv}%</li>
            <li>Iron: {item.iron}mg</li>
            <li>Iron %DV: {item.iron_pdv}%</li>
            <li>Potassium: {item.potassium}mg</li>
            <li>Potassium %DV: {item.potassium_pdv}%</li>
            </ul>
        </div>
        );
    }

 
    // 🍦 GELATI DISPLAY
  
    if (itemType === 'gelati') {
        const iceEntry = GelatiData.find((entry) =>
        entry.component_type.toLowerCase() === 'ice' &&
        normalize(entry.flavor) === normalize(flavor) &&
        normalize(entry.size) === normalize(size)
        );

        const custardEntry = GelatiData.find((entry) =>
        entry.component_type.toLowerCase() === 'custard' &&
        normalize(entry.flavor) === normalize(custardFlavor) &&
        normalize(entry.size) === normalize(size)
        );

        if (!iceEntry || !custardEntry) {
        console.log('No gelati match:', { flavor, custardFlavor, size });
        return <p>We couldn't find nutrition data for that Gelati combo.</p>;
        }

        // Combine values
        const fieldsToSum = [
        'calories', 'calories_from_fat', 'fat', 'saturated_fat', 'trans_fat',
        'cholesterol', 'sodium', 'total_carbohydrates', 'dietary_fiber',
        'total_sugar', 'added_sugar', 'protein', 'vitamin_d', 'vitamin_d_pdv',
        'calcium', 'calcium_pdv', 'iron', 'iron_pdv', 'potassium', 'potassium_pdv'
        ];

        const combined = {};
        fieldsToSum.forEach(field => {
        combined[field] = (iceEntry[field] || 0) + (custardEntry[field] || 0);
        });

        return (
        <div>
            <p>Nutrition info for a {size} Gelati with {flavor} ice and {custardFlavor} custard:</p>
            <ul>
            <li>Calories: {combined.calories}</li>
            <li>Calories from Fat: {combined.calories_from_fat}</li>
            <li>Total Fat: {combined.fat}g</li>
            <li>Saturated Fat: {combined.saturated_fat}g</li>
            <li>Trans Fat: {combined.trans_fat}g</li>
            <li>Cholesterol: {combined.cholesterol}mg</li>
            <li>Sodium: {combined.sodium}mg</li>
            <li>Total Carbohydrates: {combined.total_carbohydrates}g</li>
            <li>Dietary Fiber: {combined.dietary_fiber}g</li>
            <li>Total Sugars: {combined.total_sugar}g</li>
            <li>Added Sugars: {combined.added_sugar}g</li>
            <li>Protein: {combined.protein}g</li>
            <li>Vitamin D: {combined.vitamin_d}mcg</li>
            <li>Vitamin D %DV: {combined.vitamin_d_pdv}%</li>
            <li>Calcium: {combined.calcium}mg</li>
            <li>Calcium %DV: {combined.calcium_pdv}%</li>
            <li>Iron: {combined.iron}mg</li>
            <li>Iron %DV: {combined.iron_pdv}%</li>
            <li>Potassium: {combined.potassium}mg</li>
            <li>Potassium %DV: {combined.potassium_pdv}%</li>
            </ul>
        </div>
        );
    }

  return null;
}

export default DisplayNutrition