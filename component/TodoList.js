import html from '../core.js';
import { connect } from '../store.js';
import TodoItem from './TodoItem.js';

const connector = connect();

function TodoList(props) {
  const { todos, filter, filters } = props;
  return html`
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        onChange="dispatch('toggleAll', this.checked)"
        ${todos.every(filters.completed) && 'checked'}
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos
          .filter(filters[filter])
          .map((todo, index) => TodoItem({ todo, index }))}
      </ul>
    </section>
  `;
}

export default connector(TodoList);

// duma xin that, ng ta gioi qua T___T
