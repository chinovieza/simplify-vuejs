<template>
    <div class="container">
        <div class="display-4 text-center">All Ebooks</div>
        <div class="row">
            <div class="col-12 col-sm-6 col-lg-4 mt-4" v-for="book in bookLists" :key="book.id">
                <div class="card">
                    <div class="card-body">
                        <Ebook :ebookObject="book" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import Ebook from "@/components/Ebook.vue"

export default {
    name: "Books",
    data() {
        return {
            bookLists: [
                { id:"12123121201", name: "Vue.js" },
                { id:"12123121202", name: "React" },
                { id:"12123121203", name: "Angular" },
                { id:"12123121204", name: "Node.js" },
                { id:"12123121205", name: "PHP" },
                { id:"12123121206", name: "Python" },
                { id:"12123121207", name: "MongoDB" },
                { id:"12123121208", name: "MySQL/MariaDB" },
                { id:"12123121208", name: "Firebase" }
            ]
        };
    },
    components: {
        Ebook
    }    
}
</script>
<style>
</style>