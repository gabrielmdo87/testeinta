import { Camera } from "lucide-react";
import avatarStory1 from "@/assets/avatar-story1.jpg";
import avatarStory2 from "@/assets/avatar-story2.jpg";
import avatarStory4 from "@/assets/avatar-story4.jpg";
import avatarUser2 from "@/assets/avatar-user2.jpg";

interface MessageItemProps {
  avatar: string;
  username: string;
  message: string;
  time: string;
  unread?: boolean;
}

const MessageItem = ({ avatar, username, message, time, unread = false }: MessageItemProps) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <img
          src={avatar}
          alt={username}
          className="w-14 h-14 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-foreground">{username}</h3>
          <p className="text-sm text-muted-foreground truncate">
            {message} <span className="text-muted-foreground">• {time}</span>
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-2">
        {unread && <span className="w-2 h-2 bg-blue-500 rounded-full" />}
        <Camera className="w-6 h-6 text-muted-foreground" strokeWidth={1.5} />
      </div>
    </div>
  );
};

const messages = [
  {
    id: 1,
    avatar: avatarStory1,
    username: "Fer*****",
    message: "Oi delícia, adivinha o que vc ...",
    time: "Agora",
    unread: true,
  },
  {
    id: 2,
    avatar: avatarStory2,
    username: "HOP*****",
    message: "Encaminhou um reel de jon...",
    time: "33 min",
    unread: true,
  },
  {
    id: 3,
    avatar: avatarStory4,
    username: "Ana*****",
    message: "Blz depois a gente se fala",
    time: "2 h",
    unread: false,
  },
  {
    id: 4,
    avatar: avatarUser2,
    username: "And*****",
    message: "Reagiu com 👍 à sua mensagem",
    time: "6 h",
    unread: false,
  },
];

const MessageList = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between px-4 py-3">
        <h2 className="text-lg font-bold text-foreground">Mensagens</h2>
        <button className="text-blue-500 text-sm font-semibold">
          Pedidos (4)
        </button>
      </div>
      <div>
        {messages.map((msg) => (
          <MessageItem
            key={msg.id}
            avatar={msg.avatar}
            username={msg.username}
            message={msg.message}
            time={msg.time}
            unread={msg.unread}
          />
        ))}
      </div>
    </div>
  );
};

export default MessageList;
