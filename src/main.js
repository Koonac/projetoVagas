import { createApp } from "vue";
import App from "./App.vue";

// FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* IMPORTANDO O MITT */
import mitt from "mitt";

const emitter = mitt();

library.add(faHeart);

const app = createApp(App);

app.config.globalProperties.emitter = emitter;
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
