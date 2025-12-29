import { Play } from "lucide-react";

interface ChatMessageProps {
  type: "text" | "reel" | "audio" | "image";
  content: string;
  sent: boolean;
  reaction?: string;
  reelData?: {
    username: string;
    avatar: string;
    caption: string;
    thumbnail: string;
  };
  audioData?: {
    duration: string;
    locked?: boolean;
  };
}

const ChatMessage = ({ type, content, sent, reaction, reelData, audioData }: ChatMessageProps) => {
  const baseClasses = "max-w-[75%] rounded-2xl relative";
  const sentClasses = "message-sent ml-auto";
  const receivedClasses = "message-received mr-auto";

  if (type === "reel" && reelData) {
    return (
      <div className={`${baseClasses} ${sent ? "ml-auto" : "mr-auto"} overflow-hidden bg-card border border-border/30 max-w-[65%]`}>
        <div className="flex items-center gap-2 p-2 bg-secondary/50">
          <img src={reelData.avatar} alt={reelData.username} className="w-6 h-6 rounded-full" />
          <span className="text-sm font-medium text-foreground">{reelData.username}</span>
        </div>
        <div className="relative">
          <img src={reelData.thumbnail} alt="Reel" className="w-full aspect-[3/4] object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-foreground/30 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play className="w-6 h-6 text-foreground fill-foreground ml-1" />
            </div>
          </div>
          <div className="absolute bottom-2 left-2">
            <Play className="w-5 h-5 text-foreground fill-foreground" />
          </div>
        </div>
        {reelData.caption && (
          <div className="p-2">
            <p className="text-xs text-foreground">{reelData.caption}</p>
          </div>
        )}
        {reaction && (
          <div className={`absolute -bottom-3 ${sent ? "left-2" : "right-2"}`}>
            <span className="text-xl">{reaction}</span>
          </div>
        )}
      </div>
    );
  }

  if (type === "audio" && audioData) {
    return (
      <div className={`${baseClasses} ${receivedClasses} p-3`}>
        <div className="flex items-center gap-3">
          <Play className="w-5 h-5 text-accent" />
          <div className="flex-1 flex items-center gap-0.5">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="w-1 bg-muted-foreground rounded-full"
                style={{ height: `${Math.random() * 16 + 8}px` }}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{audioData.duration}</span>
        </div>
        {audioData.locked && (
          <p className="text-xs text-muted-foreground mt-2">
            Não foi possível transcrever a mensagem. Requer acesso VIP
          </p>
        )}
        {reaction && (
          <div className="absolute -bottom-3 right-2">
            <span className="text-xl">{reaction}</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${baseClasses} ${sent ? sentClasses : receivedClasses} px-4 py-2.5`}>
      <p className="text-[15px] text-foreground leading-relaxed">{content}</p>
      {reaction && (
        <div className={`absolute -bottom-3 ${sent ? "left-2" : "right-2"}`}>
          <span className="text-xl">{reaction}</span>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
