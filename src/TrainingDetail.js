import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import firebaseApp from './firebase';
import './training.css';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore';
import { hash, compare } from 'bcryptjs'; 

const database = getFirestore(firebaseApp);


function TrainingDetail() {
  const { id } = useParams();
  const [trainingDetails, setTrainingDetails] = useState(null);
  const [participants, setParticipants] = useState([]);
  const [participantName, setParticipantName] = useState('');
  const [participantPassword, setParticipantPassword] = useState('');
  const [willBeOnTime, setWillBeOnTime] = useState(false);
  const [willBeLate, setWillBeLate] = useState(false);
  const [lateMinutes, setLateMinutes] = useState(0);
  const [removeParticipantName, setRemoveParticipantName] = useState('');
  const [removeParticipantPassword, setRemoveParticipantPassword] = useState('');

  const fetchParticipants = async () => {
    try {
      const attendanceCollectionRef = collection(database, 'Attendance');
      const participantsQuery = query(
        attendanceCollectionRef,
        where('Training', '==', id)
      );
      const participantsSnapshot = await getDocs(participantsQuery);

      const participantsList = participantsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setParticipants(participantsList);
    } catch (error) {
      console.error('Error fetching participants:', error);
    }
  };

  useEffect(() => {
    const fetchTrainingDetails = async () => {
      try {
        const trainingDocRef = doc(database, 'Event', id);
        const trainingDocSnapshot = await getDoc(trainingDocRef);

        if (trainingDocSnapshot.exists()) {
          setTrainingDetails(trainingDocSnapshot.data());
        } else {
          console.log('Training not found');
        }
      } catch (error) {
        console.error('Error fetching training details:', error);
      }
    };

    fetchParticipants();
    fetchTrainingDetails();
  }, [database, id]);

  const handleAddParticipant = async (event) => {
    event.preventDefault();
    if (!participantName || !participantPassword) {
      window.alert('Name and Password are required');
      return;
    }

    // Check if at least one checkbox is checked
    if (!willBeOnTime && !willBeLate) {
      window.alert('Please select at least one option');
      return;
    }
    try {
      const hashedPassword = await hash(participantPassword, 10); // Hash the password
      const attendanceCollectionRef = collection(database, 'Attendance');
      await addDoc(attendanceCollectionRef, {
        Name: participantName,
        Password: hashedPassword,
        OnTime: willBeOnTime,
        Late: willBeLate,
        LateMinutes: willBeLate ? lateMinutes : null,
        Training: id,
      });

      setParticipantName('');
      setParticipantPassword('');
      setWillBeOnTime(false);
      setWillBeLate(false);
      setLateMinutes(0);

      fetchParticipants();
    } catch (error) {
      console.error('Error adding participant:', error);
    }
  };

  const handleRemoveParticipant = async (event) => {
    event.preventDefault();
  
    if (!removeParticipantName || !removeParticipantPassword) {
      window.alert('Name and Password are required');
      return;
    }
  
    try {
      const participantToRemove = participants.find(
        (participant) =>
          participant.Name === removeParticipantName
      );
  
      if (participantToRemove) {
        // Hash the provided password for comparison
        const hashedPassword = await hash(removeParticipantPassword, 10);
        // Compare the hashed password with the stored hashed password
        const isPasswordCorrect = await compare(removeParticipantPassword, participantToRemove.Password);
        
        if (isPasswordCorrect) {
          const participantDocRef = doc(database, 'Attendance', participantToRemove.id);
          await deleteDoc(participantDocRef);
  
          fetchParticipants();
          setRemoveParticipantName('');
          setRemoveParticipantPassword('');
        } else {
          console.error('Incorrect password');
        }
      } else {
        console.error('Participant not found');
      }
    } catch (error) {
      console.error('Error removing participant:', error);
    }
  };
  
  return (
    <div className='App-header'>
      <h1>Training Detail Page</h1>
      {trainingDetails ? (
        <>
          <p>Name: {trainingDetails.Name}</p>
          <p>Date: {trainingDetails.Date}</p>
          <h2>Participants:</h2>
          <ol>
            {participants.map((participant) => (
              <li key={participant.id}>
                {participant.Name}
                {participant.Late && <span>, Late by {participant.LateMinutes} minutes</span>}
              </li>
            ))}
          </ol>
          <h2>Add Me:</h2>
          <p>Use random password, it's just for you if you want to remove yourself</p>
          <form onSubmit={handleAddParticipant}>
            <label htmlFor="participantName">Name: </label>
            <input
              type="text"
              id="participantName"
              value={participantName}
              onChange={(e) => setParticipantName(e.target.value)}
            />
            <br/>

            <label htmlFor="participantPassword">Password: </label>
            <input
              type="password"
              id="participantPassword"
              value={participantPassword}
              onChange={(e) => setParticipantPassword(e.target.value)}
            />
            <br/>

            <input
              type="checkbox"
              id="willBeOnTime"
              checked={willBeOnTime}
              onChange={(e) => setWillBeOnTime(e.target.checked)}
            />
            <label htmlFor="willBeOnTime">I will be on time</label>
            <br/>

            <input
              type="checkbox"
              id="willBeLate"
              checked={willBeLate}
              onChange={(e) => setWillBeLate(e.target.checked)}
            />
            <label htmlFor="willBeLate">I will be late</label>
            {willBeLate && (
              <>
                <br/>
                <label htmlFor="lateMinutes">Minutes Late: </label>
                <input
                  type="number"
                  id="lateMinutes"
                  value={lateMinutes}
                  onChange={(e) => setLateMinutes(parseInt(e.target.value))}
                />
              </>
            )}
            <br/>

            <button type="submit">Add Me!</button>
          </form>

          <h2>Remove Participant:</h2>
          <form onSubmit={handleRemoveParticipant}>
            <label htmlFor="removeParticipantName">Name: </label>
            <input
              type="text"
              id="removeParticipantName"
              value={removeParticipantName}
              onChange={(e) => setRemoveParticipantName(e.target.value)}
            />
            <br/>

            <label htmlFor="removeParticipantPassword">Password: </label>
            <input
              type="password"
              id="removeParticipantPassword"
              value={removeParticipantPassword}
              onChange={(e) => setRemoveParticipantPassword(e.target.value)}
            />
            <br/>

            <button type="submit">Remove Me!</button>
          </form>

          
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TrainingDetail;
