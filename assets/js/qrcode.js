const codes = [
    "geopjr",
    "granz",
    "music",
    "soft-wet"
]

const img = document.getElementById("qr");
img.src= "./assets/imgs/" + codes[Math.floor(Math.random() * codes.length)] + ".svg"
