let LastScrollY = 170
window.addEventListener("scroll", () => {
    if(LastScrollY < window.scrollY) {
        document.querySelectorAll('.scroll').forEach((result) => { result.classList.add('active'); })
        document.querySelectorAll('.nick-scroll').forEach((result) => { result.classList.add('nick-scroll-on');})
        document.querySelectorAll('.img-scroll').forEach((result) => { result.classList.add('img-scroll-on');})

        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.add('button-scroll-on');})

        document.querySelectorAll('.size-fix').forEach((result) => { result.classList.add('size-fix-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.add('dst-on');})

        document.querySelectorAll('.animate').forEach((result) => { result.classList.add('animate-bur-on');})
    } else { 
        document.querySelectorAll('.scroll').forEach((result) => { result.classList.remove('active');})
        document.querySelectorAll('.nick-scroll').forEach((result) => { result.classList.remove('nick-scroll-on');})
        document.querySelectorAll('.img-scroll').forEach((result) => { result.classList.remove('img-scroll-on');})
    
        document.querySelectorAll('.button-scroll').forEach((result) => { result.classList.remove('button-scroll-on');})

        document.querySelectorAll('.size-fix').forEach((result) => { result.classList.remove('size-fix-on');})
        document.querySelectorAll('.dst').forEach((result) => { result.classList.remove('dst-on');})
    
        document.querySelectorAll('.animate').forEach((result) => { result.classList.remove('animate-bur-on');})
    }
})

function Pop() {
    document.querySelectorAll('.Pop-Exit').forEach((result) => {result.classList.toggle('Pop-out');})
    document.querySelectorAll('.Status-Ani').forEach((result) => {result.classList.toggle('Status-Animated');})
    document.querySelectorAll('.scr-fr').forEach((result) => {result.classList.toggle('scroll-frost');})

    document.querySelectorAll('.Pop-VS-O').forEach((result) => {result.classList.remove('Pop-VS-Out')})
    document.querySelectorAll('.Pop-Git-O').forEach((result) => {result.classList.remove('Pop-Git-Out')})
    document.querySelectorAll('.Pop-Fig-O').forEach((result) => {result.classList.remove('Pop-Fig-Out')})
    document.querySelectorAll('.Pop-HTML-O').forEach((result) => {result.classList.remove('Pop-HTML-Out')})
    document.querySelectorAll('.Pop-CSS-O').forEach((result) => {result.classList.remove('Pop-CSS-Out')})
    document.querySelectorAll('.Pop-JS-O').forEach((result) => {result.classList.remove('Pop-JS-Out')})
    document.querySelectorAll('.Pop-PY-O').forEach((result) => {result.classList.remove('Pop-PY-Out')})
    document.querySelectorAll('.Pop-SQL-O').forEach((result) => {result.classList.remove('Pop-SQL-Out')})
    document.querySelectorAll('.Pop-Fr-O').forEach((result) => {result.classList.remove('Pop-Fr-Out')})

    document.querySelectorAll('.Pop-Office-O').forEach((result) => {result.classList.remove('Pop-Office-Out')})
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
function PopOffice() {document.querySelectorAll('.Pop-Office-O').forEach((result) => {result.classList.add('Pop-Office-Out')})}
