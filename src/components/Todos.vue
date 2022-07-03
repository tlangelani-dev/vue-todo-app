<template>
    <div class="wrapper">
        <h3>Hooray, all tasks completed <i class="fa-regular fa-face-smile"></i></h3>
        <section class="todos incomplete">
            <h3>In Complete</h3>
            <ul>
                <li v-for="todo in todos" :key="todo.id">
                    <span>{{ todo.title }}</span>
                    <div class="actions">
                        <button class="remove" @click="onRemoveTodo(todo.id)">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                        <button class="complete" @click="onCompleteTodo(todo.id)">
                            <i class="fa-regular fa-circle-check"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </section>
        <section class="todos completed">
            <h3>Completed</h3>
            <ul>
                <li v-for="todo in todosCompleted" :key="todo.id">
                    <span>{{ todo.title }}</span>
                    <div class="actions">
                        <button class="remove" @click="onRemoveTodo(todo.id)">
                            <i class="fa-regular fa-trash-can"></i>
                        </button>
                        <button class="complete" @click="onCompleteTodo(todo.id)">
                            <i class="fa-solid fa-circle-check"></i>
                        </button>
                    </div>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
    setup() {
        const store = useStore();

        const todos = computed(() => {
            return store.getters.todos;
        });
        const todosCompleted = computed(() => {
            return store.getters.todosCompleted;
        });

        const onRemoveTodo = (id) => {
            store.commit('remove', id);
        };
        const onCompleteTodo = (id) => {
            console.log('CC', id);
            store.commit('complete', id);
        };

        return {
            todos,
            todosCompleted,
            onRemoveTodo,
            onCompleteTodo,
        };
    },
};
</script>

<style lang="scss" scoped>
.wrapper {
    width: 100%;
    padding: 12px;
    section {
        > h3 {
            margin: 12px 0 16px 0;
            text-align: center;
        }
        &.todos {
            ul {
                width: 100%;
                li {
                    width: 100%;
                    height: 50px;
                    background: #fff;
                    border-radius: 5px;
                    box-shadow: 0 1px 5px rgba(44, 62, 80, 0.1);
                    margin: 0 0 10px 0;
                    position: relative;
                    padding: 0 100px 0 14px;
                    display: flex;
                    align-items: center;
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
                margin-bottom: 24px;
            }
        }
    }
}
</style>
