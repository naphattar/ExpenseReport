import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:9000";

export default function useLogin() {
    const navigate = useNavigate(); 

    const login = async (username: string, password: string) => {
        try {
            const response = await fetch(API_URL + "/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", 
                body: JSON.stringify({
                    username: username,
                    password: password,
                }),
            });

            if (response.ok) {
                toast.success("Login successful");

                const data = await response.json();

                navigate("/calendar");

                return data;
            } else {
                toast('Incorrect username/password\nor Account does not exist', {
                    icon: '⚠️',
                });
                console.error("Login failed");
            }
        } catch (error) {
            console.error("An error occurred during login:", error);
            toast.error("An error occurred during login");
        }
    };

    return login; 
}
