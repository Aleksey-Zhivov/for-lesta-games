export const SHIPS_URL = {
    base_path: 'https://vortex.korabli.su/api/graphql',
    endpoint: '/glossary',
}

export const QUERY = `
query Vehicles($languageCode: String = "ru") {
  vehicles(lang: $languageCode) {
    title
    description
    icons {
      large
      medium
    }
    level
    type {
      name
      title
      icons {
        default
      }
    }
    nation {
      name
      title
      color
      icons {
        small
        medium
        large
      }
    }
  }
}
`;
