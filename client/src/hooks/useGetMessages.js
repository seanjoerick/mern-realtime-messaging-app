import { useEffect, useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedFriend } = useConversation();

    useEffect(() => {
  
        const getMessages = async () => {
            if (!selectedFriend?._id) return; 
            setLoading(true); 
            try {
                const res = await fetch(`/api/messages/${selectedFriend._id}`);
                const data = await res.json();

                if (!res.ok) throw new Error(data.error);

                setMessages(data); 
            } catch (error) {
                toast.error(error.message || 'Failed to load messages'); 
                setLoading(false);
            }
        };

        getMessages(); 

    }, [selectedFriend?._id, setMessages]);

    return { messages, loading }; 
};

export default useGetMessages;
