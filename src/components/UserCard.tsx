import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";

type Person = {
  name: string;
  following: boolean;
};

function UserCard({ person }: { person: Person }) {
  const [isFollowing, setIsFollowing] = useState(person.following);

  const toggleFollow = () => {
    setIsFollowing((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <FaUserCircle className="text-3xl mr-3 text-gray-500" />
        <span>{person.name}</span>
      </div>
      <button
        onClick={toggleFollow}
        className={`px-4 py-1 text-sm rounded-full transition ${
          isFollowing ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default UserCard;
