<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-sm-10 col-lg-6 mx-auto border" v-bind:style="{'background-color': colorPropery}">
                <div class="row m-1 p-4">
                    <div class="col-4">
                        <input type="number" class="form-control" name="r" min="0" max="255" v-model="r" />
                    </div>
                    <div class="col-4">
                        <input type="number" class="form-control" name="g" min="0" max="255" v-model="g" />
                    </div>
                    <div class="col-4">
                        <input type="number" class="form-control" name="b" min="0" max="255" v-model="b" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "app",
    data() {
        return {
            r: 255,
            g: 255,
            b: 255
        };
    },
    computed: {
        colorPropery() {
            return `rgb(${this.r}, ${this.g}, ${this.b})`;
        }
    }
}
</script>