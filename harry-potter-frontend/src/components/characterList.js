// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function CharacterList() {
// //   const [characters, setCharacters] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/characters')
// //       .then(res => setCharacters(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>All Characters</h2>
// //       <ul>
// //         {characters.map((char, index) => (
// //           <li key={index}>{char.name} ({char.house})</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default CharacterList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function CharacterList() {
//   const [characters, setCharacters] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/characters')
//       .then(res => setCharacters(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="card-grid">
//       {characters.slice(0, 12).map((char, index) => (
//         <div key={index} className="card">
//           <h3>{char.name}</h3>
//           <p>House: {char.house || 'Unknown'}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CharacterList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './characterList.css'; // optional if you want to separate CSS

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('All');

  // Fetch all characters on mount
  useEffect(() => {
    axios.get('http://localhost:5000/api/characters')
      .then(res => {
        setCharacters(res.data);
        setFilteredCharacters(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Filter on search or house selection
  useEffect(() => {
    let filtered = characters;

    if (selectedHouse !== 'All') {
      filtered = filtered.filter(char => char.house === selectedHouse);
    }

    if (searchTerm.trim() !== '') {
      filtered = filtered.filter(char =>
        char.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCharacters(filtered);
  }, [searchTerm, selectedHouse, characters]);

  const houseOptions = ['All', 'Gryffindor', 'Hufflepuff', 'Ravenclaw', 'Slytherin'];

  return (
    <div>
      {/* Filter & Search Controls */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '20px' }}>
        <select
          value={selectedHouse}
          onChange={(e) => setSelectedHouse(e.target.value)}
          style={{ padding: '8px', fontSize: '1rem' }}
        >
          {houseOptions.map(house => (
            <option key={house} value={house}>{house}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', flexGrow: 1, fontSize: '1rem' }}
        />
      </div>

      {/* Cards */}
      <div className="card-grid">
        {filteredCharacters.length > 0 ? (
          filteredCharacters.slice(0, 20).map((char, index) => (
            <div key={index} className="card">
              <img
                src={char.image || 'https://via.placeholder.com/150x200?text=No+Image'}
                alt={char.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3>{char.name}</h3>
              <p>{char.house || 'No House'}</p>
            </div>
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </div>
  );
}

export default CharacterList;
