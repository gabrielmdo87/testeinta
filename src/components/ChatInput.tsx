import { Camera, Mic, Image, Smile, Heart } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="px-4 py-3 border-t border-border/20">
      <div className="flex items-center gap-3 bg-secondary rounded-full px-4 py-2.5">
        <button className="text-foreground">
          <Camera className="w-6 h-6 text-blue-500" />
        </button>
        <input
          type="text"
          placeholder="Mensagem..."
          className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm outline-none"
        />
        <button className="text-muted-foreground">
          <Mic className="w-6 h-6" />
        </button>
        <button className="text-muted-foreground">
          <Image className="w-6 h-6" />
        </button>
        <button className="text-muted-foreground">
          <Smile className="w-6 h-6" />
        </button>
        <button className="text-muted-foreground">
          <Heart className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
