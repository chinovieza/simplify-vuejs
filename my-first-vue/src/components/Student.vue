<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-4 col-sm-6 mb-3">
                <div class="card">
                    <a v-bind:href="myLink" target="_blank">
                        <img class="card-img-top" v-bind:src="myImage" />
                    </a>
                    <div class="card-header">
                        <div class="float-left">Profile</div>
                        <button class="btn btn-primary btn-sm float-right" @click="myMethod">{{ myButtonName }}</button>
                    </div>
                    <div class="card-body" :hidden="!myShowHide">
                        <p>Name: {{ myName }}</p>
                        <p>Score: {{ myScore }}</p>
                        <p class="alert-warning p-2">ผลการโยนเหรีญได้ {{ myContent }}</p>
                        <ul class="list-group">
                            <li class="list-group-item">
                                Celsius {{ celsius }} &#8451;
                            </li>
                            <li class="list-group-item">
                                Fahrenheit {{ fahrenheit }} &#8457;
                            </li>
                        </ul>
                        <button class="btn btn-primary" v-on:click="onUserClick">Click</button>
                        <button class="btn btn-secondary" @click="onUserClick($event)" @dblclick="onUserDoubleClick($event)">Click or DoubleClick</button>
                        <button class="btn btn-warning" @click="methodA(4, $event)">Send with param 4</button>
                        <button class="btn btn-warning" @click="methodB(8, 9, $event)">Send with params 8,9</button>
                        <button class="btn btn-danger" @click.shift="onUserShiftClick($event)">Shift Click !</button>
                    </div>
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
export default {
    name: "Student",
    data() {
        return {
            myName: "Monkey D. Luffy",
            myScore: 90,
            myImage: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png",
            myLink: "https://onepiece.fandom.com/wiki/Monkey_D._Luffy",
            fahrenheit: 98.6,
            dataStringArray: ["ก้อย", "หัว"],
            textClick: "Text display when user click",
            myShowHide: true
        };
    },
    computed: {
        celsius() {
            let result = (this.fahrenheit - 32) / 1.8;
            result = result.toFixed(2);
            return result;
        },
        randomNumber() {
            return Math.random() > 0.5 ? 1 : 0;
        },
        myContent() {
            return this.dataStringArray[this.randomNumber];
        },
        myButtonName() {
            return this.myShowHide ? "Hide" : "Show";
        }
    },
    methods: {
        onUserClick(e) {
            console.log("Click -> " + this.textClick);
            console.log(`You ${e.type} the button at (${e.clientX},${e.clientY})`);
        },
        onUserDoubleClick(e) {
            console.log("DoubleClick -> " + this.textClick);
            console.log(`You ${e.type} the button at (${e.clientX},${e.clientY})`);
        },
        myMethod() {
            this.myShowHide = !this.myShowHide;
        },
        methodA(input, e) {
            console.log(input, e);
        },
        methodB(input1, input2) {
            console.log(input1, input2);
        },
        onUserShiftClick(e) {
            alert(`You shift click at (${e.clientX},${e.clientY})`);
        }
    }
};
</script>
<style scoped>

</style>