export async function getMovies() {
    const res = await fetch('/api/moviesData');
    const data = await res.json();
    return data;
}