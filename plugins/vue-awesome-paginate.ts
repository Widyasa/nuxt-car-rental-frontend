import "vue-awesome-paginate/dist/style.css";
import {VueAwesomePaginate} from "vue-awesome-paginate";

// Register the package
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueAwesomePaginate);
});