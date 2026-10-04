// 2. Application State 
export const skillArray = [];
 
// 3. State Handler Functions
export const deleteskill = index => {
    skillArray.splice(index, 1);
    renderTasks(skillArray);
};

export const editskill = index => {
    skillInput.value = skillArray[index]
    addbtn.textContent = 'Update'
    editedId = index
}