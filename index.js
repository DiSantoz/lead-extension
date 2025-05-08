let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
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
  for (let i = 0; i < myLeads.length; i++) {
    const liEl = document.createElement("li");
    liEl.textContent = myLeads[i];
    ulEl.appendChild(liEl);
  }
}
