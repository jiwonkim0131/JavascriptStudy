// Q1.HTML생성

const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const render = todos => {
  /* Do something */
  let html = '';

  todos.forEach(todo => {
    const { id, content, completed } = todo;
    html += `
        <li id="${id}">
          <label><input type="checkbox" ${completed ? 'checked' : ''}> ${content}</label>
        </li>`;
  });

  return html;
};

// const render = todos => {
//   let html = '';
//   todos.forEach(todo => {
//     html += `<li id="${todo.id}">
//       <label><input type="checkbox"${todo.completed ? ' checked' : ''}>${
//       todo.content
//     }</label></li>`;
//   });

//   return html;
// };

console.log(render(todos));
