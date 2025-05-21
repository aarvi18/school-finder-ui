import { useEffect, useState } from "react";

export const UserAvatar = () => {
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  useEffect(() => {
    setAvatarUrl("https://randomuser.me/api/portraits/men/32.jpg");
  }, []);

  return (
    <img
      src={avatarUrl}
      alt="User Avatar"
      className="w-8 h-8 rounded-full object-cover cursor-pointer"
    />
  );
};
