let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
// retrieve leads data
const savedLeads = JSON.parse(localStorage.getItem("myLeads"));
console.log(savedLeads);

if (savedLeads) {
  myLeads = savedLeads;
  renderLeads();
}

// delete
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  // localstorage save leads
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
  inputEl.value = "";
});

// render leads in list format
function renderLeads() {
  // reset list to blank
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='${myLeads[i]}'>  
    ${myLeads[i]}
    </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}
