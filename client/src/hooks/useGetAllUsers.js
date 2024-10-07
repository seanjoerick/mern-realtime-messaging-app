import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const useGetAllUsers = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            setLoading(true); 
            try {
                const res = await fetch('/api/user/allusers');
                const data = await res.json();

                if (!res.ok) throw new Error(data.error);
                setUsers(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);  
            }
        };

        getUsers();
    }, []);

    return { loading, users };
};

export default useGetAllUsers;
