document.addEventListener("DOMContentLoaded", () => {
    let form = document.querySelector('#create-task-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      buildTask(e.target['new-task-description'].value);
    });
});

function buildTask (task) {
  let li = document.createElement('li')
  li.textContent = `${task} `
  document.querySelector('#tasks').appendChild(li)
}