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
            ]
        }
    },
    getters: {
        todos(state) {
            return state.todos;
        },
        todo(state) {
            return (id) => {
                return state.todos.find(todo => parseInt(todo.id) === parseInt(id));
            }
        }
    }
});

export default store;
