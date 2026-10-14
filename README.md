# WD2-RetroGamingConsole

---

My example (index.html)

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="app.js" defer></script>
</head>
<body>
    <h1>Dog API's</h1>
    <div></div>
    <button id="getDogs">Get Dogs</button>
</body>
</html>

---

My example (app.js)

let httpRequest = new XMLHttpRequest()

document.getElementById("getDogs").addEventListener("click", () => {
    console.log("After open", httpRequest.readyState)

    httpRequest.open("GET", "https://dog.ceo/api/breeds/image/random")
    console.log("After open", httpRequest.readyState)

    httpRequest.onreadystatechange = trackChanges
    httpRequest.send()
})

function trackChanges() {
    console.log("readyState", httpRequest.readyState)

    if (httpRequest.readyState === 2) {
        console.log("Headers recieved")
    }
    if (httpRequest.readyState === 3) {
        console.log("Loading response...")
    }
    if (httpRequest.readyState === 4) {
        console.log("Request complete")

        if (httpRequest.status == 200) {
            const dog = httpRequest.responseText
            console.log(dog)

            const dogObj = JSON.parse(dog)
            console.log(dogObj)

            console.log(dogObj.message)
            // document.getElementById("dogImg").src = dogObj.message

            const theDiv = document.querySelector("div")
            theDiv.innerHTML = ""

            const dogImg = document.createElement("img")
            dogImg.src = dogObj.message
            dogImg.width = 200
            theDiv.append(dogImg)
        }
    }
}

---
