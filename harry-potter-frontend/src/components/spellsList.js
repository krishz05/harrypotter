// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function SpellsList() {
//   const [spells, setSpells] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/spells')
//       .then(res => setSpells(res.data))
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div>
//       <h2>Spells</h2>
//       <ul>
//         {spells.map((spell, index) => (
//           <li key={index}>{spell.name} - {spell.description}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SpellsList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function SpellsList() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/spells')
      .then(res => setSpells(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="card-grid">
      {spells.slice(0, 10).map((spell, index) => (
        <div key={index} className="card">
          <h3>{spell.name}</h3>
          <p>{spell.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SpellsList;
