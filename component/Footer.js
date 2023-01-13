import html from '../core.js';
import { connect } from '../store.js';

const connector = connect();

function Footer(props) {
  const { todos, filter, filters } = props;
  const todoLeft = todos.filter(filters.active);
  return html`
    <footer class="footer">
      <span class="todo-count"
        ><strong>${todoLeft.length}</strong> item left</span
      >
      <ul class="filters">
        ${Object.keys(filters).map(
          (type) => html`
            <li>
              <a
                class="${filter === type && 'selected'}"
                href="#/"
                onclick="dispatch('switchFilter', '${type}')"
              >
                ${type[0].toUpperCase() + type.slice(1)}
              </a>
            </li>
          `
        )}
      </ul>
      ${todos.filter(filters.completed).length > 0 &&
      html`<button class="clear-completed" onclick="dispatch('clearCompleted')">
        Clear completed
      </button>`}
    </footer>
  `;
}

export default connector(Footer);
