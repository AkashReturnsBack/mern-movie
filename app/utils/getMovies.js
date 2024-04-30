export async function getMovies() {
    const res = await fetch('/api/moviesData');
    const data = await res.json();
    console.log(data);
    return data.data;
}


export async function getFavMovies() {
    const res = await fetch('/api/favouriteMovies');
    const data = await res.json();
    return data.data;
}

export async function addToFav(rank) {
    const res = await fetch('/api/favouriteMovies', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            rank
        })
    })
    const data = await res.json();
    console.log(data);
    return data.success;
}