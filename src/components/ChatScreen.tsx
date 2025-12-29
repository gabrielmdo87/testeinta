import ChatHeader from "./ChatHeader";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import avatarStory1 from "@/assets/avatar-story1.jpg";
import avatarStory2 from "@/assets/avatar-story2.jpg";
import reel1 from "@/assets/reel1.jpg";
import reel2 from "@/assets/reel2.jpg";

interface ChatScreenProps {
  onBack: () => void;
  chatData: {
    avatar: string;
    username: string;
    status: string;
    type: "fer" | "hop";
  };
}

const ferMessages = [
  { id: 1, type: "text" as const, content: "Tô em Criciúma já, só pra avisar", sent: false },
  { id: 2, type: "text" as const, content: "❤️", sent: false, isSmall: true },
  { id: 3, type: "text" as const, content: "❤️❤️", sent: false },
  { id: 4, type: "text" as const, content: "Tá aonde", sent: true },
  { id: 5, type: "text" as const, content: "Na sua prima?", sent: true },
  { id: 6, type: "text" as const, content: "Não", sent: false, isReply: true, replyTo: "Na sua prima?" },
  { id: 7, type: "text" as const, content: "Casa de ******", sent: false },
  { id: 8, type: "text" as const, content: "Tá bom 😘", sent: true },
  { id: 9, type: "text" as const, content: "Vou ******* e depois passo aí blz??", sent: true },
  { id: 10, type: "text" as const, content: "❤️", sent: true, isSmall: true },
];

const hopMessages = [
  { 
    id: 1, 
    type: "reel" as const, 
    content: "", 
    sent: false,
    reelData: {
      username: "jonas.milgrau",
      avatar: avatarStory1,
      caption: "João Pedro está no prime.",
      thumbnail: reel1,
    }
  },
  { id: 2, type: "divider" as const, content: "Novas mensagens" },
  { id: 3, type: "timestamp" as const, content: "07:49" },
  { 
    id: 4, 
    type: "reel" as const, 
    content: "", 
    sent: false,
    reelData: {
      username: "tettrem",
      avatar: avatarStory2,
      caption: "",
      thumbnail: reel2,
    },
    reaction: "🤭"
  },
  { id: 5, type: "text" as const, content: "Esse achei triste", sent: true },
  { id: 6, type: "timestamp" as const, content: "ONTEM, 18:45" },
  { 
    id: 7, 
    type: "reel" as const, 
    content: "", 
    sent: true,
    reelData: {
      username: "safadodesejo",
      avatar: avatarStory1,
      caption: "No pêlo e no ritmo 👍",
      thumbnail: reel1,
    },
    reaction: "😂"
  },
  { id: 8, type: "text" as const, content: "kkkkkkkkkkkkk", sent: true },
  { 
    id: 9, 
    type: "audio" as const, 
    content: "", 
    sent: false,
    audioData: {
      duration: "0:23",
      locked: true,
    },
    reaction: "😂"
  },
  { id: 10, type: "timestamp" as const, content: "ONTEM 22:11" },
];

const ChatScreen = ({ onBack, chatData }: ChatScreenProps) => {
  const messages = chatData.type === "fer" ? ferMessages : hopMessages;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ChatHeader
        avatar={chatData.avatar}
        username={chatData.username}
        status={chatData.status}
        onBack={onBack}
      />
      
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 pb-32">
        {messages.map((msg) => {
          if (msg.type === "divider") {
            return (
              <div key={msg.id} className="flex items-center gap-4 my-4">
                <div className="flex-1 h-px bg-border/50" />
                <span className="text-xs text-muted-foreground">{msg.content}</span>
                <div className="flex-1 h-px bg-border/50" />
              </div>
            );
          }
          
          if (msg.type === "timestamp") {
            return (
              <div key={msg.id} className="text-center my-4">
                <span className="text-xs text-muted-foreground">{msg.content}</span>
              </div>
            );
          }

          return (
            <div key={msg.id} className={msg.reaction ? "mb-5" : ""}>
              {(msg as any).isReply && (
                <div className="text-xs text-muted-foreground mb-1 ml-1">
                  respondeu a você
                  <div className="border-l-2 border-accent/50 pl-2 ml-1 mt-1">
                    <span className="text-foreground/70">{(msg as any).replyTo}</span>
                  </div>
                </div>
              )}
              <ChatMessage
                type={msg.type}
                content={msg.content}
                sent={msg.sent}
                reaction={(msg as any).reaction}
                reelData={(msg as any).reelData}
                audioData={(msg as any).audioData}
              />
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto bg-background">
        <ChatInput />
      </div>
    </div>
  );
};

export default ChatScreen;
