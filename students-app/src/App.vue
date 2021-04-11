<template>
  <div class="container">
    <div class="display-4 text-center">Student Lists</div>
    <StudentLists :lists="students" @customEventDel="deleteStudent" />
  </div>
</template>

<script>
import StudentLists from '@/components/StudentLists';

export default {
  name: 'App',
  components: {
    StudentLists
  },
  data() {
    return {
      students: [
        {
          id: "12123001",
          name: "Monkey D. Luffy",
          address: "Foosha Village (former); Mt. Colubo (former); Rusukaina (former)",
          image: "https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/478?cb=20200429191518",
          status: false,
          age: 19
        },
        {
          id: "12123002",
          name: "Roronoa Zoro",
          address: "Shimotsuki Village (former) Kuraigana Island (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/376?cb=20141008195159",
          status: false,
          age: 21
        },
        {
          id: "12123003",
          name: "Nami",
          address: "Cocoyasi Village (former) Weatheria (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/596?cb=20190720162446",
          status: false,
          age: 20
        },
        {
          id: "12123004",
          name: "Usopp",
          address: "Syrup Village (former) Boin Archipelago (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/519?cb=20130708033601",
          status: false,
          age: 19
        },
        {
          id: "12123005",
          name: "Sanji",
          address: "Baratie (former)[1]; Germa Kingdom (former)[3]; Momoiro Island (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/334?cb=20170625125657",
          status: false,
          age: 21
        },
        {
          id: "12123006",
          name: "Tony Tony Chopper",
          address: "Drum Island (former); Torino Kingdom (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130428202154",
          status: false,
          age: 17
        },
        {
          id: "12123007",
          name: "Nico Robin",
          address: "Ohara (former) Arabasta (former) Baltigo (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/514?cb=20190202051257",
          status: false,
          age: 30
        },
        {
          id: "12123008",
          name: "Franky",
          address: "Water 7 (former) Karakuri Island (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/700?cb=20130225034035",
          status: false,
          age: 36
        },
        {
          id: "12123009",
          name: "Brook",
          address: "Florian Triangle (former); Namakura Island (former, temporary)",
          image: "https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png/revision/latest/scale-to-width-down/428?cb=20161016160925",
          status: false,
          age: 90
        }
      ]
    }
  },
  methods: {
    deleteStudent(delete_id) {
      this.students = this.students.filter(student => {
        return student.id !== delete_id;
      });
    }
  }
}
</script>

<style>
</style>
