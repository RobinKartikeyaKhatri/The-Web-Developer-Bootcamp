const movie = [
    {
        title: "Rudaali",
        rating: 5,
        hasWatched: true,
    },

    {
        title: "Water",
        rating: 4.5,
        hasWatched: true
    },

    {
        title: "Black",
        rating: 3.5,
        hasWatched: false
    },

    {
        title: "Kisaan",
        rating: 2.5,
        hasWatched: false
    },

    {
        title: "The Lion King",
        rating: 5,
        hasWatched: true
    },

    {
        title: "Aladin",
        rating: 4,
        hasWatched: false
    },

    {
        title: "Ek Tha Tiger",
        rating: 5,
        hasWatched: true
    },

    {
        title: "Tiger Zinda Hai",
        rating: 5,
        hasWatched: true
    },

    {
        title: "Bharat",
        rating: 5,
        hasWatched: true
    }
];

movie.forEach(function(film) {
    if (film.hasWatched) {
        console.log(`You have seen "${film.title}" - ${film.rating} stars`);
    } else {
        console.log(`You have not seen "${film.title}" - ${film.rating} stars`);
    }
});