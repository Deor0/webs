const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector("main");


async function getMovie() {


    const resp = await fetch(APIURL);
    const respData = await resp.json();

    respData.results.forEach(movie => {
        const { backdrop_path, title, vote_average } = movie;
        const movieEL = document.createElement("div");
        movieEL.classList.add("movie")

        movieEL.innerHTML =
            `      
            <img
            src="${IMGPATH + backdrop_path}"
            alt="${title}"
            />
            <div class="movie-info">
            <h3>${title}</h3>
            <span>${vote_average}</span>
            </div>
            `

        main.appendChild(movieEL);
    });
    console.log(respData);
    return respData;
};


getMovie();