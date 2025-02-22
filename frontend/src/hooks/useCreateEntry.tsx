import { EntryType } from "../types/Entry";

const API_URL = "http://localhost:9000";

export default function useCreateEntry() {

    const createEntry = async (
        type : EntryType,
        amount : number,
        description : string,
        date : string | null
    ) => {
        try {
            const response = await fetch(API_URL + "/entries/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include", 
                body: JSON.stringify({
                    type : type,
                    amount : amount,
                    description : description,
                    date : date
                }),
            });

            if (response.ok) {

                const data = await response.json();

                return data;
            } else {
                
                console.error("Create Entry failed");
            }
        } catch (error) {
            console.error("An error occurred during Create Entry:", error);
        }
    };

    return createEntry; 
}
