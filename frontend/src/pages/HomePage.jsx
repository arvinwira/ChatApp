import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
import { MessageSquare, Settings, Users } from "lucide-react";

const HomePage = () => {
  const { selectedUser } = useChatStore();

  return (
    <div className="h-screen bg-gradient-to-br from-base-200 via-base-100 to-base-200">
      {/* Enhanced Top Navigation */}
      <nav className="fixed top-0 w-full bg-base-100/80 backdrop-blur-lg border-b border-base-300 z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Left Section - Logo and Branding */}
          <div className="flex items-center gap-3 flex-1">
            <MessageSquare className="text-primary w-7 h-7 shrink-0" />
            <h1 className="text-xl font-bold tracking-tight">ChatSphere</h1>
          </div>

          {/* Right Section - Controls */}
          <div className="flex items-center gap-3 flex-1 justify-end">
            <button className="p-2 hover:bg-base-200 rounded-full transition-colors">
              <Settings className="w-6 h-6 text-base-content/80 hover:text-base-content" />
            </button>
            <div className="avatar online ml-2">
              <div className="w-9 h-9 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all">
                <img 
                  src="/user-avatar.png" 
                  alt="User avatar" 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content  */}
      <div className="pt-16 h-full">
        <div className="flex h-full">
          <Sidebar />
          <main className="flex-1 flex flex-col">
            {!selectedUser ? (
              <div className="flex-1 flex flex-col items-center justify-center p-8 bg-gradient-to-br from-base-100 to-base-200">
                <NoChatSelected />
              </div>
            ) : (
              <div className="flex-1 flex flex-col h-full overflow-hidden">
                <ChatContainer />
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default HomePage;