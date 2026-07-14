const drumButtons = document.querySelectorAll(".drum");

const soundMap = {
    w: "crash",
    a: "snare",
    s: "tom-4",
    d: "kick-bass",
    j: "tom-3",
    k: "tom-1",
    l: "tom-2"
};

function playSound(key) {
    const file = soundMap[key];
    if (!file) return;

    const audio = new Audio(`/sounds/${file}.mp3`);
    audio.play();

    const button = document.getElementById(key);
    button.classList.add("pressed");
    setTimeout(() => button.classList.remove("pressed"), 100);
}

// Click support
drumButtons.forEach(button => {
    button.addEventListener("click", () => {
        playSound(button.id);
    });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
    playSound(event.key.toLowerCase());
});