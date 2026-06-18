const input = document.getElementById("itemInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");

button.addEventListener("click", function() {



  const itemText = input.value;
  if (input.value === "") {
    alert("podaj zadanie");

  }
else{
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

  }

});


const answerBtn = document.getElementById("sendBtn");
const message = document.getElementById("messageInput");
const result = document.querySelector(".message");

answerBtn.addEventListener("click", function() {

  result.innerText += message.value;
  console.log(message.value);
  message.value = "";
});


const randomAnswer = document.getElementById("randomAnswerBtn");
const chat = document.getElementById("chat");
const randoms = [
  "odp 1", "odp 2", "odp 3", "odp 4", "odp 5",
  "odp 6", "odp 7", "odp 8", "odp 9", "odp 10",
];

randomAnswer.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * randoms.length);
  const randomItem = randoms[randomIndex];

  console.log(randomIndex, randomItem);
  chat.textContent = randomItem; // or innerHTML, depending on your needs
});


