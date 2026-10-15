const xhr = new XMLHttpRequest();
const err = document.getElementById("errAndLoad")

document.getElementById("loadConsoles").addEventListener("click", () => {
    xhr.open("GET", "https://ozarktechwebdev.com/api/consoles.json")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 2) {
            console.log("Headers recieved")
            err.textContent = "Headers recieved"
        }
        if (xhr.readyState === 3) {
            console.log("Loading response...")
            err.textContent = "Loading response..."
        }
        if (xhr.readyState === 4) {
            console.log("Request complete")
            err.textContent = ""
        }
        if (xhr.readyState == 4 && xhr.status == 200) {
            const retro = xhr.responseText
            console.log(retro)

            const retroObj = JSON.parse(retro)
            console.log(retroObj)
            console.log(retroObj.consoles)
            console.log(retroObj.consoles.length)

            const theDiv = document.querySelector("div")
            theDiv.innerHTML = ""

            for (let i = 1; i < retroObj.consoles.length; i++) {
                const card = document.createElement("div")
                card.className = "card"

                const retroImg = document.createElement("img")
                retroImg.src = retroObj.consoles[i].image
                retroImg.alt = retroObj.consoles[i].name
                retroImg.width = 200
                card.appendChild(retroImg)

                const container = document.createElement("div")
                container.className = "container"

                const retroName = document.createElement("h2")
                retroName.textContent = retroObj.consoles[i].name
                const retroText = document.createElement("p")
                retroText.textContent = `${retroObj.consoles[i].manufacturer} • ${retroObj.consoles[i].year}`

                container.appendChild(retroName)
                container.appendChild(retroText)

                card.appendChild(container)
                theDiv.appendChild(card)
            }

            let oldest = retroObj.consoles[0]
            let newest = retroObj.consoles[0]

            for (let i = 1; i < retroObj.consoles.length; i++) {
                const currentConsole = retroObj.consoles[i]
                if (currentConsole.year < oldest.year) {
                    oldest = currentConsole
                }
                if (currentConsole.year > newest.year) {
                    newest = currentConsole
                }
            }

            console.log("Oldest Console:", oldest.name, oldest.year)
            console.log("Newest Console:", newest.name, newest.year)

            const sum = document.getElementById("summary")
            const bold = document.createElement("b")
            bold.textContent = `8 consoles · Oldest: ${oldest.name} (${oldest.year}) · Newest: ${newest.name} (${newest.year})`
            sum.appendChild(bold)
        } else {
            err.textContent = "404. SERVER FILE NOT FOUND."
        }
    }
    xhr.send()
})

