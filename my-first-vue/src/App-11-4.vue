<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-2 mx-auto text-center">
                <button class="btn btn-primary" @click="setUsers">Get User</button>
            </div>
        </div>
        <div class="row mt-3" v-if="!status">
            <div class="col-2 mx-auto text-center">
                <i class="fas fa-spinner fa-spin fa-2x"></i>
            </div>
        </div>
        <div class="row" v-else>
            <div class="p-3 text-center col-4" v-for="list in users" :key="list.id">
                <div class="card">
                    <div class="card-header">{{ list.name }}</div>
                    <div class="card-body">{{ list.address }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "App",
    data() {
        return {
            users: null,
            status: true
        };
    },
    watch: {
        users: "showData"
    },
    methods: {
        setUsers() {
            this.status = false;
            setTimeout(() => {
                this.users = [
                    {
                        name: "Monkey D. Luffy",
                        address: "Foosha Village (former); Mt. Colubo (former); Rusukaina (former)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/478?cb=20200429191518",
                        status: false
                    },
                    {
                        name: "Roronoa Zoro",
                        address: "Shimotsuki Village (former) Kuraigana Island (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/376?cb=20141008195159",
                        status: false
                    },
                    {
                        name: "Nami",
                        address: "Cocoyasi Village (former) Weatheria (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/596?cb=20190720162446",
                        status: false
                    },
                    {
                        name: "Usopp",
                        address: "Syrup Village (former) Boin Archipelago (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/519?cb=20130708033601",
                        status: false
                    },
                    {
                        name: "Sanji",
                        address: "Baratie (former)[1]; Germa Kingdom (former)[3]; Momoiro Island (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/334?cb=20170625125657",
                        status: false
                    },
                    {
                        name: "Tony Tony Chopper",
                        address: "Drum Island (former); Torino Kingdom (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130428202154",
                        status: false
                    },
                    {
                        name: "Nico Robin",
                        address: "Ohara (former) Arabasta (former) Baltigo (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/514?cb=20190202051257",
                        status: false
                    },
                    {
                        name: "Franky",
                        address: "Water 7 (former) Karakuri Island (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/700?cb=20130225034035",
                        status: false
                    },
                    {
                        name: "Brook",
                        address: "Florian Triangle (former); Namakura Island (former, temporary)",
                        image: "https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/428?cb=20161016160925",
                        status: false
                    }
                ];
            }, 2000);
        },
        showData() {
            this.status = true;
        }
    }
}
</script>
<style>
</style>