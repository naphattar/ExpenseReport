const API_URL = "http://localhost:9000";

export default function useGetProfile() {

    const getProfile = async () => {
        try {
            const response = await fetch(API_URL + "/user/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", 
            });

            if (response.ok) {

                const data = await response.json();

                return data;
            } else {
                
                console.error("Get Profile failed");
            }
        } catch (error) {
            console.error("An error occurred during Get Profile:", error);
        }
    };

    return getProfile; 
}
