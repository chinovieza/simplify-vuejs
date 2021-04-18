<template>
    <div></div>
</template>
<script>
import firestore from "./database/firebase";

const userRef = firestore.collection("students");

export default {
    name: "App",
    created() {
        
        console.log("Query -> ");

        const query = userRef
            .where("name", "==", "Nami")
            .where("age", ">", 19);

        query
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if (doc.exists) {
                        console.log(doc.data());
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });

        const query2 = userRef
            .orderBy("age", "desc")
            .limit(5)
            .startAt(40)
            .endAt(30);
        
        query2
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    if (doc.exists) {
                        console.log(doc.data());
                    }
                });
            })
            .catch(err => {
                console.log(err);
            });

    }    
}
</script>
<style>
</style>