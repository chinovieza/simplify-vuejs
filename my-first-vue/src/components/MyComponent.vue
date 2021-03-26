<template>
    <div id="content">
        <h1>This is from my componet</h1>
        <p>Hello My Name {{ myPropertyName }}</p>
    </div>
</template>
<script>
export default {
    name: "MyComponent",
    data() {
        return {
            myPropertyName: "ChinoVieza"
        };
    },
};
</script>
<style>
#content {
    text-align: center;
    color: red;
}
</style>
