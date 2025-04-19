document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('togglebtn');
    const navDropdown = document.getElementById('navDropdown');

    toggleBtn.addEventListener('click', () => {
        navDropdown.classList.toggle('active'); // use the class defined in CSS
    });

    const animeList = [{
            id: 1,
            title: "The Apothecary Diaries",
            genre: "Action",
            "release date": "12/02/2003",
            name: "The Apothecary Diaries",
            cast: "anime",
            description: "The Apothecary Diaries, based on the light novel series...",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNjAxMmFjZjgtYjM1ZS00NzdmLTliZDktZmIyMzU5YTBlNDBmXkEyXkFqcGc@._V1_.jpg",
            rating: 4
        },
        {
            id: 2,
            title: "KAIJU N0. 8",
            genre: "Adventure",
            "release date": "2005-10-01",
            name: "Another Anime",
            cast: "anime",
            description: "A man working a job far removed from his childhood dreams...",
            imageurl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRwbQsyDiIrivouYvk0IDi7902k3zfcD7MFZKOCwtnc_ThL5GbL",
            rating: "8.3 / 10"
        },
        {
            id: 3,
            title: "SOLO LEVELING",
            genre: "Adventure",
            "release date": "2005-10-01",
            name: "SOLO LEVELING",
            cast: "anime",
            description: "A man working a job far removed from his childhood dreams...",
            imageurl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/g/d/c/solo-leveling-vol-8-comic-original-imahy5kgrhcc2tq8.jpeg?q=90&crop=false",
            rating: "8.3 / 10"
        },
    ];

    const container = document.getElementById('animeContainer');

    animeList.forEach(anime => {
        const card = document.createElement('div');
        card.className = 'item';

        const animePageURL = `../animeDetailes/details.html?id=${anime.id}`;

        card.innerHTML = `
            <a href="${animePageURL}" class='anime-link'>
                <img src="${anime.imageurl}" alt="${anime.name}" class="animeImage">
                <h3 class="animeName">${anime.name}</h3>
                <p>Rating: ⭐ ${anime.rating}</p>
            </a>
        `;

        container.appendChild(card);
    });
});

window.addEventListener("resize", () => {
    const navBar = document.getElementById("navDropdown");
    if (window.innerWidth > 768) {
        navBar.classList.remove("active");
    }
});