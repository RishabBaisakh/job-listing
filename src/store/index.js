import { createStore } from "vuex";
import jobs from "./modules/jobs";
import company from "./modules/company";
import locations from "./modules/locations";
import auth from "./modules/auth";

export default createStore({
  modules: {
    jobs,
    company,
    locations,
    auth,
  },
});
