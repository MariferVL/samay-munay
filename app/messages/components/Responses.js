import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase'; // Import the Firebase instance

const Responses = ({ messageId }) => {
  // State to hold the list of responses
  const [responses, setResponses] = useState([]);

  // useEffect hook to fetch responses from Firebase Realtime Database
  useEffect(() => {
    // Reference to the 'responses' node in the specific message
    const responsesRef = ref(db, `messages/${messageId}/responses`);
    // Listener for changes in the 'responses' node
    onValue(responsesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the data object to an array and update the state
        setResponses(Object.values(data));
      } else {
        // If no data, set responses to an empty array
        setResponses([]);
      }
    });
  }, [messageId]);

  return (
    <div className="mt-4">
      <h4 className="text-xl font-bold mb-2">Responses:</h4>
      <ul>
        {responses.map((response) => (
          <li key={response.id} className="mb-2">
            <p className="text-gray-700">{response.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Responses;
