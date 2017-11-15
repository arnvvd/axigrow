import Home from '../02_pages/Home.vue';
import Generator from '../02_pages/Generator.vue';
import Single from '../02_pages/Single.vue';
import Archive from '../02_pages/Archive.vue';
import About from '../02_pages/About.vue';
import Axigrow from '../02_pages/Axigrow.vue';
import Dashboard from '../02_pages/Dashboard.vue';
import PageNotFound from '../02_pages/404.vue';


const routes = [
    { path: '/', component: Home, meta: { bodyClass: 'home' }},
    { path: '/generator', component: Generator, meta: { bodyClass: 'generator' }},
    { path: '/shapes', component: Archive, meta: { bodyClass: 'archive' }, },
    { path: '/shapes/:id', component: Single, meta: { bodyClass: 'single' }, },
    { path: '/about', component: About, meta: { bodyClass: 'about' }, },
    { path: '/axigrow', component: Axigrow, meta: { bodyClass: 'axidraw' }, },
    { path: '/dashboard', component: Dashboard, meta: { bodyClass: 'dashboard' }, },
    { path: "*", component: PageNotFound, meta: { bodyClass: '404' }, }
];

export default routes;
