import { useState } from "react";
import InstagramHeader from "@/components/InstagramHeader";
import Stories from "@/components/Stories";
import Feed from "@/components/Feed";
import VIPBanner from "@/components/VIPBanner";
import BottomNav from "@/components/BottomNav";
import DirectMessages from "@/components/DirectMessages";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"feed" | "direct">("feed");

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {activeTab === "feed" ? (
        <div className="pb-48">
          <InstagramHeader />
          <Stories />
          <Feed />
        </div>
      ) : (
        <div className="pb-48">
          <DirectMessages onBack={() => setActiveTab("feed")} />
        </div>
      )}
      
      {/* VIP Banner - always visible */}
      <div className="fixed bottom-12 left-0 right-0 z-40 max-w-md mx-auto">
        <VIPBanner />
      </div>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
