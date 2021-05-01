<template>
    <div style="margin:20px;">
        <div>
            <table>
                <tbody>
                    <tr v-for="(item, index) in dataLists" :key="index" :style="{backgroundColor: getRowStyle(index)}">
                        <td> {{item.id}} </td>
                        <td> {{item.userName}} </td>
                        <td> {{item.age}} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

import firestore from "./database/firebase";
const ref = firestore.collection("users");

export default {
    name: "App",
    data() {
        return {
            dataLists: []
        };
    },
    methods: {
        getRowStyle(index) {
            return index % 2 === 0 ? "#e4e4e4" : "white";
        }
    },
    created() {
        ref.onSnapshot(
            snapshot => {
                let tempDataArray = [];
                snapshot.forEach(doc => {
                    if (doc.exists) {
                        tempDataArray = [
                            ...tempDataArray, {
                                id: doc.id,
                                userName: doc.data().userName,
                                age: doc.data().age
                            }
                        ];
                    }
                });

                this.dataLists = tempDataArray;
            },
            err => {
                console.log(err);
            }
        );
    }    
};
</script>
<style>
</style>