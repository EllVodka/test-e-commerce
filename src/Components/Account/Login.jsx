import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveToken } from "../Token/Token";

export function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://fakestoreapi.com/auth/login', {
                username: username,
                password: password
            });
            console.log('Login successful', response.data.token);
            setLoggedIn(true);
            saveToken(response.data.token);
        } catch (error) {
            setError('Invalid username or password');
            console.error('Login failed', error);
        }
    };

    if (loggedIn) {
        return navigate('/')
    }

    return (
        <div className="container flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-semibold mb-4">Login</h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 p-2 w-full border rounded"
                    />
                </div>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Login
                </button>
            </div>
        </div>
    );
}