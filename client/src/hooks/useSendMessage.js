import { useState } from "react";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedFriend } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/send/${selectedFriend._id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ message }),
            });
            const data = await res.json();

            if(!res.ok) throw new Error(data.error);
            
            setMessages([...messages, data]);

        } catch (error) {
            toast.error(error.message || 'Send message failed!');
        } finally {
            setLoading(false);
        }
    };

    return { sendMessage, loading};

};

export default useSendMessage;