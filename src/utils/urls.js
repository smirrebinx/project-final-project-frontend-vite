const BASE_URL = import.meta.env.VITE_FINAL_PROJECT_API_KEY

export const API_URL = (slug) => `${BASE_URL}/${slug}`
