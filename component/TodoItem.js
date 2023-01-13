import html from '../core.js';
import { connect } from '../store.js';

function TodoItem({ todo, index, editIndex }) {
  const { title, completed } = todo;
  const isCompleted = completed ? 'completed' : '';
  return html`
    <li class="${isCompleted} ${editIndex === index && 'editing'}">
      <div class="view">
        <input
          class="toggle"
          type="checkbox"
          ${completed && 'checked'}
          onChange="dispatch('toggle', ${index})"
        />
        <label ondblclick="dispatch('startEdit', ${index})">${title}</label>
        <button
          class="destroy"
          onclick="dispatch('destroy', ${index})"
        ></button>
      </div>
      <input
        class="edit"
        value="${title}"
        onkeyup="event.keyCode === 13 && dispatch('updateTodo', this.value.trim())"
        onblur="dispatch('updateTodo', this.value.trim())"
      />
    </li>
  `;
}

export default connect()(TodoItem);
