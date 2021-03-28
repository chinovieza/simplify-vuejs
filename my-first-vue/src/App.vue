<template>
    <b-container class="mt-3">
        <b-row>
            <div class="col-sm-4 mx-auto">
                <div class="card">
                    <img class="card-img-top" src="https://loremflickr.com/200/100" alt="card" />
                    <div class="card-body">
                        <h4 class="card-title">Card Title</h4>
                        <p class="card-text">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore vero tenetur voluptatem minus molestias delectus, debitis aliquam quasi consequuntur aperiam nihil a deleniti quo neque architecto, eaque tempora necessitatibus quis.
                        </p>
                    </div>
                </div>
            </div>
            <b-col sm="4" class="mx-auto">
                <div class="card text-white bg-primary">
                    <div class="card-header">Header</div>
                    <div class="card-body">
                        <h5 class="card-title">Primary card title</h5>
                        <p class="card-text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nobis quasi. Libero eveniet error, quia distinctio architecto officia in numquam ut delectus quaerat, nemo qui autem asperiores blanditiis et accusantium.
                        </p>
                    </div>
                </div>
            </b-col>
            <b-col sm="4" class="mx-auto">
                <b-card no-body img-src="https://loremflickr.com/200/100" img-alt="Image" img-top>
                    <b-card-body>
                        <b-card-title>Card Title</b-card-title>
                        <b-card-text>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis praesentium quidem ea enim molestiae exercitationem architecto dicta, delectus neque laudantium sed facere totam similique quod voluptates? Quibusdam laboriosam voluptatibus voluptas.
                        </b-card-text>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>
<script>
import Vue from "vue"
import { BootstrapVue, IconsPlugin } from "bootstrap-vue"
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
export default {
    name: "App"
}
</script>
<style>
</style>