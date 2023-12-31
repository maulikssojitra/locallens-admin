const toggleBtn = document.getElementById('toggleButton');
const sidebar = document.querySelector('.sidebar');
const mainContent = document.getElementById('main_content');
const overlay = document.getElementById('overlay')
const body = document.getElementById('body')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainContent.classList.toggle('active')
    if (window.innerWidth <= 1200) {
        overlay.classList.add('d-block')
        body.classList.add('overflow-hidden')
        overlay.classList.remove('d-none')
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth <= 1200) {
        sidebar.classList.remove('active');
        mainContent.classList.remove('active')
        overlay.classList.add('d-none')
        overlay.classList.remove('d-block')
        body.classList.remove('overflow-hidden')
    }
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    mainContent.classList.remove('active');
    overlay.classList.add('d-none')
    overlay.classList.remove('d-block')
    body.classList.remove('overflow-hidden')
});


var elem = document.getElementById("body");
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}


// loader
document.addEventListener("DOMContentLoaded", function () {
    // Hide the loader when the page finishes loading
    setTimeout(function () {
        document.querySelector(".loader").classList.add("hidden");
    }, 1000); // Adjust the delay as needed
});