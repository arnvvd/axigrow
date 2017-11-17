import Home from '../02_pages/Home.vue';
import Generator from '../02_pages/Generator.vue';
import Single from '../02_pages/Single.vue';
import Archive from '../02_pages/Archive.vue';
import About from '../02_pages/About.vue';
import Axigrow from '../02_pages/Axigrow.vue';
import Dashboard from '../02_pages/Dashboard.vue';
import PageNotFound from '../02_pages/404.vue';


const routes = [
    { 
        path: '/', 
        component: Home, 
        meta: { 
            bodyClass: 'home',
            headerDatas: {
                navigation: false,
                home: false,
                grow: false
            } 
        }
    },
    { 
        path: '/generator', 
        component: Generator, 
        meta: { 
            bodyClass: 'generator',
            headerDatas: {
                navigation: true,
                home: true,
                grow: false
            } 
        }
    },
    { 
        path: '/shapes', 
        component: Archive, 
        meta: { 
            bodyClass: 'archive',
            headerDatas: {
                navigation: true,
                home: true,
                grow: false
            } 
        }
    },
    { 
        path: '/shapes/:id', 
        component: Single, 
        meta: { 
            bodyClass: 'single',
            headerDatas: {
                navigation: true,
                home: true,
                grow: false
            } 
        }
    },
    { 
        path: '/about', 
        component: About, 
        meta: { 
            bodyClass: 'about is-black',
            headerDatas: {
                navigation: true,
                home: true,
                grow: false
            } 
        }
    },
    { 
        path: '/axigrow', 
        component: Axigrow, 
        meta: { 
            bodyClass: 'axidraw is-black',
            headerDatas: {
                navigation: true,
                home: true,
                grow: true
            } 
        }
    },
    { 
        path: '/dashboard', 
        component: Dashboard, 
        meta: { 
            bodyClass: 'dashboard',
            headerDatas: {
                navigation: true,
                home: true,
                grow: false
            } 
        }
    },
    { 
        path: "*", 
        component: PageNotFound, 
        meta: { 
            bodyClass: '404',
            headerDatas: {
                navigation: true,
                home: true,
                grow: false
            } 
        }
    }
];

export default routes;
