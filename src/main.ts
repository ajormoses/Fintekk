import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

// import the package
import VueAwesomePaginate from "vue-awesome-paginate";

// import the necessary css file
import "vue-awesome-paginate/dist/style.css";

createApp(App).use(VueAwesomePaginate).mount("#app");
