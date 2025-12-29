import { Home, Search, Plus, Clapperboard } from "lucide-react";
import avatarMain from "@/assets/avatar-main.jpg";

interface BottomNavProps {
  activeTab: "feed" | "direct";
  onTabChange: (tab: "feed" | "direct") => void;
}

const BottomNav = ({ activeTab, onTabChange }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t border-border/30 px-6 py-2.5 z-50">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <button 
          className="text-foreground p-1"
          onClick={() => onTabChange("feed")}
        >
          <Home className={`w-7 h-7 ${activeTab === "feed" ? "fill-current" : ""}`} strokeWidth={activeTab === "feed" ? 2.5 : 1.5} />
        </button>
        <button className="text-foreground p-1">
          <Search className="w-7 h-7" strokeWidth={1.5} />
        </button>
        <button className="text-foreground p-1">
          <Plus className="w-7 h-7" strokeWidth={1.5} />
        </button>
        <button className="text-foreground p-1">
          <Clapperboard className="w-7 h-7" strokeWidth={1.5} />
        </button>
        <button 
          className="p-1"
          onClick={() => onTabChange("direct")}
        >
          <img
            src={avatarMain}
            alt="Profile"
            className={`w-7 h-7 rounded-full object-cover ${activeTab === "direct" ? "ring-2 ring-foreground" : ""}`}
          />
        </button>
      </div>
    </nav>
  );
};

export default BottomNav;
