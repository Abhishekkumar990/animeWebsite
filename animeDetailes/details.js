document.addEventListener('DOMContentLoaded', () => {
    // Get the anime ID from the URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const animeId = urlParams.get('id'); // Get the anime ID passed in the URL

    if (!animeId) {
        // If no anime ID is found, redirect to the dashboard
        window.location.href = '../dashboard/dashboardPage.html';
    }

    // Sample anime data array(same as in dashboard.js)
    const animeList = [{
            id: 1,
            title: "The Apothecary Diaries",
            genre: "Action",
            "release date": "12/02/2003",
            name: "The Apothecary Diaries",
            cast: "anime",
            description: "The Apothecary Diaries, based on the light novel series by Natsu Hyuuga and Touko Shino, is a mystery-drama-romance series set in a fictionalized version of Ming-era China.",
            imageurl: "https://m.media-amazon.com/images/M/MV5BNjAxMmFjZjgtYjM1ZS00NzdmLTliZDktZmIyMzU5YTBlNDBmXkEyXkFqcGc@._V1_.jpg",
            rating: 4
        },
        {

            id: 2,
            title: "KAIJU N0. 8",
            genre: "Adventure",
            "release date": "2005-10-01",
            name: "KAIJU N0. 8",
            cast: "anime",
            description: "A man working a job far removed from his childhood dreams gets wrapped up in an unexpected situation - Becoming a monster, he aims once again to fulfill his lifelong dream.",
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
            description: "A man working a job far removed from his childhood dreams gets wrapped up in an unexpected situation - Becoming a monster, he aims once again to fulfill his lifelong dream.",
            imageurl: "https://rukminim2.flixcart.com/image/850/1000/xif0q/book/g/d/c/solo-leveling-vol-8-comic-original-imahy5kgrhcc2tq8.jpeg?q=90&crop=false",
            rating: "8.3 / 10"
        },

    ];

    // Find the anime object using the ID
    const anime = animeList.find(a => a.id === parseInt(animeId));

    if (anime) {
        // Populate the page with anime details
        document.getElementById('animeImage').src = anime.imageurl;
        document.getElementById('animeName').textContent = anime.name;
        document.getElementById('animeGenre').textContent = anime.genre;
        document.getElementById('animeReleaseDate').textContent = anime["release date"];
        document.getElementById('animeDescription').textContent = anime.description;
        document.getElementById('animeRating').textContent = `⭐ ${anime.rating}`;

        // Add sample reviews or other extra features
        const reviewsDiv = document.getElementById('reviews');
        reviewsDiv.innerHTML = `<p>Great anime with amazing action scenes!</p><p>Love the storyline!</p>`;
    }

    // Back to dashboard
    document.getElementById('backBtn').addEventListener('click', () => {
        window.location.href = '../dashboard/dashboardPage.html';
    });
});