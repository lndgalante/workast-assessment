const BASE_URL = 'https://api.giphy.com/v1/gifs'

const api = {
  search: async (query: string) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search?q=${query}&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=${20}`
      )
      const results = await response.json()

      return results
    } catch (error) {
      console.error(error)
      throw new Error(error)
    }
  },
}

export default api
