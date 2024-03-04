// AdminPage.js
import React, { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  getFirestore,
  deleteDoc,
  query,
  getDocs,
  doc as firestoreDoc,
} from 'firebase/firestore';
import './App.css';
import firebaseApp from './firebase';

const database = getFirestore(firebaseApp);

const AdminPage = () => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events when the component mounts
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const eventsCollectionRef = collection(database, 'Event');
      const eventsQuery = query(eventsCollectionRef);
      const eventsSnapshot = await getDocs(eventsQuery);

      const eventsList = eventsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setEvents(eventsList);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleAddEvent = async () => {
    try {
      //const eventDateTime = new Date(`${eventDate}T${eventTime}`);
      const eventsCollectionRef = collection(database, 'Event');
      await addDoc(eventsCollectionRef, { Name: eventName, Date: eventDate, Time: eventTime });
      // Reset form fields after adding the event
      setEventName('');
      setEventDate('');
      setEventTime('');
      // Refresh the events list
      fetchEvents();
    } catch (error) {
      console.error('Error adding event:', error);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const eventDocRef = firestoreDoc(database, 'Event', eventId);
      await deleteDoc(eventDocRef);
      // Refresh the events list
      fetchEvents();
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  return (
    <div className='App-header'>
      <h1>Admin Page</h1>
      <form>
        <label htmlFor="eventName">Event Name:</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <br></br>
        <label htmlFor="eventDate">Event Date:</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <label htmlFor="eventTime">Event Time:</label>
        <input
          type="time"
          id="eventTime"
          value={eventTime}
          onChange={(e) => setEventTime(e.target.value)}
        />
        <br></br>
        <button type="button" onClick={handleAddEvent}>
          Add Event
        </button>
      </form>

      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            {`Name: ${event.Name}, Date: ${event.Date}, Time: ${event.Time}`}
            <button onClick={() => handleDeleteEvent(event.id)}>
              Delete Event
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPage;
