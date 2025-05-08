let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  renderLeads();
  inputEl.value = "";
});

// render leads in list format
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li><a target=_blank href=${myLeads[i]} </a>${myLeads[i]}</li>`;
  }
  ulEl.innerHTML = listItems;
}
