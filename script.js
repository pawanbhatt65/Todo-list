const add_todo = () => {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;

  let todos = [];

  // It is string type value
  let localTodos = localStorage.getItem("todos"); // first time set todo

  if (localTodos != null) {
    todos = JSON.parse(localTodos); // localTodos is string type dataType then firstly it convert array with json.parse() method
  }

  let todoObject = {
    title: title,
    desc: desc,
    id: Math.trunc(Math.random() * 1000),
  };

  todos.push(todoObject);

  // localStorage.setItem(key, value);
  localStorage.setItem("todos", JSON.stringify(todos));

  show_todo();
};

// display todo in front-end
const show_todo = () => {
  let todoString = localStorage.getItem("todos");

  let content = "";
  if (todoString == null) {
    content += "<h3>NO TODO SHOW</h3>";
  } else {
    let todos = JSON.parse(todoString);
    for (let todo of todos.reverse()) {
      content += `
                <div class="card mt-2">
                    <div class="card-body">
                        <h3>${todo.title}</h3>
                        <p>${todo.desc}</p>
                    </div>
                </div>
            `;
    }
  }
  document.getElementById("main-content").innerHTML = content;
};
show_todo();
