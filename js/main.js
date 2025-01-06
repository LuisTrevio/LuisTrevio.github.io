let LastScrollY = 170
window.addEventListener("scroll", () => {
    if(LastScrollY < window.scrollY) {

        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.add('button-scroll-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.add('dst-on');})

        document.querySelectorAll('.animate').forEach((result) => { result.classList.add('animate-bur-on');})
    } else { 
        
        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.remove('button-scroll-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.remove('dst-on');})
    
        document.querySelectorAll('.animate').forEach((result) => { result.classList.remove('animate-bur-on');})
    }
})//Empieza a contar el scroll y activa las animaciones en el menú

//cuando se desplaza hacia abajo, el menu se ateunúa
let LastScrollY2 = 0
window.addEventListener("scroll", () => {
    if(LastScrollY2 < window.scrollY) {
        document.querySelectorAll('.alert-dunot').forEach((result) => { result.classList.add('alert-donot');})
    }
    else {
        document.querySelectorAll('.alert-dunot').forEach((result) => { result.classList.remove('alert-donot');})
    }
})

//Menu en Dispositivos Móviles
function Dash() {
    const toggleClasses = [
        ['.menu-dash-up', 'menu-up'],
        ['.scr-fr', 'scroll-frost'],
        ['.bar-1', 'bur-1-up'],
        ['.bar-2', 'bur-2-up'],
        ['.bar-3', 'bur-3-up'],
        ['.box-up', 'box-tool-up'],
        ['.grid-up', 'grid-tool-up'],
        ['.select-up', 'select-ani-up'],
        ['.music-up', 'music-dash-up']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });
}

//PopUp o Ventana Modal
function Pop() {
    const toggleClasses = [
        ['.Pop-Exit', 'Pop-out'],
        ['.Status-Ani', 'Status-Animated'],
        ['.scr-fr', 'scroll-frost'],
        ['.close-up', 'Pop-Close-Up']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out',
        'Pop-Office-Out', 'Pop-Mail-Out', 'Pop-Flex-Out', 'Pop-Magic-Out', 'Pop-Waltz-Out', 'Pop-Tech-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });

    document.querySelector('.Pop-Waltz').scrollTop = 0;
    document.querySelector('.Pop-Tech').scrollTop = 0;
}

//PopUp de las Habilidades
const popFunctions = [
    ['PopVS', 'Pop-VS-O', 'Pop-VS-Out'],
    ['PopGit', 'Pop-Git-O', 'Pop-Git-Out'],
    ['PopFig', 'Pop-Fig-O', 'Pop-Fig-Out'],
    ['PopHTML', 'Pop-HTML-O', 'Pop-HTML-Out'],
    ['PopCSS', 'Pop-CSS-O', 'Pop-CSS-Out'],
    ['PopJS', 'Pop-JS-O', 'Pop-JS-Out'],
    ['PopPY', 'Pop-PY-O', 'Pop-PY-Out'],
    ['PopSQL', 'Pop-SQL-O', 'Pop-SQL-Out'],
    ['PopFr', 'Pop-Fr-O', 'Pop-Fr-Out'],
    ['PopAs', 'Pop-As-O', 'Pop-As-Out'],
    ['PopOffice', 'Pop-Office-O', 'Pop-Office-Out'],
    ['PopMail', 'Pop-Mail-O', 'Pop-Mail-Out'],
    ['PopWaltz', 'Pop-Waltz-O', 'Pop-Waltz-Out'],
    ['PopTech', 'Pop-Tech-O', 'Pop-Tech-Out']
];

popFunctions.forEach(([funcName, selector, className]) => {
    window[funcName] = () => {
        document.querySelectorAll(`.${selector}`).forEach(result => {
            result.classList.add(className);
        });
    };
});

//PopUp de las Habilidades pero de Omitir
function Ommit() {
    const classesToRemove = [
        'Pop-VS-Out', 'Pop-Git-Out', 'Pop-Fig-Out', 'Pop-HTML-Out', 'Pop-CSS-Out',
        'Pop-JS-Out', 'Pop-PY-Out', 'Pop-SQL-Out', 'Pop-Fr-Out', 'Pop-As-Out'
    ];

    classesToRemove.forEach(className => {
        document.querySelectorAll(`.${className.replace('-Out', '-O')}`).forEach(result => {
            result.classList.remove(className);
        });
    });
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && document.querySelector('.Pop-Exit.Pop-out')) {
        Pop();
    }
});

function PopFlex() {document.querySelectorAll('.Pop-Flex-O').forEach((result) => {result.classList.add('Pop-Flex-Out')})}
function PopMagic() {document.querySelectorAll('.Pop-Magic-O').forEach((result) => {result.classList.add('Pop-Magic-Out')})}

const rightButtons = Array.from(document.getElementsByClassName('slider-right'));
const leftButtons = Array.from(document.getElementsByClassName('slider-left'));
const containers = Array.from(document.getElementsByClassName('reel-screenshots'));

let index = 0;
for (const rightButton of rightButtons) {
    const container = containers[index];
    rightButton.addEventListener("click", function () {
        container.scrollLeft += 150;
    });
    index++;
}

