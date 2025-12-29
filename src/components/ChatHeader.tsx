import { ChevronLeft, Phone, Video } from "lucide-react";

interface ChatHeaderProps {
  avatar: string;
  username: string;
  status: string;
  onBack: () => void;
}

const ChatHeader = ({ avatar, username, status, onBack }: ChatHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-border/20">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="text-foreground">
          <ChevronLeft className="w-7 h-7" strokeWidth={2} />
        </button>
        <img
          src={avatar}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <h1 className="text-base font-semibold text-foreground">{username}</h1>
          <p className="text-xs text-muted-foreground">{status}</p>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <button className="text-foreground">
          <Phone className="w-6 h-6" strokeWidth={1.5} />
        </button>
        <button className="text-foreground">
          <Video className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;
