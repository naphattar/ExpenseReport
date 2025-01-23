import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:9000";

export default function useLogout() {
    const navigate = useNavigate(); 

    const logout = async () => {
        try {
            const response = await fetch(API_URL + "/user/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include"
            });

            if (response.ok) {
                toast.success("Logout successful");

                const data = await response.json();

                navigate("/login");

                return data;
            } else {
                toast('Logout failed', {
                    icon: '⚠️',
                });
                console.error("Logout failed");
            }
        } catch (error) {
            console.error("An error occurred during logout:", error);
            toast.error("An error occurred during logout");
        }
    };

    return logout; 
}
