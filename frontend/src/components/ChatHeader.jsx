import { X } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore";
import { useChatStore } from "../store/useChatStore";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useChatStore();
  const { onlineUsers } = useAuthStore();

  return (
    <div className="px-4 py-3 border-b border-base-300 bg-base-100/95 backdrop-blur-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar with online indicator */}
          <div className="relative">
            <div className="avatar">
              <div className="size-12 rounded-full ring-2 ring-offset-2 ring-primary/20">
                <img 
                  src={selectedUser.profilePic || "/avatar.png"} 
                  alt={selectedUser.fullName}
                  className="object-cover"
                />
              </div>
            </div>
            {onlineUsers.includes(selectedUser._id) && (
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-base-100"></div>
            )}
          </div>

          {/* User info */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              {selectedUser.fullName}
              {onlineUsers.includes(selectedUser._id) && (
                <span className="text-xs font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  Online
                </span>
              )}
            </h2>
            <p className="text-sm text-base-content/60 mt-0.5">
              Last seen {onlineUsers.includes(selectedUser._id) ? "now" : "2h ago"}
            </p>
          </div>
        </div>

        {/* Close button with hover effect */}
        <button 
          onClick={() => setSelectedUser(null)}
          className="btn btn-circle btn-ghost btn-sm hover:bg-base-300/50 transition-colors"
        >
          <X className="w-5 h-5 text-base-content/70" />
        </button>
      </div>
    </div>
  );
};
export default ChatHeader;