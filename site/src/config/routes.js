import Home from '../02_pages/Home.vue';
import Generator from '../02_pages/Generator.vue';
import Single from '../02_pages/Single.vue';
import Archive from '../02_pages/Archive.vue';
import About from '../02_pages/About.vue';
import Axigrow from '../02_pages/Axigrow.vue';
import PageNotFound from '../02_pages/404.vue';


const routes = [
    { path: '/', component: Home},
    { path: '/generator', component: Generator },
    { path: '/shapes', component: Archive },
    { path: '/shapes/:id', component: Single },
    { path: '/about', component: About },
    { path: '/axigrow', component: Axigrow },
    { path: "*", component: PageNotFound }
];

export default routes;
