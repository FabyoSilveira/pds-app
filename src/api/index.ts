// Import the required libraries
import axios from 'axios'

// Create an instance of Axios with a base URL
const api = axios.create({
  baseURL: 'http://52.60.69.241/api/', // Replace with your base URL
})

// Export the API object
export default api
