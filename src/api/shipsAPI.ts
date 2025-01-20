import { QUERY, SHIPS_URL } from './constants';

export type TShip = {
    title: string,
    description: string
    icons: {
        large: string,
        medium: string | null,
    }
    level: number,
    type: {
        name: string,
        title: string
        icons: {
            default: string,
        },
    },
    nation: {
        name: string,
        title: string,
        color: string,
        icons: {
            small: string,
            medium: string | null,
            large: string | null,
        },
    },
};
  
  interface Responce<T> {
    data: T;
    errors?: any;
  }

  const endpoint = `${SHIPS_URL.base_path}${SHIPS_URL.endpoint}`;
  
  export const fetchGraphQL = <T>(query: string, variables: Record<string, any> = {}): Promise<T> => {
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
      .then((response: Responce<T>) => {
        if (response.errors) {
          return Promise.reject(response.errors);
        }
        return response.data;
    });
};

export const getShips = async (languageCode: string = 'ru') => {
    const data = await fetchGraphQL<{ vehicles: TShip[] }>(QUERY, { languageCode });
    console.log("API response:", data); // Отладка
    return data;
};
