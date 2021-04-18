<template>
    <div>
        <ul>
            <li v-for="(product, index) in productLists" :key="index">
                # {{ product.pid }} : {{ product.name }} : ${{ product.price }}
            </li>
        </ul>
        <hr />
        <div v-if="loading">loading ...</div>
        <button v-else-if="currentCursor" @click="onMoreProducts">More Products ...</button>
        <div v-else-if="productLists.length > 0">No more product</div>
    </div>
</template>
<script>
import firestore from './database/firebase';

export default {
    name: "App",
    data() {
        return {
            productLists: [],
            currentCursor: null,
            loading: false
        };
    },
    created() {

        const firstPageRef = firestore.collection("products").orderBy("pid", "asc").limit(3);

        firstPageRef.get().then(querySnapshot => {
            let tempLists = [];
            querySnapshot.docs.forEach(doc => {
                if (doc.exists) {
                    const currentProduct = {
                        pid: doc.data().pid,
                        name: doc.data().name,
                        price: doc.data().price
                    };
                    tempLists = [...tempLists, currentProduct];
                }
            });

            this.productLists = tempLists;
            const currentLength = querySnapshot.docs.length;
            const currentCursorFromFirstPage = querySnapshot.docs[currentLength - 1];
            this.currentCursor = currentCursorFromFirstPage;
        });
    
    },
    methods: {
        onMoreProducts() {
            
            const nextPageRef = firestore.collection("products").orderBy("pid", "asc").limit(3);

            nextPageRef.get().then(querySnapshot => {
                this.loading = true;
                
                const currentLength = querySnapshot.docs.length;

                if (!this.currentCursor) {
                    return;
                }
                
                const query = nextPageRef.startAfter(this.currentCursor);
                query.get().then(querySnapshot => {
                    let tempNewArray = [];
                    querySnapshot.forEach(doc => {
                        if (doc.exists) {
                            tempNewArray = [
                                ...tempNewArray,
                                {
                                    pid: doc.data().pid,
                                    name: doc.data().name,
                                    price: doc.data().price
                                }
                            ];
                        }
                    });

                    this.productLists = [...this.productLists, ...tempNewArray];
                    const currentCursorForNextPage = querySnapshot.docs[currentLength - 1];
                    this.currentCursor = currentCursorForNextPage;
                    this.loading = false;
                });
            });

        }
    }
    /*
    created() {
        const data = [
            { pid: "01", name:"bag#1", price: 270 },
            { pid: "02", name:"shirt#1", price: 120 },
            { pid: "03", name:"hat#1", price: 90 },
            { pid: "04", name:"shirt#2", price: 550 },
            { pid: "05", name:"hat#2", price: 110 },
            { pid: "06", name:"hat#3", price: 100 },
            { pid: "07", name:"bag#2", price: 300 },
            { pid: "08", name:"shirt#3", price: 490 }
        ];

        const productRef = firestore.collection("products");

        data.forEach(product => {
            productRef
                .doc(product.pid)
                .set({
                    pid: product.pid,
                    name: product.name,
                    price: product.price
                })
                .then(() => {
                    console.log({
                        pid: product.pid,
                        name: product.name,
                        price: product.price
                    });
                });
        });
    }
    */
   
};
</script>
<style>
</style>