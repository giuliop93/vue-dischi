const app = new Vue({
    el: "#app",
    data: {
        albums: [],
        genres: [],
        selectedGenre: ""
    },
    methods() {
        this.dischi.forEach(disco => {
            if (!this.generi.includes(disco.genre)) {
                this.generi.push(disco.genre);
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
