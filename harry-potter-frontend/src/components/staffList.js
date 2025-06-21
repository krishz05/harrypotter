// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';

// // function StaffList() {
// //   const [staff, setStaff] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5000/api/staff')
// //       .then(res => setStaff(res.data))
// //       .catch(err => console.log(err));
// //   }, []);

// //   return (
// //     <div>
// //       <h2>Hogwarts Staff</h2>
// //       <ul>
// //         {staff.map((person, index) => (
// //           <li key={index}>{person.name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // }

// // export default StaffList;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function StaffList() {
//   const [staff, setStaff] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:5000/api/staff')
//       .then(res => setStaff(res.data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="card-grid">
//       {staff.map((person, index) => (
//         <div key={index} className="card">
//           <h3>{person.name}</h3>
//           <p>House: {person.house || 'None'}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StaffList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function StaffList() {
  const [staff, setStaff] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/staff')
      .then(res => setStaff(res.data))
      .catch(err => console.error(err));
  }, []);

  const filtered = staff.filter(char =>
    char.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search staff members"
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ padding: '8px', fontSize: '1rem', marginBottom: '20px', width: '100%' }}
      />

      <div className="card-grid">
        {filtered.length > 0 ? (
          filtered.map((person, index) => (
            <div key={index} className="card">
              <img
                src={person.image || 'https://via.placeholder.com/150x200?text=No+Image'}
                alt={person.name}
                style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3>{person.name}</h3>
              <p>{person.house || 'No House'}</p>
            </div>
          ))
        ) : (
          <p>No staff found</p>
        )}
      </div>
    </div>
  );
}

export default StaffList;
