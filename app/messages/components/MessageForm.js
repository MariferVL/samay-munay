import { useState } from 'react';
import { ref, push } from 'firebase/database';
import { db } from '../firebase'; // Import the Firebase instance

const MessageForm = () => {
  // State to hold the message input
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reference to the 'messages' node in the database
    const messagesRef = ref(db, 'messages');
    // Push the new message to the database
    await push(messagesRef, {
      text: message,
      date: Date.now(),
    });
    // Reset the message input
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
        Anonymous Message:
      </label>
      <textarea
        id="message"
        rows="4"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        type="submit"
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  );
};

export default MessageForm;
