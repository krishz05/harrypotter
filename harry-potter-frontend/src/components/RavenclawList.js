// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function RavenclawList() {
// //   const [ravenclaws, setRavenclaws] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/house/ravenclaw')
// //       .then(res => setRavenclaws(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Ravenclaw Characters</h2>
// //       <ul>
// //         {ravenclaws.map((char, index) => (
// //           <li key={index}>{char.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default RavenclawList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function RavenclawList() {
//   const [ravenclaws, setRavenclaws] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/house/ravenclaw')
//       .then(res => setRavenclaws(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="card-grid">
//       {ravenclaws.map((char, index) => (
//         <div key={index} className="card">
//           <h3>{char.name}</h3>
//           <p>Role: {char.actor}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RavenclawList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RavenclawList() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/house/ravenclaw')
      .then(res => {
        const unique = dedupe(res.data);
        setCharacters(unique);
      })
      .catch(err => console.error(err));
  }, []);

  // Remove duplicates by 'name'
  const dedupe = (list) => {
    const seen = new Set();
    return list.filter(item => {
      if (seen.has(item.name)) return false;
      seen.add(item.name);
      return true;
    }).sort((a, b) => a.name.localeCompare(b.name)); // alphabetical sort
  };

  // Filter by search text
  const filtered = characters.filter(char =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Ravenclaw characters"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '8px', fontSize: '1rem', marginBottom: '20px', width: '100%' }}
      />

      <div className="card-grid">
        {filtered.length > 0 ? (
          filtered.map((char, index) => (
            <div key={index} className="card">
              <img
                src={char.image || 'https://via.placeholder.com/150x200?text=No+Image'}
                alt={char.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3>{char.name}</h3>
              <p>{char.house}</p>
            </div>
          ))
        ) : (
          <p>No Ravenclaw characters found</p>
        )}
      </div>
    </div>
  );
}

export default RavenclawList;
