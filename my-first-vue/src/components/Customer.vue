<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-4 col-sm-6 mx-auto">
                <button class="btn btn-primary" @click="randomIndex">Random</button>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-4 col-sm-6 mx-auto">
                <select class="form-control" name="charactor">
                    <option>เลือกตัวละคร</option>
                    <option v-for="(item, index) in customers" :key="index" :value="item">{{ item.name }}</option>
                </select>
            </div>
        </div>
        <div class="row mt-3">
            <div class="col-lg-4 col-sm-6 m-3 mx-auto">
                <div class="card">
                    <img class="card-mg-top" :src="currentCustomer.image" />
                    <div class="card-header">
                        <div class="float-start">{{ currentCustomer.name }}</div>
                        <button class="btn btn-primary btn-sm float-end" @click="onUserClick">{{ buttonName }}</button>
                    </div>
                    <div class="card-body" v-if="!currentCustomer.status && currentCustomer.address">
                        <dl class="row">
                            <dt class="col-lg-3 col-sm-4 col-3">ที่อยู่</dt>
                            <dd class="col-lg-9 col-sm-8 col-9">{{ currentCustomer.address }}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Customer",
    data() {
        return {
            currentId: 0,
            customers: [
                {
                    name: "Monkey D. Luffy",
                    address: "Foosha Village (former); Mt. Colubo (former); Rusukaina (former)",
                    image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/478?cb=20200429191518",
                    status: false
                },
                {
                    name: "Roronoa Zoro",
                    //address: "Shimotsuki Village (former) Kuraigana Island (former, temporary)",
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
                    //address: "Syrup Village (former) Boin Archipelago (former, temporary)",
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
                    //address: "Ohara (former) Arabasta (former) Baltigo (former, temporary)",
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
            ]
        };
    },
    computed: {
        currentCustomer() {
            return this.customers[this.currentId];
        },
        buttonName() {
            if (this.currentCustomer.address) {
                return this.currentCustomer.status ? "Show" : "Hide";
            } else {
                return "";
            }
        }
    },
    methods: {
        onUserClick() {
            this.currentCustomer.status = !this.currentCustomer.status;
        },
        randomIndex() {
            this.currentId = Math.floor(Math.random() * 9);
        }
    }
}
</script>
<style>
</style>