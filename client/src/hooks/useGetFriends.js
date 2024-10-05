import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetFriends = () => {
    const [loading, setLoading] = useState(false);
    const [friends, setFriends] = useState([]); 
    const [friendsCount, setFriendsCount] = useState(0);

    useEffect(() => {
        const fetchFriends = async () => {
            setLoading(true); 
            try {
                const res = await fetch('/api/user/getfriends');
                const data = await res.json();

                if (data.message === 'No friends yet') {
                    setFriends([]);
                    setFriendsCount(0);
                    return;
                }

                if (!res.ok) throw new Error(data.message);

                setFriends(data.friends);
                setFriendsCount(data.count);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);  
            }
        };

        fetchFriends();
    }, []);

    return { loading, friends, friendsCount };
};

export default useGetFriends;
