import recommendList from '@/store/modules/recommend-list';
import { createStore } from 'vuex';

const store = createStore({
    modules: {
        search: recommendList
    }
});

export default store;