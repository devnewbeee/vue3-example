<script setup>
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const movePage = target => {
        router.push({
            name: target,
            path: `/${target}`,
            query: {}
        });
    };
</script>

<template>
    <a @click="movePage('element-test')">ELEMENT-TEST</a>
</template>