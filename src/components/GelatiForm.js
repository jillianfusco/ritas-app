import React from 'react';
import GelatiData from '../data/CompleteGelatiData.json';

function GelatiForm({ flavor, setFlavor, custardFlavor, setCustardFlavor, size, setSize }) {
    
    const kebabCase = (str) =>
      (str || '').toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  
    const custardItems = GelatiData.filter(item => item.component_type.toLowerCase() === 'custard');
    const iceItems = GelatiData.filter(item => item.component_type.toLowerCase() === 'ice');
  
    const uniqueCustardFlavors = [...new Set(custardItems.map(item => item.flavor))].sort();
    const uniqueIceFlavors = [...new Set(iceItems.map(item => item.flavor))].sort();
  
    const sizeOrder = ['Kids', 'Small', 'Large', 'Quart'];
    const uniqueSizes = [...new Set(GelatiData.map(item => item.size))].sort(
      (a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b)
    );

  return (
    <div>
      <label htmlFor='flavor'>Choose a Water Ice Flavor: </label>
      <select 
        id='flavor'
        value={flavor}
        onChange={(e) => setFlavor(e.target.value)}
      >
        <option value="">--Select a flavor--</option>
        {uniqueIceFlavors.map(flav => (
          <option key={flav} value={flav}>{flav}</option>
        ))}
      </select>

      <br />

      <label htmlFor='custard'>Choose a Custard Flavor: </label>
      <select 
        id='custard'
        value={custardFlavor}
        onChange={(e) => setCustardFlavor(e.target.value)}
      >
        <option value="">--Select a custard--</option>
        {uniqueCustardFlavors.map(cust => (
          <option key={cust} value={cust}>{cust}</option>
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

export default GelatiForm;
