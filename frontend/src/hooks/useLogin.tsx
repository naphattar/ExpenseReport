import toast from "react-hot-toast";

const API_URL = "http://localhost:9000"

export default async function useLogin(
    username: string,
    password: string
) {
    const response = await fetch(API_URL + "/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
    });
    if (response.ok) {
        toast.success("Login successful");
        const data = await response.json()
        console.log('data',data,response)
        return data;

    } else {
        toast('Incorrect username/password\nor Account does not exist', {
            icon: '⚠️',
        });
        console.error("Login failed");
    }  
}