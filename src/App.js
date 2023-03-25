import React from 'react';
import Cat from './components/Cat';

function App() {
  return (
    <div>
      <Cat />
    </div>
  );
}

export default App;




// import { useState, useEffect } from 'react';

// const CatPage = () => {
//   const [catData, setCatData] = useState(null);

//   useEffect(() => {
//     const loadData = async () => {
//       const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=live_mtl9hrEB87yKSbY11iXEkgFZtnsMeZtj2VhYQIJkQNOnRwIJkMleFZlmgHLyDF7p');
//       const data = await response.json();
//       setCatData(data[0]);
//     };

//     loadData();
//   }, []);

//   return (
//     <div>
//       {catData && (
//         <div>
//           <img src={catData.url} alt="A cat" />
//           <button onClick={() => setCatData()}>Refresh</button>
//           <div>Race : {catData.breeds[0].name}</div>
//           <div>Origine : {catData.breeds[0].origin}</div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatPage;
