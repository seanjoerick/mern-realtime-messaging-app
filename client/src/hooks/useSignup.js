import { useState } from 'react';
import toast from 'react-hot-toast';

const useSignup = () => {
    const [loading, setLoading] = useState(false);

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

            if (data.error) throw new Error(data.error);

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
