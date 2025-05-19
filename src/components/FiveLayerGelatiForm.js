// FiveLayerGelatiForm.js
import React, { useState } from 'react';
import FiveLayerGelatiData from '../data/Complete5LayerGelatiData.json';

function FiveLayerGelatiForm({ setNutrition, setSummary }) {
  const custardOptions = [...new Set(FiveLayerGelatiData.filter(item => item.component_type === 'Custard').map(item => item.flavor))];
  const iceOptions = [...new Set(FiveLayerGelatiData.filter(item => item.component_type === 'Ice').map(item => item.flavor))];

  const [custard, setCustard] = useState('');
  const [ice1, setIce1] = useState('');
  const [ice2, setIce2] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const custardData = FiveLayerGelatiData.find(item => item.component_type === 'Custard' && item.flavor === custard);
    const iceData1 = FiveLayerGelatiData.find(item => item.component_type === 'Ice' && item.flavor === ice1);
    const iceData2 = FiveLayerGelatiData.find(item => item.component_type === 'Ice' && item.flavor === ice2);

    const totalNutrition = {};
    const fields = Object.keys(custardData).filter(key => typeof custardData[key] === 'number');

    fields.forEach(key => {
      totalNutrition[key] = (custardData[key] || 0) + (iceData1[key] || 0) + (iceData2[key] || 0);
    });

    setNutrition(totalNutrition);
    setSummary(`Nutrition info for a 5-Layer Gelati with ${ice1}, ${ice2}, and ${custard} custard:`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Build Your 5-Layer Gelati</h2>

      <label>Choose a Custard: </label>
      <select value={custard} onChange={e => setCustard(e.target.value)} required>
        <option value="">--Select--</option>
        {custardOptions.map(flavor => (
          <option key={flavor} value={flavor}>{flavor}</option>
        ))}
      </select> <br />

      <label>Choose First Ice Flavor: </label>
      <select value={ice1} onChange={e => setIce1(e.target.value)} required>
        <option value="">--Select--</option>
        {iceOptions.map(flavor => (
          <option key={flavor} value={flavor}>{flavor}</option>
        ))}
      </select> <br />

      <label>Choose Second Ice Flavor: </label>
      <select value={ice2} onChange={e => setIce2(e.target.value)} required>
        <option value="">--Select--</option>
        {iceOptions.map(flavor => (
          <option key={flavor} value={flavor}>{flavor}</option>
        ))}
      </select> <br />

    </form>
  );
}

export default FiveLayerGelatiForm;
