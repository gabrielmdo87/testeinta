import DirectHeader from "./DirectHeader";
import SearchBar from "./SearchBar";
import Notes from "./Notes";
import MessageList from "./MessageList";

interface DirectMessagesProps {
  onBack: () => void;
}

const DirectMessages = ({ onBack }: DirectMessagesProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <DirectHeader username="gabrielmedina" onBack={onBack} />
      <SearchBar />
      <Notes />
      <MessageList />
    </div>
  );
};

export default DirectMessages;
