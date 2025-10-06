function getCats() {
    const API_URL = "https://api.thecatapi.com/v1/images/search?limit=6";
    return fetch(API_URL)
        .then(response => {
            if (!response.ok) throw new Error("Error retrieving cat photos");
            return response.json();
        })
        .catch(error => {
            console.error(error);
            return [];
        });
}