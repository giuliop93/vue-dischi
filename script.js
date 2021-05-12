const app = new Vue({
    el: "#app",
    data: {
        albums: [],
        genres: [],
        selectedGenre: ""
    },
    methods() {
        this.dischi.forEach(album => {
            if (!this.generi.includes(album.genre)) {
                this.generi.push(album.genre);
            }
        });
        mounted() 
            axios.get("https://flynn.boolean.careers/exercises/api/array/music")
                .then((resp) => {
                    console.log(resp)
                    this.albums = resp.data.response
                })
        }
    })
