import HomeCmp from "./components/HomeCmp.vue";
import SignUp from "./components/SignUp.vue";
import LogIn from "./components/LogIn.vue";
import { createRouter, createWebHistory } from "vue-router";

import AddRes from "./components/AddRes";
import UpdateRes from "./components/UpdateRes";

const routes = [
  {
    name: "HomeCmp",
    component: HomeCmp,
    path: "/",
  },
  {
    name: "SignUp",
    component: SignUp,
    path: "/sign-up",
  },
  {
    name: "LogIN",
    component: LogIn,
    path: "/login",
  },
  {
    name: "AddRes",
    component: AddRes,
    path: "/add",
  },
  {
    name: "UpdateRes",
    component: UpdateRes,
    // path: "/update",
    path: "/update/:id",
    //now path wil act as a dynamic id for each restaurant to be updated
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
