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


  const list = document.createElement("li");
  const btn = document.createElement("button");
  // list.classList.add("message");
  list.textContent = message.value;
  result.appendChild(list)
  result.appendChild(btn);
  btn.textContent = 'x';
  btn.addEventListener("click", function() {
    result.removeChild(list);
    result.removeChild(btn);
  })

  // result.innerText += message.value;
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


  const rand = Math.floor(Math.random() * 5);
  console.log(rand)
});

const losuj = document.getElementById("losuj");
const wynik = document.getElementById("wynik");

losuj.addEventListener("click", () => {
  let liczba = Math.floor(Math.random() * 100) + 1;
  wynik.textContent = `Wylosowano: ${liczba}`;
});

const lotto = document.getElementById("lotto");
const lottoResult = document.getElementById("lottoWynik");

lotto.addEventListener("click", () => {
  let lottoNumbers = [];
  while (lottoNumbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!lottoNumbers.includes(randomNumber)) {
      lottoNumbers.push(randomNumber);
    }
  }
  lottoResult.textContent = `Wylosowano: ${lottoNumbers.join(", ")}`;
});






