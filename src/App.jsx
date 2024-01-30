
import React, { useState } from 'react';
import FileInputComponent from './components/FileInputComponent';

function App() {
  const [excelData, setExcelData] = useState(null);

  const handleFileUpload = (data) => {
    setExcelData(data);
  };

  return (
    <div>
      <h1>Upload XLSX File</h1>
      <FileInputComponent onFileUpload={handleFileUpload} />
      {excelData && (
        <div>
          <h2>Excel Data:</h2>
          <pre>{JSON.stringify(excelData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
