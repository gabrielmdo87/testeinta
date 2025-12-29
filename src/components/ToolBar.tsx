import { ChevronLeft, MessageSquare, RefreshCw, MoreHorizontal } from "lucide-react";

const ToolBar = () => {
  return (
    <div className="fixed bottom-16 left-0 right-0 px-4 py-3">
      <div className="flex items-center justify-center gap-2">
        <button className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="flex items-center gap-2 bg-secondary rounded-full px-4 py-2">
          <MessageSquare className="w-5 h-5 text-foreground" />
          <span className="text-sm font-medium text-foreground">stalkea.ai</span>
          <RefreshCw className="w-4 h-4 text-foreground" />
        </div>
        <button className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
          <MoreHorizontal className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </div>
  );
};

export default ToolBar;
