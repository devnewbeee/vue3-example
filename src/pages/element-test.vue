<script setup>
    import { reactive, watch } from 'vue';
    import axios from 'axios';
    import career from '@/components/filter-career';
    import { useStore } from 'vuex';

    class searchFilter {
        #store; // #은 private 접근 제어자를 의미
        #initElement;
        #filter;
        constructor() {
            this.setStore();
            this.setElement();
            this.bind(this.getElement());
            this.setWatch();
        }

        // vuex store 선언
        setStore() {
            this.store = useStore();      
        }

        // 초기 element set
        setElement() {
            this.initElement = this.store.state.search.filter
        }

        // 초기 element get
        getElement() {
            return this.initElement;
        }

        // 데이터 바인딩
        bind(el) {
            this.filter = reactive({...el});
        }

        // filter 값 get
        getFilter() {
            return this.filter;
        }
        
        // watch 
        setWatch() {
            watch(this.getFilter(), (val) => {
                console.dir(val);
                // 필터 선택 될 때 마다 state에 마지막 필터 조건 저장 및 API 호출
                this.store.commit('UPDATE_SEARCH_FILTER', val, {root: true});
                axios.post('/recommend-list', {...val})
                    .then(response => {
                        console.dir(response);
                    })
                    .catch(err => {
                        console.dir(err);
                    })
            });
        }

        // search filter reset
        reset() {
            Object.assign(this.getFilter(), this.getElement());
        }
    }
    
    const filter = new searchFilter();
</script>

<template>
    <div class="checkbox_area">
        <label for="check_1">체크박스 1</label>
        <input type="checkbox" v-model="filter.getFilter().checkbox" id="check_1" value="check1">

        <label for="check_2">체크박스 2</label>
        <input type="checkbox" v-model="filter.getFilter().checkbox" id="check_2" value="check2">
    </div>

    <div class="radio_area">
        <label for="radio_1">라디오 1</label>
        <input type="radio" v-model="filter.getFilter().radio" id="radio_1" value="radio1">
    </div>

    <div class="seletbox_area">
        <label for="select_1">셀렉트박스 1</label>
        <select id="select_1" v-model="filter.getFilter().selectbox_1">
            <option>php</option>
            <option>java</option>
        </select>

        <label id="select_2">셀렉트박스 2</label>
        <select id="select_2" v-model="filter.getFilter().selectbox_2">
            <option>html</option>
            <option>css</option>
        </select>
    </div>

    <career />

    <div class="result_area">
         {{ filter.getFilter().checkbox }} <br />
         {{ filter.getFilter().selectbox_1}} <br />
         {{ filter.getFilter().selectbox_2}} <br />
         {{ filter.getFilter().career.career_cd }} <br />
    </div>

    <div class="reset_area">
        <button type="button" @click="filter.reset()">초기화</button>
    </div>
</template>

<style scoped>
    .reset_area {
        padding-bottom: 10px;
    }
</style>