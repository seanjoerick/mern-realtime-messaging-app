import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetPending = () => {
    const [loading, setLoading] = useState(false);
    const [getPending, setGetPending] = useState([]);

    useEffect(() => {
        const getPendingRequests = async () => {
            setLoading(true);
            try {
                const res = await fetch('/api/user/getpending');
                const data = await res.json();

                if (!res.ok) throw new Error(data.error || 'Failed to fetch pending requests');
                
                setGetPending(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        };
        getPendingRequests();
    }, []);

    return { loading, getPending };
};

export default useGetPending;
