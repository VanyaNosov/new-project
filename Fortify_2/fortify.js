const Mac = document.getElementById("mac").addEventListener("click", (e) => { 
    if(navigator.platform === "MacIntel"){
        console.log(navigator.platform)
    }

    if(navigator.platform !== "MacIntel"){
        alert("это не твое дружок")
    }
});

const Win = document.getElementById("win").addEventListener("click", (e) => { 
    if(navigator.platform === "Win32"){
        console.log(navigator.platform)
    }

    if(navigator.platform !== "Win32"){
        alert("это не твое дружок");
    }
});