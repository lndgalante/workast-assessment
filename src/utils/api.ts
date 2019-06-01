const BASE_URL = 'https://api.giphy.com/v1/gifs'
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const api = {
  search: async (query: string) => {
    try {
      const response = await fetch(`${BASE_URL}/search?q=${query}&api_key=${API_KEY}&limit=${20}`)
      const results = await response.json()

      return results
    } catch (error) {
      throw new Error(error)
    }
  },
  trending: async () => {
    try {
      const response = await fetch(`${BASE_URL}/trending?api_key=${API_KEY}&limit=${10}`)
      const results = await response.json()

      return results
    } catch (error) {
      throw new Error(error)
    }
  },
}

export default api
