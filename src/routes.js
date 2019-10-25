import Home from './components/Home.vue'
import Visualization1 from './components/Visualization1.vue'
import Visualization2 from './components/Visualization2.vue'
import Visualization3 from './components/Visualization3.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/visualization1', component: Visualization1 },
    { path: '/visualization2', component: Visualization2 },
    { path: '/visualization3', component: Visualization3 }
];

export default routes