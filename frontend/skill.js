// 1. DOM Selections

const form = document.getElementById('form-to-fill');
const skillInput = document.getElementById('skillInput');
const addbtn = document.querySelector('.addbtn')
let editedId = null


import  {skillArray, deleteskill, editskill} from "./state.js"
import renderTasks from "./render.js";


// 4. Event Listeners
form.addEventListener('submit', event => {
    event.preventDefault();
    const newSkill = skillInput.value.trim();

    if (newSkill === '') {
        alert('Please enter a skill');
        return;
    }
    if (editedId === null) {
        skillArray.push(newSkill);
    } else {
        skillArray[editedId] = newSkill
        editedId = null
        addbtn.textContent = 'Submit'
    }

    skillInput.value = '';
    renderTasks(skillArray);
});

// 5. Initial Render Call
renderTasks(skillArray);


// const fetchInitialTasks = async () => {

//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=3`)
//         if (!response.ok) {
//             throw new Error(`HTTP Error! Status: ${response.status}`)
//         }
//         const datas = await response.json()
//         const serverTasks = datas.map(data => data.title)

//         serverTasks.forEach(task => skillArray.push(task))
//         renderTasks(skillArray)
//     } catch (err) {
//         console.error('Fetch Error:', err.message);
//         container.innerHTML = `<li class="error-msg">Failed to load tasks from server. Please refresh!</li>`;
//     }
// }

// fetchInitialTasks()
