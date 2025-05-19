import React, { useState, useEffect } from 'react';
import FiveLayerGelatiData from '../data/Complete5LayerGelatiData.json';

function FiveLayerGelatiForm({ setSize, setFlavor, custardFlavor, setCustardFlavor }) {
  const [ice1, setIce1] = useState('');
  const [ice2, setIce2] = useState('');

  const iceOptions = [...new Set(FiveLayerGelatiData.filter(item => item.component_type === 'Ice').map(item => item.flavor))];
  const custardOptions = [...new Set(FiveLayerGelatiData.filter(item => item.component_type === 'Custard').map(item => item.flavor))];

  useEffect(() => {
  setSize('Large');
  }, [setSize]);


  useEffect(() => {
    if (ice1 && ice2) {
      setFlavor(`${ice1}&${ice2}`);
    }
  }, [ice1, ice2, setFlavor]);

  return (
    <div>
      <label>Choose First Ice Flavor:</label>
      <select value={ice1} onChange={e => setIce1(e.target.value)} required>
        <option value="">--Select--</option>
        {iceOptions.map(flavor => (
          <option key={flavor} value={flavor}>{flavor}</option>
        ))}
      </select> <br />

      <label>Choose Second Ice Flavor:</label>
      <select value={ice2} onChange={e => setIce2(e.target.value)} required>
        <option value="">--Select--</option>
        {iceOptions.map(flavor => (
          <option key={flavor} value={flavor}>{flavor}</option>
        ))}
      </select> <br />

      <label>Choose Custard Flavor:</label>
      <select value={custardFlavor} onChange={e => setCustardFlavor(e.target.value)} required>
        <option value="">--Select--</option>
        {custardOptions.map(flavor => (
          <option key={flavor} value={flavor}>{flavor}</option>
        ))}
      </select> <br />
    </div>
  );
}

export default FiveLayerGelatiForm;
