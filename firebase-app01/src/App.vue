<template>
    <div>
        <Form @add="addUserHandler" />
        <div v-if="loading">Loading...</div>
        <div v-else-if="userLists.length > 0">
            <Users :lists="userLists" @edit="editHandler" @delete="deleteHandler" />
        </div>
    </div>
</template>
<script>

import firestore from "./database/firebase";
import Form from "./Form";
import Users from "./Users";

const ref = firestore.collection("users");

export default {
    name: "App",
    components: {
        Form,
        Users
    },
    data() {
        return {
            userLists: [],
            loading: false,
            unsubscribe: null
        };
    },
    methods: {
        fetchData() {
            const query = ref.orderBy("age", "desc");
            this.loading = true;
            this.unsubscribe = query.onSnapshot(
                snapshot => {
                    let tempDataArray = [];
                    snapshot.forEach(doc => {
                        tempDataArray = [
                            ...tempDataArray, {
                                id: doc.id,
                                userName: doc.data().userName,
                                age: doc.data().age
                            }
                        ];
                    });
                    this.userLists = tempDataArray;
                    this.loading = false;
                },
                err => {
                    this.loading = false;
                    console.log(err);
                }
            );
        },
        addUserHandler(obj) {
            ref.add(obj).then(() => {
                console.log("add successfully");
            });
        },
        deleteHandler(id) {
            ref
            .doc(id)
            .delete()
            .then(() => {
                console.log("deleted");
            })
            .catch(err => {
                console.log(err);
            });
        },
        editHandler(id, obj) {
            ref
            .doc(id)
            .set(obj)
            .then(() => {
                console.log("updated");
            })
            .catch(err => {
                console.log(err);
            });
        }
    },
    created() {
        this.fetchData();
    },
    beforeDestroy() {
        this.unsubscribe();
    }
};
</script>
<style>
</style>