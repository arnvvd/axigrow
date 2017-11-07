import PageNotFound from '../02_pages/404/404.vue';
import Home from '../02_pages/Home/Home.vue';
import About from '../02_pages/About/About.vue';

const routes = [
    { path: '/', component: Home},
    { path: '/about', component: About },
    { path: "*", component: PageNotFound }
];

export default routes;