import Vue from "vue"
import App from "./App.vue"

require("./assets/semantic.min.css")
require("./assets/semantic.min.js")

console.log($.fn.jquery)

let vm = new Vue({
    el: "#app",
    render: h => h(App)
})
