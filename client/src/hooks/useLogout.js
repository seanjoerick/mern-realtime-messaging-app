import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    
    const logout = async () => {
        setLoading(true);
        
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await res.json();

            if (data.error) throw new Error(data.error);

            // Remove user data from local storage
            localStorage.removeItem('chat-user');
            // Update context to remove user
            setAuthUser(null);

            toast.success('Logout successfully');
        } catch (error) {
            toast.error(error.message || 'Log out failed! Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
}

export default useLogout;
