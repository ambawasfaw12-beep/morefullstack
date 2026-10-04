const container = document.querySelector('.container');

const renderTasks = skillsArray => {
    const skills = skillsArray.map((skill, index) => `
        <li>
            <span>${skill.toUpperCase()}</span>
            <button class="delete-btn" onclick="deleteskill(${index})">DELETE</button>
            <button class="edit-btn" onclick="editskill(${index})">EDIT</button>
        </li>
    `).join('');

    container.innerHTML = skills;
};

export default renderTasks