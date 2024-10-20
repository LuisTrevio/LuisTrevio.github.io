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
})

function Dash() {
    document.querySelectorAll('.menu-dash-up').forEach((result) => {result.classList.toggle('menu-up');})
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})

    document.querySelectorAll('.bar-1').forEach((result) => {result.classList.toggle('bur-1-up');})
    document.querySelectorAll('.bar-2').forEach((result) => {result.classList.toggle('bur-2-up');})
    document.querySelectorAll('.bar-3').forEach((result) => {result.classList.toggle('bur-3-up');})

    document.querySelectorAll('.box-up').forEach((result) => {result.classList.toggle('box-tool-up');})
    document.querySelectorAll('.grid-up').forEach((result) => {result.classList.toggle('grid-tool-up');})
    document.querySelectorAll('.select-up').forEach((result) => {result.classList.toggle('select-ani-up');})
}

function Pop() {
    document.querySelectorAll('.Pop-Exit').forEach((result) => {result.classList.toggle('Pop-out');})
    document.querySelectorAll('.Status-Ani').forEach((result) => {result.classList.toggle('Status-Animated');})
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})
    document.querySelectorAll('.close-up').forEach((result) => {result.classList.toggle('Pop-Close-Up');})

    document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.remove('Pop-VS-Out')})
    document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.remove('Pop-Git-Out')})
    document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.remove('Pop-Fig-Out')})
    document.querySelectorAll('.Pop-HTML-O').forEach((result) => {result.classList.remove('Pop-HTML-Out')})
    document.querySelectorAll('.Pop-CSS-O').forEach((result) => {result.classList.remove('Pop-CSS-Out')})
    document.querySelectorAll('.Pop-JS-O').forEach((result) => {result.classList.remove('Pop-JS-Out')})
    document.querySelectorAll('.Pop-PY-O').forEach((result) => {result.classList.remove('Pop-PY-Out')})
    document.querySelectorAll('.Pop-SQL-O').forEach((result) => {result.classList.remove('Pop-SQL-Out')})
    document.querySelectorAll('.Pop-Fr-O').forEach((result) => {result.classList.remove('Pop-Fr-Out')})
    document.querySelectorAll('.Pop-As-O').forEach((result) => {result.classList.remove('Pop-Astro-Out')})


    document.querySelectorAll('.Pop-Office-O').forEach((result) => {result.classList.remove('Pop-Office-Out')})
    document.querySelectorAll('.Pop-Mail-O').forEach((result) => {result.classList.remove('Pop-Mail-Out')})

    document.querySelectorAll('.Pop-Flex-O').forEach((result) => {result.classList.remove('Pop-Flex-Out')})
    document.querySelectorAll('.Pop-Magic-O').forEach((result) => {result.classList.remove('Pop-Magic-Out')})
    document.querySelectorAll('.Pop-Waltz-O').forEach((result) => {result.classList.remove('Pop-Waltz-Out')})
    document.querySelectorAll('.Pop-Tech-O').forEach((result) => {result.classList.remove('Pop-Tech-Out')})

    document.querySelector('.Pop-Waltz').scrollTop = 0;
    document.querySelector('.Pop-Tech').scrollTop = 0;
}

function PopVS() {document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.add('Pop-VS-Out')})}
function PopGit() {document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.add('Pop-Git-Out')})}
function PopFig() {document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.add('Pop-Fig-Out')})}
function PopHTML() {document.querySelectorAll('.Pop-HTML-O').forEach((result) => {result.classList.add('Pop-HTML-Out')})}
function PopCSS() {document.querySelectorAll('.Pop-CSS-O').forEach((result) => {result.classList.add('Pop-CSS-Out')})}
function PopJS() {document.querySelectorAll('.Pop-JS-O').forEach((result) => {result.classList.add('Pop-JS-Out')})}
function PopPY() {document.querySelectorAll('.Pop-PY-O').forEach((result) => {result.classList.add('Pop-PY-Out')})}
function PopSQL() {document.querySelectorAll('.Pop-SQL-O').forEach((result) => {result.classList.add('Pop-SQL-Out')})}
function PopFr() {document.querySelectorAll('.Pop-Fr-O').forEach((result) => {result.classList.add('Pop-Fr-Out')})}
function PopAs() {document.querySelectorAll('.Pop-As-O').forEach((result) => {result.classList.add('Pop-Astro-Out')})}
function PopOffice() {document.querySelectorAll('.Pop-Office-O').forEach((result) => {result.classList.add('Pop-Office-Out')})}
function PopMail() {document.querySelectorAll('.Pop-Mail-O').forEach((result) => {result.classList.add('Pop-Mail-Out')})}
function PopWaltz() {document.querySelectorAll('.Pop-Waltz-O').forEach((result) => {result.classList.add('Pop-Waltz-Out')})}
function PopTech() {document.querySelectorAll('.Pop-Tech-O').forEach((result) => {result.classList.add('Pop-Tech-Out')})}

function Ommit() {
    document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.remove('Pop-VS-Out')})
    document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.remove('Pop-Git-Out')})
    document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.remove('Pop-Fig-Out')})
    document.querySelectorAll('.Pop-HTML-O').forEach((result) => {result.classList.remove('Pop-HTML-Out')})
    document.querySelectorAll('.Pop-CSS-O').forEach((result) => {result.classList.remove('Pop-CSS-Out')})
    document.querySelectorAll('.Pop-JS-O').forEach((result) => {result.classList.remove('Pop-JS-Out')})
    document.querySelectorAll('.Pop-PY-O').forEach((result) => {result.classList.remove('Pop-PY-Out')})
    document.querySelectorAll('.Pop-SQL-O').forEach((result) => {result.classList.remove('Pop-SQL-Out')})
    document.querySelectorAll('.Pop-Fr-O').forEach((result) => {result.classList.remove('Pop-Fr-Out')})
    document.querySelectorAll('.Pop-As-O').forEach((result) => {result.classList.remove('Pop-Astro-Out')})
}


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