index = 0;
for (const leftButton of leftButtons) {
    const container = containers[index];
    leftButton.addEventListener("click", function () {
        container.scrollLeft -= 150;
    });
    index++;
    
}

containers.forEach(container => {
    const leftButton = container.previousElementSibling;
    leftButton.disabled = true;
    leftButton.classList.add('icon-o-left');
});


containers.forEach(container => {
    container.addEventListener("scroll", function () {
        const rightButton = container.nextElementSibling;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            rightButton.disabled = true;
            rightButton.classList.add('icon-o-right');
        } else {
            rightButton.disabled = false;
            rightButton.classList.remove('icon-o-right');
        }
    });
});

containers.forEach(container => {
    container.addEventListener("scroll", function () {
        const leftButton = container.previousElementSibling;
        if (container.scrollLeft === 0) {
            leftButton.disabled = true;
            leftButton.classList.add('icon-o-left');
        } else {
            leftButton.disabled = false;
            leftButton.classList.remove('icon-o-left');
        }
    });
});


document.querySelectorAll(".email-button").forEach(CopyButton => {
    CopyButton.addEventListener("click", () => {
        const targetElement = document.querySelector(CopyButton.dataset.copy);
        const Text2Copy = targetElement.textContent
        .replace(/\s+/g, " ")
        .trim();

        navigator.clipboard.writeText(Text2Copy).then(() => {
            document.querySelectorAll('.button-ar').forEach((result) => {result.classList.add('button-air')})
            CopyButton.disable = true;
            setTimeout (() => {
            CopyButton.disable = false;
            document.querySelectorAll('.button-ar').forEach((result) => {result.classList.remove('button-air')})
            }, 2000); 
        })
    })
})

const audio = new Audio('music/hamster.mp3');

function Play() {
    const toggleClasses = [
        ['.Play', 'Play-Stop'],
        ['.Stop', 'Stop-Play']
    ];

    toggleClasses.forEach(([selector, className]) => {
        document.querySelectorAll(selector).forEach(result => result.classList.toggle(className));
    });

    if (audio.paused) {
        audio.play();
        document.querySelector('.music-progress-bar').style.animation = 'progress 3s linear infinite';
        document.querySelectorAll('.Play-i').forEach((result) => {result.classList.add('icon-pause') , result.classList.remove('icon-play')})
        document.querySelectorAll('.gradient-s').forEach((result) => {result.classList.remove('gradient-loading')})
    } else {
        audio.pause();
        document.querySelector('.music-progress-bar').style.animation = 'none';
        document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')}) 
    }
}

function Volume() {
    document.querySelectorAll('.Volume-stop').forEach((result) => {result.classList.toggle('volume-colapse')});
    document.querySelectorAll('.Volume-i').forEach((result) => {result.classList.toggle('volume-hover')});
}

document.addEventListener('click', function(event) {
    if (!event.target.closest('.music')) {
        document.querySelectorAll('.Volume-stop').forEach((result) => {result.classList.remove('volume-colapse')});
        document.querySelectorAll('.Volume-i').forEach((result) => {result.classList.remove('volume-hover')});
    }
});

audio.addEventListener('pause', () => {
    document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')})
    document.querySelectorAll('.gradient-s').forEach((result) => {result.classList.add('gradient-loading')})
});

audio.addEventListener('ended', () => {
    document.querySelectorAll('.Play-i').forEach((result) => {result.classList.remove('icon-pause'), result.classList.add('icon-play')})
    document.querySelector('.music-progress-bar').style.animation = 'none';
});

const progress = document.querySelector('.music-progress-bar');
const playerProgress = document.querySelector('.music-progress');

audio.addEventListener('timeupdate', () => {
    const { currentTime, duration } = audio;
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    const minutesDuration = Math.floor(duration / 60);
    const secondsDuration = Math.floor(duration % 60);
    document.querySelector('.music-time').textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.querySelector('.music-duration').textContent = `${minutesDuration}:${secondsDuration < 10 ? '0' + secondsDuration : secondsDuration}`;
});

function updateProgressBar() {
    const { currentTime, duration } = audio;
    const percentage = audio.currentTime / audio.duration * 100;
    progress.style.width = `${percentage}%`;
}

function setProgressBar(e) {
    const width = playerProgress.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}

const volumeProgress = document.querySelector('.volume-progress-bar');
const volumePlayerProgress = document.querySelector('.volume-progress');

function updateVolumeProgressBar() {
    const percentage = audio.volume * 100;
    volumeProgress.style.width = `${percentage}%`;
}

function setVolumeProgressBar(e) {
    const width = volumePlayerProgress.clientWidth;
    const clickX = e.offsetX;
    audio.volume = clickX / width;
}

audio.volume = 0.7;

volumePlayerProgress.addEventListener('click', setVolumeProgressBar);
audio.addEventListener('volumechange', updateVolumeProgressBar);


playerProgress.addEventListener('click', setProgressBar);
audio.addEventListener('timeupdate', updateProgressBar);

function Back() {
    audio.currentTime -= 10;
}
