import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            todos: [
                {
                    id: 1,
                    title: 'A trip to Dubai',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'Buy a microwave',
                    completed: true,
                },
                {
                    id: 3,
                    title: 'Buy a fridge next week',
                    completed: false,
                },
            ],
        };
    },
    getters: {
        todos(state) {
            return state.todos.filter((todo) => todo.completed === false);
        },
        todosCompleted(state) {
            return state.todos.filter((todo) => todo.completed === true);
        },
        todo(state) {
            return (id) => {
                return state.todos.find((todo) => parseInt(todo.id) === parseInt(id));
            };
        },
    },
    mutations: {
        add(state, title) {
            state.todos.push({
                id: 12, // TODO
                title,
                completed: false,
            });
        },
        remove(state, id) {
            state.todos = state.todos.filter((todo) => parseInt(todo.id) !== parseInt(id));
        },
        complete(state, id) {
            const todo = state.todos.find((todo) => parseInt(todo.id) === parseInt(id));
            todo.completed = true;
        },
    },
});

export default store;
