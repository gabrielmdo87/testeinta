import InstagramHeader from "@/components/InstagramHeader";
import Stories from "@/components/Stories";
import Post from "@/components/Post";
import VIPBanner from "@/components/VIPBanner";
import BottomNav from "@/components/BottomNav";
import ToolBar from "@/components/ToolBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-md mx-auto relative pb-32">
      <InstagramHeader />
      <Stories />
      <Post />
      <VIPBanner />
      <ToolBar />
      <BottomNav />
    </div>
  );
};

export default Index;
