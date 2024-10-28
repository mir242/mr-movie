import { data } from "autoprefixer";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export const UserContext = createContext({ user: {}, session: '' });

const apiKey = 'af4c9f1e80dff26c7cbecc443e535d19';
const baseUrl = 'https://api.themoviedb.org/3';

/**
 * Provides a React context for managing user data and authentication.
 * 
 * The `UserProvider` compon  ent is responsible for fetching the user's data from the
 * TheMovieDB API using the provided API key and session ID. It also provides a `login`
 * function that allows the user to authenticate and obtain a new session ID.
 * 
 * The user's data and session ID are stored in the context and can be accessed by
 * components that are wrapped in the `UserProvider`.
 */
export default function UserProvider({ children }) {

    const navigate = useNavigate();

    const [user, setUser] = useState({});
    const [session, setSession] = useState(() => localStorage.getItem("session"));






    async function getUserData() {
        const { data } = await axios.get(
            `${baseUrl}/account?api_key=${apiKey}&session_id=${session}`);

        setUser(data);
    };

    useEffect(() => {
        if (session) {
            getUserData();
        }

    }, [session]);

    /**
     * Logs out the current user by clearing the user data, session ID, and local storage.
     */
    function logout() {
        setUser({});
        setSession(null);
        localStorage.clear();
    } 

    async function login(username, password) {
        try {
            const tokenResult = await axios.get(
                `${baseUrl}/authentication/token/new?api_key=${apiKey}`);


            const authorize = await axios.post(
                `${baseUrl}/authentication/token/validate_with_login?api_key=${apiKey}`,
                {
                    username,
                    password,
                    request_token: tokenResult.data.request_token,
                }
            );
            const session = await axios.post(
                `${baseUrl}/authentication/session/new?api_key=${apiKey}`,
                {
                    request_token: tokenResult.data.request_token,
                }
            );

            setSession(session.data.session_id);
            localStorage.setItem("session", session.data.session_id);
            navigate("/profile", {
                replace: true,

            });


        } catch {
            toast.error("invalid username and password");
        }
    }

    return (
        <UserContext.Provider value={{ user, login, session,logout }}>
            {children}
        </UserContext.Provider>
    );
}

