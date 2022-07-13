<script setup>
    import { useStore } from 'vuex';


    const store = useStore();
    // // 필터 파라미터 정의 (vuex store)
    // const initElement = store.state.search.filter;
    // // element 데이터 바인딩
    // const filter = reactive({...initElement});

    // defineProps

    // const filter = computed(() => store.state.search.filter);

    const filter = store.state.search.filter;

    // const data = reactive({
    //     filter: computed(() => store.getters['search/getSearchFilter'])
    // });

    // console.dir(data.filter);
    // console.dir(store.getters);

    console.dir(filter);
</script>

<template>
    <div class="career_area">
        <label for="career_cd_1">신입</label>
        <input type="checkbox" value="1" id="career_cd_1" v-model="filter.career.career_cd">

        <label for="career_cd_2">경력</label>
        <input type="checkbox" value="2" id="career_cd_2" v-model="filter.career.career_cd">

        <label for="career_cd_0">무관</label>
        <input type="checkbox" value="0" id="career_cd_0" v-model="filter.career.career_cd">
    </div>
</template>