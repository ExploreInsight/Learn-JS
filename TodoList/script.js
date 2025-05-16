// const input = document.getElementById('input');
// const list = document.getElementById('render-list');
// const btn = document.getElementById('button');

// const arrayList = [];

// const randomID = ()=>{
//     return crypto.randomUUID();
// }

// const render = () =>{
//     arrayList.map((data)=>{
//         const li = document.createElement('li');
//         li.innerText = data.data;
//         console.log(li.innerText)
//         li.setAttribute('id', data.id);
//         list.appendChild(li);
//     })
// }

// const handleClick = ()=>{
//     // e.preventDeafult();
//     if(!input.value) {
//         alert("Put some text in idiot   ");
//     }  
//     const obj = { id : randomID(), data: input.value} 
//     arrayList.push(obj);
//     console.log(arrayList,"Inside the click ")
//     input.value = "";
//     render()
    
// }
// console.log(arrayList)
// btn.addEventListener('click', handleClick);

const input = document.getElementById('input');
const list = document.getElementById('render-list');
const btn = document.getElementById('button');

let arrayList = [];

const randomID = () => crypto.randomUUID();

const render = () => {
  list.innerHTML = ''; // Clear previous list before rendering
  arrayList.forEach((item) => {
    const li = document.createElement('li');
    li.innerText = item.data;
    li.setAttribute('id', item.id);
    li.classList.add('todo-item'); // provided a class

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.innerText = '❌';
    delBtn.classList.add('delete-btn');
    delBtn.onclick = () => {
      arrayList = arrayList.filter(todo => todo.id !== item.id);
      render();
    };

    li.appendChild(delBtn);
    list.appendChild(li);
  });
};

const handleClick = () => {
  if (!input.value.trim()) {
    alert("Please enter a task.");
    return;
  }

  const obj = { id: randomID(), data: input.value.trim() };
  arrayList.push(obj);
  input.value = "";
  render(); // Re-render updated list
};

btn.addEventListener('click', handleClick);

// Optional: Pressing "Enter" adds the todo too
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleClick();
});
