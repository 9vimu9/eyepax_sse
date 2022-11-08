import { createRouter, createWebHistory } from "vue-router";

import MembersIndex from '../components/members/Index.vue'

const routes = [
    {
        path: '/members',
        name: 'members.index',
        component: MembersIndex
    },

]

export default createRouter({
    history: createWebHistory(),
    routes
})
