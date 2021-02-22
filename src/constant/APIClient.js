const APIClient = {

    getListGenres: async function () {

        try {
            let response = await fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41");
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }

    },


    getListMovies: async function (id) {

        try {
            let response = await fetch("https://api.themoviedb.org/3/genre/" + id + "/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41");
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }

    },


    getMoviesDetails: async function (id) {

        try {
            let response = await fetch("https://api.themoviedb.org/3/movie/" + id + "+?api_key=68e82445c8842ba8616d0f6bf0e97a41");
            let json = await response.json();
            return json;
        } catch (error) {
            console.error(error);
        }

    },

};

export default APIClient
