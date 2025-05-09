let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

// retrieve leads data
const savedLeads = JSON.parse(localStorage.getItem("myLeads"));
console.log(savedLeads);

if (savedLeads) {
  myLeads = savedLeads;
  render(myLeads);
}

// save tab function
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);

    console.log(tabs[0].url);
    let grabbedUrl = tabs[0].url;
    myLeads.push(grabbedUrl);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

// render leads in list format
function render(leads) {
  // reset list to blank
  let listItems = "";

  for (let i = 0; i < leads.length; i++) {
    listItems += `<li>
    <a target='_blank' href='${leads[i]}'>  
    ${leads[i]}
    </a>
    </li>`;
  }
  ulEl.innerHTML = listItems;
}

// delete
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
  // localstorage save leads
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  inputEl.value = "";
});
