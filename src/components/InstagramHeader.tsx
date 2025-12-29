import { Heart, Send } from "lucide-react";

interface InstagramHeaderProps {
  onDirectClick?: () => void;
}

const InstagramHeader = ({ onDirectClick }: InstagramHeaderProps) => {
  return (
    <header className="flex items-center justify-between px-4 py-2.5">
      <h1 className="font-logo text-[28px] text-foreground">Instagram</h1>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Heart className="w-7 h-7 text-foreground" strokeWidth={1.5} />
          <span className="absolute -top-0.5 right-0 w-2 h-2 bg-notification rounded-full" />
        </div>
        <button className="relative" onClick={onDirectClick}>
          <Send className="w-7 h-7 text-foreground -rotate-12" strokeWidth={1.5} />
          <span className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] bg-notification rounded-full text-[11px] font-bold flex items-center justify-center text-foreground px-1">
            3
          </span>
        </button>
      </div>
    </header>
  );
};

export default InstagramHeader;
