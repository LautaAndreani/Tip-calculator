const billNumber = document.getElementById("bill");
const porcent = document.querySelectorAll(".btns__tips");
const people = document.getElementById("totalPeople");
const tipTotal = document.getElementById("totalTip");
const total = document.getElementById("totalPerson");
const btn = document.querySelector(".total__btn");
const totalFinally = document.getElementById("totalPersonTip");

function mount() {
  valueTotal(billNumber, people);
}

mount();

function valueTotal(value1, value2) {
  value1.onchange = () => {
    value1.value;
  };
  value2.onchange = () => {
    value2.value;
    resultPerson();
  };
  function resultPerson() {
    const answer = parseInt(value1.value) / parseInt(value2.value);
    total.innerHTML = `$ ${answer.toFixed(2)}`;
    if (total.innerHTML == "$ NaN") {
      total.innerHTML = "$ 0";
    }
    for (let i = 0; i < porcent.length; i++) {
      porcent[i].addEventListener("click", () => {
        const inputBtn = parseFloat(porcent[i].innerText);
        const totalPorcent = (answer * inputBtn) / 100;
        tipTotal.innerHTML = `$ ${totalPorcent.toFixed(2)}`;
        const finallyAccount = answer + totalPorcent;
        totalFinally.innerHTML = `$ ${finallyAccount.toFixed(2)}`;
      });
    }
  }
}

btn.onclick = () => {
  billNumber.value = "0";
  people.value = "0";
  total.innerHTML = "$0";
  tipTotal.innerHTML = "$0";
  totalFinally.innerHTML = "$0";
};
