<template>
    <div class="home">
        <Header />
        <Todos />
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Todos from '@/components/Todos.vue';

export default {
    components: {
        Header,
        Todos,
    },
};
</script>
