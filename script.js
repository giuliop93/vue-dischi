const app = new Vue({
    el: "#app",
    data: {
        albums: [],
        genres: [],
        selectedGenre: ""
    },
    // methods() {
    //     onSelectChange(event) {
    //         const select = event.currentTarget
    //         select.value
    //     }
    // },
    mounted() {
        axios.get("https://flynn.boolean.careers/exercises/api/array/music")
            .then((resp) => {
                console.log(resp)
                this.albums = resp.data.response
            })
    }
})