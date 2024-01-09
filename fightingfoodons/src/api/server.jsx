const baseUrl = "/db";

export const serverCalls= {
    manga: async () => {
        const response = await fetch(`${baseUrl}/manga/manga.json`);
        let data = await response.json();
        return data;
    },

    anime: async () => {
        const response = await fetch(`${baseUrl}/anime/anime.json`);
        let data = await response.json();
        return data;
    },

    games: async () => {
        // need games.json first
        // const response = await fetch(`${baseUrl}/games/games.json`);
        // let data = await response.json();
        // return data;
        let dummyData = "games return success";
        return dummyData;
    },

    characters: async () => {
        // need characters.json first
        // const response = await fetch(`${baseUrl}/characters/characters.json`);
        // let data = await response.json();
        // return data;
        let dummyData = "characters return success";
        return dummyData;
    }
}