const serachInput = document.getElementById("searchInput");
const userList = document.getElementById("userList"); // must check the correct id 
let userData = [];

// fetch data from the API

async function fetchUsersData() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=20");
    const data = await res.json();
    userData = data.results;
    renderUsers(userData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// render the data to the DOM
function renderUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const div = document.createElement("div");
    div.className = "user-card";
    div.innerHTML = `
         <img src="${user.picture.medium}" alt="${user.name.first}">
        <div class='user-info'>
            <h3>${user.name.first} ${user.name.last} </h3>
            <p>${user.email}</p>
        </div>
        `;
    userList.appendChild(div);
  });
}

// filter the data based on the serach input 
serachInput.addEventListener('input',()=>{
    const value = serachInput.value.toLowerCase(); // convert to lowercase for case insensitive serach 
    const filtered = userData.filter( user => 
       user.name.first.toLowerCase().includes(value) ||
       user.name.last.toLowerCase().includes(value) || 
       user.email.toLowerCase().includes(value)

    );
    // understand that how to return from the filter 
    renderUsers(filtered);
    
})

fetchUsersData();
