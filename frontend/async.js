// console.log("1. Fetching user data...")

// setTimeout(() => {
//     console.log("2. User data retrieved successfully!")
// }, 3000)

// console.log("3. Render page navigation menu.")

// fetch(`https://jsonplaceholder.typicode.com/posts/1`)
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data.title)
//     })
//     .catch(err => {
//         console.log(err)
//     })

const getPost = async () => {
    try {

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        if(!response.ok){
            throw new Error(`http Error! Status:${response.status}`)
        }
        const data = await response.json()
        console.log(data.title)
    } catch (err) {
        console.log(err)
    }
}

getPost()