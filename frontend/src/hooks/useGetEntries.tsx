const API_URL = "http://localhost:9000";

export default function useGetEntries() {

    const getEntries = async () => {
        try {
            const response = await fetch(API_URL + "/entries/", {
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
                
                console.error("Get Entries failed");
            }
        } catch (error) {
            console.error("An error occurred during Get Entries:", error);
        }
    };

    return getEntries; 
}
