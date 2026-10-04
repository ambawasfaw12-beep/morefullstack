
const developerProfile = {
    name: 'Yospeh Ambaw',
    role: 'Software Engineer',
    completedProject: [101, 102, 103],
    isEmployed: false
}

const skills = ['html5', 'css3', 'flexbox', 'grid']

const header = document.getElementById('header')
header.textContent = `Portfolio of ${developerProfile.name}`

const skillContainer = document.querySelector('.skill-list')

const renderSkills = skillList => {
    const content = skillList.map(skill => `<li>${skill.toUpperCase()}</li>`).join('')
    skillContainer.innerHTML = content
}

renderSkills(skills)

const registrationForm = document.querySelector('.registration-form')
const addedskill = document.getElementById('fullName')
registrationForm.addEventListener('submit', event =>{
  event.preventDefault()
  const newSkill = addedskill.value
  if(newSkill === ''){
    alert ('add the form ')
    return
  }
  skills.push(newSkill)
  addedskill.value = ''
  renderSkills(skills)
})




// const getCompletedCount = profile => {
//     return profile.completedProject.length
// }

// const listSkillsUpper = skillsArray =>{
// const toUppre = skillsArray.map(skill =>{
//     return skill.toUpperCase()
// })

// return toUppre
// }

// console.log(getCompletedCount(developerProfile))
// console.log(listSkillsUpper(skills))



// const studentName = 'Yoseph'
// const targetYear = 2026
// let isGraduated = false
// const skills = ['html5', 'css3', 'flexbox', 'grid']
// const complatedModule = 2

// const checkReadiness = (moduleCompleted, hasProject= false) =>{
// if(moduleCompleted >=5 && hasProject === true){
//   return "Job-Ready"
// }
// else if(moduleCompleted >=2) {
//  return "In Training"
// }
// else{
//     return "Beginner"
// }
// }

// const formatSkillBadge = skillName =>{
//   return `[Skill: ${skillName.toUpperCase()}]`
// }


// console.log(checkReadiness(3, true))
// console.log(formatSkillBadge("javascript"))





// const userRole = "3";
// if (userRole === 3) {
//     console.log("Access Granted");
// } else {
//     console.log("Access Denied: Type Mismatch");
// }

// const calculatePoints = function(score, multiplier) {
//     return score * multiplier;
// };

// console.log(calculatePoints(20, 40))
