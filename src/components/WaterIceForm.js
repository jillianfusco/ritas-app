import React from 'react';
import WaterIceData from '../data/CompleteWaterIceData.json';

const kebabCase = (str) =>
    str.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

function WaterIceForm({ flavor, setFlavor, size, setSize }) {

    const uniqueFlavors = [...new Set(WaterIceData.map(item => item.flavor))].sort();
    const sizeOrder = ['Kids', 'Small', 'Large', 'Quart'];
    const uniqueSizes = [...new Set(WaterIceData.map(item => item.size))].sort(
    (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
    );


    return(
        <div>
            <label htmlFor='flavor'>Choose a flavor: </label>
            <select 
                id='flavor'
                value={flavor}
                onChange={(e) => setFlavor(e.target.value)}
            >
                <option value="">--Select a flavor--</option>
                {uniqueFlavors.map(flav => (
                <option key={flav} value={kebabCase(flav)}>{flav}</option>
                ))}
            </select>

            <br />

            <label htmlFor="size">Choose a size: </label>
            <select 
                id='size'
                value={size}
                onChange={(e) => setSize(e.target.value)}
            >
                <option value="">--Select a size--</option>
                {uniqueSizes.map(s => (
                <option key={s} value={kebabCase(s)}>{s}</option>
                ))}
            </select>
        </div>
    );
}

export default WaterIceForm