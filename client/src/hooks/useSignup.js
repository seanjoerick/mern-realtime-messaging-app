import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const  { setAuthUser } = useAuthContext();

    const signup = async ({ fullName, username, password, gender }) => {
        setLoading(true);
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fullName, username, password, gender }),
            });
            
            const data = await res.json();
            setLoading(false);

            if (!res.ok) throw new Error(data.error);

            //local starage
            localStorage.setItem('chat-user', JSON.stringify(data));
            //context
            setAuthUser(data);

            toast.success('Signup successful!');
            return data;
        } catch (error) {
            setLoading(false);
            toast.error(error.message || 'Signup failed! Please try again.');
        }
    };

    return { signup, loading };
};

export default useSignup;
