import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('uppercase', (val) => {
  if (!val || typeof val != "string") {
    return "";
  }
  
  let result = val.toUpperCase();
  return result;
});

Vue.filter('readmore', (val) => {
  if (!val || typeof val != "string") {
    return "";
  }

  let result = val.slice(0, 100);
  result = result + "...";
  return result;
});

Vue.filter('date', (val, param) => {
  if (!val) return "";

  let data = {
    day: val.getDate(),
    month: val.getMonth() + 1,
    year: val.getFullYear()
  };

  let months = [
    "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน", "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
  ];

  if (param == "thai") {
    return `${data.day} ${months[data.month - 1]} ${data.year + 543}`;
  } else {
    return `${data.day}/${data.month}/${data.year}`;
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app')
