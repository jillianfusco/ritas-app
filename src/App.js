import './App.css';
import React, { useState } from 'react';
import Form from './components/Form.js';
import DisplayNutrition from './components/DisplayNutrition.js';

function App() {
  const [itemType, setItemType] = useState('');
  const [flavor, setFlavor] = useState('');
  const [size, setSize] = useState('');
  const [summary, setSummary] = useState('');
  const [nutrition, setNutrition] = useState(null);

  return (
    <div >
       <Form 
        itemType={itemType}
        setItemType={setItemType}
        flavor={flavor}
        setFlavor={setFlavor}
        size={size}
        setSize={setSize}
        summary={summary}
        setSummary={setSummary}
        setNutrition={setNutrition}
      />

      <DisplayNutrition 
      itemType={itemType}
      setItemType={setItemType}
      flavor={flavor}
      setFlavor={setFlavor}
      size={size}
      setSize={setSize}
      summary={summary}
      setSummary={setSummary}
      setNutrition={setNutrition}
      />

    </div>
  );
}

export default App;
