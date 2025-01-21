import toast from "react-hot-toast";

const API_URL = "http://localhost:9000";

export default async function useLogin(username: string, password: string) {
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
}
