function rollDice() {
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    const randomRoll = Math.floor(Math.random() * 6);
    document.getElementById("dice").textContent = diceFaces[randomRoll];
}

window.onload = rollDice; // Roll dice when page loads

var lastModified = document.lastModified;
document.getElementById("modified").innerHTML = lastModified;