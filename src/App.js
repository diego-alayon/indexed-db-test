import React from 'react';

function App(props) {

  const readGoogleSheet = () => {
    fetch('https://sheetdb.io/api/v1/gs78hk99h4mox')
    .then((response) => response.json())
    .then((data) => console.log(data));
  }

  return (
    <div>
      <button onClick={() =>readGoogleSheet()}>Updated</button>
      <table>
        <thead>Table name</thead>
      </table>
    </div>
  );
}

export default App;