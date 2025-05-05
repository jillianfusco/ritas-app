import React from 'react';
import WaterIceForm from './WaterIceForm';


function Form ({ 
    itemType, setItemType, 
    flavor, setFlavor, 
    size, setSize, 
    summary, setSummary, 
  }) {
    function handleSubmit(e) {
        e.preventDefault();

        console.log("Item: ", itemType);
        console.log("Flavor: ", flavor);
        console.log("Size: ", size);

    }
    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Rita's Nutritional Information- note for netlify</h1>

            <label htmlFor="item">Choose an item: </label>
            <select 
            name="item" 
            id="item"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            >
                <option value="">--Select--</option>
                <option value="water-ice">Water Ice</option>
                <option value="soft-serve">Soft Serve</option>
                <option value="gelati">Gelati</option>
                <option value="blendini">Blendini</option>
                <option value="concrete">Concrete</option>
                <option value="ice-blender">Ice Blender</option>
                <option value="gelati-blender">Gelati Blender</option>
                <option value="frozen-coffee">Frozen Coffee</option>
                <option value="frozen-lemonade">Frozen Lemonade</option>
                <option value="cookie-sandwich">Cookie Sandwich</option>
                <option value="pup-cup">Pup Cup</option>                
            </select>

            {itemType === 'water-ice' && (
                <WaterIceForm 
                    flavor={flavor} 
                    setFlavor={setFlavor}
                    size={size}
                    setSize={setSize}
                />
            )}
            
            <br/>
            <button type="submit">Show Nutrition Info</button>
        </form>

        

    );
    
}

export default Form