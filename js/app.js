const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");

button.addEventListener("click", function() {

  const itemText = input.value;

  const li = document.createElement("li");
  const btn = document.createElement("button");

  li.textContent = itemText;
  btn.textContent = 'wykonane';
  list.appendChild(li);
  li.appendChild(btn);

  btn.addEventListener("click", function() {
  li.style.textDecoration = 'line-through';
  // list.removeChild(li);
  })

  input.value = "";
});
