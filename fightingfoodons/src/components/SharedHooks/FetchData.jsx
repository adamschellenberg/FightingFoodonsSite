import { serverCalls } from "../../api";

export const getDataFromServer = {
    getAnimeDataFromServer: async () => {
        const result = await serverCalls.anime();
        return result;
    },

    getMangaDataFromServer: async () => {
        const result = await serverCalls.manga();
        return result;
    },

    getGamesDataFromServer: async () => {
        const result = await serverCalls.games();
        return result;
    },

    getCharactersDataFromServer: async () => {
        const result = await serverCalls.characters();
        return result;
    }
}