import { useState } from "react";
import toast from "react-hot-toast";

const useAddFriends = () => {
    const [loadingAddFriend, setLoadingAddFriend] = useState(false);
    
    const addFriends = async (userId) => {
        setLoadingAddFriend(true);

        try {
            const res = await fetch(`/api/user/friends/add/${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            return data; 
        } catch (error) {
            toast.error(error.message || 'Adding failed! Please try again.'); 
        } finally {
            setLoadingAddFriend(false);
        }
    };

    return { addFriends, loadingAddFriend };
};

export default useAddFriends;
