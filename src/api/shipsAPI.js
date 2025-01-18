import { QUERY, SHIPS_URL } from './contants';
const endpoint = `${SHIPS_URL.base_path}${SHIPS_URL.endpoint}`;
export const fetchGraphQL = (query, variables = {}) => {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })
        .then((res) => res.json())
        .then((response) => {
        if (response.errors) {
            return Promise.reject(response.errors);
        }
        return response.data;
    });
};
export const getShips = async (languageCode = 'ru') => {
    const data = await fetchGraphQL(QUERY, { languageCode });
    console.log("API response:", data); // Отладка
    return data;
};
