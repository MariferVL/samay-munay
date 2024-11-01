import AnonymousMessages from './components/AnonymousMessages';
import MessageForm from './components/MessageForm';
import Responses from './components/Responses';

// Main component for the Messages page
const MessagesPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Component to display anonymous messages */}
      <AnonymousMessages />
      {/* Component to submit a new anonymous message */}
      <MessageForm />
    </div>
  );
};

export default MessagesPage;
