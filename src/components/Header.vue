<template>
    <header>
        <input type="text" v-model="state.todo" :placeholder="state.message" />
        <button @click="onAddTodo"><i class="fa-solid fa-plus"></i></button>
    </header>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const state = reactive({
            todo: null,
            message: 'What are you doing today?',
        });
        const onAddTodo = () => {
            if (state.todo) {
                store.commit('add', state.todo);
                state.todo = null;
            }
        };

        return {
            state,
            onAddTodo,
        };
    },
};
</script>

<style lang="scss" scoped>
$headerHeight: 80px;
$inputHeight: 50px;
header {
    background: var(--black-pearl);
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    color: var(--white);
    height: $headerHeight;
    box-shadow: 0 2px 4px rgba(44, 62, 80, 0.4);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 14px;
    input {
        width: 100%;
        height: $inputHeight;
        background: rgba(255, 255, 255, 0.2);
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        border-top-right-radius: calc(#{$headerHeight} / 2);
        border-bottom-right-radius: calc(#{$headerHeight} / 2);
        border: 0;
        box-shadow: none;
        outline: none;
        appearance: none;
        color: white;
        font-size: 16px;
        font-weight: 400;
        text-indent: 18px;
        padding: 0 60px 0 0;
    }
    input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
    button {
        width: 50px;
        height: 50px;
        position: absolute;
        top: 15px;
        right: 15px;
        z-index: 2;
        border-radius: 25px;
        background: #fff;
        border: 0;
        outline: none;
        appearance: none;
        box-shadow: none;
        cursor: pointer;
        i {
            font-size: 22px;
            color: var(--black-pearl);
            pointer-events: none;
        }
    }
}
</style>
