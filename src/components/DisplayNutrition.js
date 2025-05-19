import WaterIceData from '../data/CompleteWaterIceData.json';
import GelatiData from '../data/CompleteGelatiData.json';
import FiveLayerGelatiData from '../data/Complete5LayerGelatiData.json';


function DisplayNutrition({  itemType, flavor, custardFlavor, size }) {
    if (!itemType || !flavor || !size ) return null;

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
      
    let nutritionData = null;
    let description = '';
     
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

    nutritionData = item;
    description = `Here's the nutrition information for a ${item.size} ${item.flavor} ${item.type}:`;
    }

 
    // 🍦 GELATI DISPLAY  
     if (itemType === 'gelati') {
        const iceEntry = GelatiData.find(
        (entry) =>
            entry.component_type.toLowerCase() === 'ice' &&
            normalize(entry.flavor) === normalize(flavor) &&
            normalize(entry.size) === normalize(size)
        );

        const custardEntry = GelatiData.find(
        (entry) =>
            entry.component_type.toLowerCase() === 'custard' &&
            normalize(entry.flavor) === normalize(custardFlavor) &&
            normalize(entry.size) === normalize(size)
        );

        if (!iceEntry || !custardEntry) {
        console.log('No gelati match:', { flavor, custardFlavor, size });
        return <p>We couldn't find nutrition data for that Gelati combo.</p>;
        }

        nutritionData = {};
        const fieldsToSum = Object.keys(iceEntry).filter((key) => typeof iceEntry[key] === 'number');
        fieldsToSum.forEach((field) => {
        nutritionData[field] = (iceEntry[field] || 0) + (custardEntry[field] || 0);
        });

        description = `Nutrition info for a ${size} Gelati with ${flavor} ice and ${custardFlavor} custard:`;
    }

    // 🍦 5 LAYER GELATI DISPLAY
    if (itemType === '5-layer gelati') {
        const [ice1, ice2] = flavor.split('&').map(f => normalize(f));

        const iceEntry1 = FiveLayerGelatiData.find(
        (entry) =>
            entry.component_type.toLowerCase() === 'ice' &&
            normalize(entry.flavor) === ice1 &&
            normalize(entry.size) === normalize(size)
        );

        const iceEntry2 = FiveLayerGelatiData.find(
        (entry) =>
            entry.component_type.toLowerCase() === 'ice' &&
            normalize(entry.flavor) === ice2 &&
            normalize(entry.size) === normalize(size)
        );

        const custardEntry = FiveLayerGelatiData.find(
        (entry) =>
            entry.component_type.toLowerCase() === 'custard' &&
            normalize(entry.flavor) === normalize(custardFlavor) &&
            normalize(entry.size) === normalize(size)
        );

        if (!iceEntry1 || !iceEntry2 || !custardEntry) {
        console.log('No 5-layer match:', { ice1, ice2, custardFlavor, size });
        return <p>We couldn't find nutrition data for that 5-Layer Gelati combo.</p>;
        }

        nutritionData = {};
        const fieldsToSum = Object.keys(custardEntry).filter((key) => typeof custardEntry[key] === 'number');
        fieldsToSum.forEach((field) => {
        nutritionData[field] = (custardEntry[field] || 0) + (iceEntry1[field] || 0) + (iceEntry2[field] || 0);
        });

        description = `Nutrition info for a ${size} 5-Layer Gelati with ${ice1}, ${ice2}, and ${custardFlavor} custard:`;
    }

   if (!nutritionData) return null;

  return (
    <div>
      <p>{description}</p>
      <ul>
        {Object.entries(nutritionData).map(([key, value]) => (
          <li key={key}>{key.replace(/_/g, ' ')}: {value}</li>
        ))}
      </ul>
    </div>
  );
}


export default DisplayNutrition;