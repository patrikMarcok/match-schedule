import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import firebaseApp from './firebase';
import './training.css';

const database = getFirestore(firebaseApp);

function Trainings() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const db = getFirestore(firebaseApp);
      const dataCollection = collection(db, 'Event');
      const querySnapshot = await getDocs(dataCollection);
      const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setData(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div className='App-header'>
      <h1>List of trainings</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.Date}</td>
              <td>{item.Time}</td>
              <td>{item.Name}</td>
              <td>
                <Link to={`/trainings/${item.id}`}>
                  <button>Details</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Trainings;
