<template>
    <div style="margin:20px;">
        <div>
            <table>
                <tbody>
                    <tr v-for="(item, index) in lists" :key="index" :style="{backgroundColor: getRowStyle(index)}">
                        <td> {{item.id}} </td>
                        <td> {{item.userName}} </td>
                        <td> {{item.age}} </td>
                        <td> <button @click="editUserHandler(item.id)">Edit</button> </td>
                        <td> <button @click="deleteUserHandler(item.id)">Delete</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    name: "Users",
    props: ["lists"],
    methods: {
        getRowStyle(index) {
            return index % 2 === 0 ? "#e4e4e4" : "white";
        },
        editUserHandler(id) {
            const updatedUsers = {
                id: id,
                userName: "edit: " + new Date().toLocaleTimeString(),
                age: Math.round(Math.random() * 10) + 12
            };
            this.$emit("edit", id, updatedUsers);
        },
        deleteUserHandler(id) {
            this.$emit("delete", id);
        }
    }
};
</script>
<style>
</style>