const cursor = document.getElementById("cursor");
const random1 = document.getElementById("random1"),
    random2 = document.getElementById("random2"),
    random3 = document.getElementById("random3"),
    random4 = document.getElementById("random4"),
    random5 = document.getElementById("random5"),
    random6 = document.getElementById("random6"),
    random7 = document.getElementById("random7"),
    random8 = document.getElementById("random8");
const links = document.querySelectorAll(".interest");

const handleCursorHover = (element, addClass) => {
    element.addEventListener("mouseover", () =>
        cursor.classList[addClass]("on-interest")
    );
    element.addEventListener("mouseout", () =>
        cursor.classList.remove("on-interest")
    );
};

links.forEach((link) => handleCursorHover(link, "add"));


window.onmousemove = function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const cursorWidth = cursor.offsetWidth;
    const cursorHeight = cursor.offsetHeight;

    cursor.style.left = mouseX - cursorWidth / 2 + "px";
    cursor.style.top = mouseY - cursorHeight / 2 + "px";
};

let randomPick = (ar) => {
    return ar[Math.floor(Math.random() * ar.length)];
}


let randomizeWord = () => {
    let str = "";
    let ar = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890".split("");
    return [randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar), randomPick(ar)].join("");
}

setInterval(() => {
    random1.innerText = randomizeWord();
    random2.innerText = randomizeWord();
    random3.innerText = randomizeWord();
    random4.innerText = randomizeWord();
    random5.innerText = randomizeWord();
    random6.innerText = randomizeWord();
    random7.innerText = randomizeWord();
    random8.innerText = randomizeWord();
}, 100);



const audio = document.getElementById("dead-voxel");
const button = document.getElementById("volume-control-img");

audio.currentTime = 66;

let isMuted = true;

button.addEventListener("click", () => {
    if (isMuted) {
        audio.muted = false;
        button.style.opacity = "1";
        isMuted = false;
    } else {
        audio.muted = true;
        button.style.opacity = "0.5";
        isMuted = true;
    }
});

button.addEventListener("click", function() {
    if (audio.paused) {
        audio.play().then(() => {
            console.log("Audio played successfully.");
        }).catch((error) => {
            console.error("Error playing audio:", error);
        });
    } else {
        audio.pause();
    }
});

const buffer1 = document.getElementById("buffer-1");
const originalInterface = document.getElementById("original-interface");

if (buffer1 && originalInterface) {
    buffer1.addEventListener("mouseover", () => {
        console.log("Mouse over event triggered on buffer");
        buffer1.querySelector("a").click();
    });

    buffer1.addEventListener("click", () => {
        console.log("Click event triggered on buffer");
        originalInterface.scrollIntoView({ behavior: "smooth" });
    });
} else {
    console.log("One or both elements not found.");
}

const buffer2 = document.getElementById("buffer-2");
const theDream = document.getElementById("original-interface");

if (buffer2 && theDream) {
    buffer2.addEventListener("mouseover", () => {
        console.log("Mouse over event triggered on buffer");
        buffer2.querySelector("a").click();
    });

    buffer2.addEventListener("click", () => {
        console.log("Click event triggered on buffer");
        theDream.scrollIntoView({ behavior: "smooth" });
    });
} else {
    console.log("One or both elements not found.");
}


const buttons = document.querySelectorAll(".button");
const click = document.getElementById("click");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        click.currentTime = 0;
        click.play();


        button.classList.add("clicked");


        setTimeout(() => {
            button.classList.remove("clicked");
        }, 200);
    });
});

const msg = document.querySelectorAll('.msg');
    let currentMessageIndex = 0;
    const typingAudio = document.getElementById('typing');
    typingAudio.volume = 0.25;
    let animationTriggered = false;

    function animateMessage() {
        if (currentMessageIndex < msg.length) {
            const currentMessage = msg[currentMessageIndex];
            currentMessage.style.display = 'flex';

            const text = currentMessage.querySelector('span').textContent;
            let currentIndex = 0;

            const typingInterval = setInterval(() => {
                const currentText = text.substring(0, currentIndex + 1);
                currentMessage.querySelector('span').textContent = currentText;
                currentIndex++;

                if (currentIndex === text.length) {
                    clearInterval(typingInterval);
                    currentMessageIndex++;
                    setTimeout(() => {
                        animateMessage();
                    }, 1000);
                }

                typingAudio.currentTime = 0;
                typingAudio.play();
            }, 25); 
        }
    }

    function handleMouseEnter() {
        if (!animationTriggered) {
            animateMessage();
            animationTriggered = true;
        }
    }

    const chatWindow = document.getElementById('chat-window');
    chatWindow.addEventListener('mouseenter', handleMouseEnter);

    const wakeUpDiv = document.querySelector(".wake-up");
    const wakeUpScreen = document.querySelector(".mask-screen");


    wakeUpDiv.addEventListener("mouseenter", () => {
        wakeUpScreen.style.animation = "slide 12s cubic-bezier(0.61, 1, 0.88, 1) forwards";
    });