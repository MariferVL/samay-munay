import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase'; // Import the Firebase instance

const AnonymousMessages = () => {
  // State to hold the list of messages
  const [messages, setMessages] = useState([]);
  // State to hold the selected message
  const [selectedMessage, setSelectedMessage] = useState(null);

  useEffect(() => {
    // Reference to the 'messages' node in the database
    const messagesRef = ref(db, 'messages');
    // Listener for changes in the 'messages' node
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        // Convert the data object to an array and update the state
        setMessages(Object.values(data));
      } else {
        // If no data, set messages to an empty array
        setMessages([]);
      }
    });
  }, []);

  // Function to handle clicking on a message
  const handleMessageClick = (message) => {
    setSelectedMessage(message);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Anonymous Messages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`bg-white rounded-lg shadow-md p-4 cursor-pointer ${
              selectedMessage && selectedMessage.id === message.id
                ? 'opacity-50'
                : ''
            }`}
            onClick={() => handleMessageClick(message)}
          >
            <div className="bg-gray-200 rounded-lg p-2">
              <p className="text-sm font-medium text-gray-600">
                {new Date(message.date).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-lg font-medium text-gray-800">
                Anonymous Message
              </p>
            </div>
          </div>
        ))}
      </div>
      {selectedMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg">
            <h3 className="text-2xl font-bold mb-4">
              Anonymous Message
            </h3>
            <p className="text-lg text-gray-700">
              {selectedMessage.text}
            </p>
            <div className="mt-4">
              {/* Here you can add a form to respond to the message */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnonymousMessages;
