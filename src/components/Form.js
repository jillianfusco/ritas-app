import React from 'react';
import WaterIceForm from './WaterIceForm';
import GelatiForm from './GelatiForm';
import FiveLayerGelatiForm from './FiveLayerGelatiForm';


function Form ({ 
    itemType, setItemType, 
    flavor, setFlavor, 
    custardFlavor, setCustardFlavor,
    size, setSize, 
    summary, setSummary,
    setNutrition 
  }) {
    function handleSubmit(e) {
        e.preventDefault();

        console.log("Item: ", itemType);
        console.log("Flavor: ", flavor);
        console.log("Custard Flavor:", custardFlavor);
        console.log("Size: ", size);

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Rita's Nutritional Information</h1>

            <label htmlFor="item">Choose an item: </label>
            <select 
            name="item" 
            id="item"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            >
                <option value="">--Select--</option>
                <option value="water-ice">Water Ice</option>
                <option value="gelati">Gelati</option>  
                <option value="5-layer gelati">5-Layer Gelati</option>    
            </select>

            {itemType === 'water-ice' && (
                <WaterIceForm 
                    flavor={flavor} 
                    setFlavor={setFlavor}
                    size={size}
                    setSize={setSize}
                />
            )}

            {itemType === 'gelati' && (
                    <GelatiForm 
                    flavor={flavor}
                    setFlavor={setFlavor}
                    custardFlavor={custardFlavor}
                    setCustardFlavor={setCustardFlavor}
                    size={size}
                    setSize={setSize}
                    />
             )}

            {itemType === "5-layer gelati" && (
                <FiveLayerGelatiForm 
                    setSize={setSize}
                    setFlavor={setFlavor}
                    custardFlavor={custardFlavor}
                    setCustardFlavor={setCustardFlavor}
                />
            )}
            
            <br/>
            <button type="submit">Show Nutrition Info</button>
        </form>

        

    );
    
}

export default Form