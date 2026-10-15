const xhr = new XMLHttpRequest();

document.getElementById("loadConsoles").addEventListener("click", () => {
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            const retro = xhr.responseText
            console.log(retro)

            const retroObj = JSON.parse(retro)
            console.log(retroObj)
            console.log(retroObj.consoles)
            console.log(retroObj.consoles.length)
        }
    }
    xhr.send()
})

