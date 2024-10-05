import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetFriends = () => {
    const [loading, setLoading] = useState(false);
    const [friends, setFriends] = useState([]); 

    useEffect(() => {
        const fetchFriends = async () => {
            setLoading(true); 
            try {
                const res = await fetch('/api/user/getfriends');
                const data = await res.json();

                if (!res.ok) throw new Error(data.message);

                setFriends(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);  
            }
        };

        fetchFriends();
    }, []);

    return { loading, friends };
};

export default useGetFriends;
