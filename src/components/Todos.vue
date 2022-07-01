<template>
    <div class="wrapper">
        <ul class="todos">
            <li v-for="todo in todos" :key="todo.id">
                <span>{{ todo.title }}</span>
                <div class="actions">
                    <button class="remove"><i class="fa-regular fa-trash-can"></i></button>
                    <!-- <button class="complete"><i class="fa-regular fa-circle-check"></i></button> -->
                    <button class="complete"><i class="fa-solid fa-circle-check"></i></button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const todos = computed(() => {
            return store.getters.todos;
        });

        onBeforeMount(() => {
            console.log('BEFORE MOUNT');
        });

        return {
            todos,
        }
    },
}
</script>

<style lang="scss" scoped>
    .wrapper {
        width: 100%;
        padding: 12px;
        ul.todos {
            width: 100%;
            li {
                width: 100%;
                height: 50px;
                background: #fff;
                border-radius: 5px;
                box-shadow: 0 1px 5px rgba(44, 62, 80, 0.10);
                margin: 0 0 10px 0;
                position: relative;
                padding: 0 100px 0 14px;
                display: flex;
                align-items: center;
                &:last-of-type {
                    margin: 0;
                }
                .actions {
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 100px;
                    height: 50px;
                    button {
                        width: 50px;
                        height: 50px;
                        float: left;
                        background: none;
                        position: relative;
                        border: 0px;
                        box-shadow: none;
                        outline: none;
                        cursor: pointer;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        &:last-of-type:before {
                            content: '';
                            width: 1px;
                            height: 30px;
                            position: absolute;
                            top: 10px;
                            left: 0;
                            background: #edf0f1;
                        }
                        i {
                            pointer-events: none;
                            font-size: 22px;
                            transition: all 0.2s ease;
                        }
                        &.remove {
                            i {
                                color: rgba(0, 0, 0, 0.4);
                            }
                            &:hover {
                                i {
                                    color: var(--red);
                                }
                            }
                        }
                        &.complete {
                            &:hover {
                                i {
                                    color: var(--green);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
