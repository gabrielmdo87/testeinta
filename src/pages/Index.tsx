import { useState } from "react";
import InstagramHeader from "@/components/InstagramHeader";
import Stories from "@/components/Stories";
import Feed from "@/components/Feed";
import VIPBanner from "@/components/VIPBanner";
import BottomNav from "@/components/BottomNav";
import DirectMessages from "@/components/DirectMessages";

const Index = () => {
  const [showDirect, setShowDirect] = useState(false);

  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative">
      {!showDirect ? (
        <div className="pb-48">
          <InstagramHeader onDirectClick={() => setShowDirect(true)} />
          <Stories />
          <Feed />
        </div>
      ) : (
        <div className="pb-48">
          <DirectMessages onBack={() => setShowDirect(false)} />
        </div>
      )}
      
      {/* VIP Banner - always visible */}
      <div className="fixed bottom-12 left-0 right-0 z-40 max-w-md mx-auto">
        <VIPBanner />
      </div>
      
      <BottomNav />
    </div>
  );
};

export default Index;
