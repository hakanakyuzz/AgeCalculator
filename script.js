const input  = document.querySelector("input")
const button = document.querySelector("button")
const result = document.querySelector(".result")
input.max = new Date().toISOString().split("T")[0]

button.addEventListener("click", () => {
    let currentDate = new Date()
    let currentDay = currentDate.getDate()
    let currentMonth = currentDate.getMonth() + 1
    let currentYear = currentDate.getFullYear()

    let userBirthDate = new Date(input.value)
    let userDay = userBirthDate.getDate()
    let userMonth = userBirthDate.getMonth() + 1
    let userYear = userBirthDate.getFullYear()

    if (userDay>currentDay){
        currentDay+=31
        currentMonth--
    }
    if (userMonth>currentMonth){
        currentMonth+=12
        currentYear--
    }
    if(userDay>currentDay && userMonth>currentMonth){
        currentYear--
        currentMonth+=11
        currentDay+=31
    }
    result.innerText = `You have been alive for ` +
        (currentYear-userYear === 0 ? `` : `${currentYear-userYear} years, `) +
        (currentMonth-userMonth === 0 ? `` : `${currentMonth-userMonth} months and `) +
        `${currentDay-userDay} days.`
})