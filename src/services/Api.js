const API_KEY ="8586e216f67e1925036cd6c39686f337";
const BASE_URL="https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();  // <--- FIX
    return data.results || [];           // <--- Safety
};

export const SearchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
    );
    const data = await response.json();  // <--- FIX
    return data.results || [];           // <--- Safety
};
