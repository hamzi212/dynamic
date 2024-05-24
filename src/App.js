
import React, { useState } from 'react';
import Input from './component/Input';
import Button from './component/Button';
import Table from './component/Tb';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddData = () => {
    if (inputValue.trim() !== '') {
      const newAge = Math.floor(Math.random() * 50) + 20;
      const newData = [...data, { id: data.length + 1, name: inputValue, age: newAge }];
      setData(newData);
      setInputValue('');
    }
  };

  const columns = [
    { header: 'ID', key: 'id' },
    { header: 'Name', key: 'name' },
    { header: 'Age', key: 'age' },
  ];

  return (
    <div>
      <h1>Dynamic Components </h1>
      <Input
        type="text"
        placeholder="Enter Name"
        value={inputValue}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddData}>Add Data</Button>
      <Table columns={columns} data={data} />
    </div>
  );
};

export default App;