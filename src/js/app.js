const theme = document.getElementById('theme');
const body = document.body;


theme.onclick = () => {
    var theme = body.classList.contains("dark")
    if (theme === true) {
        body.classList.replace('dark', 'light');
    } else {
        body.classList.replace('light', 'dark');

    }
}
//

const pageOne = document.getElementById('one');
const pageTwo = document.getElementById('two');
const pageThree = document.getElementById('three');
const pageFour = document.getElementById('four');

const iamOne = document.getElementById('icHome');
const iamTwo = document.getElementById('icSkills');
const iamThree = document.getElementById('icProjects');
const iamFour = document.getElementById('icContact');

const home = document.getElementById('home');
const skills = document.getElementById('skills');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');

const nextPage = document.getElementById('nextPage')
//

let pageScrolled = false;

let pageCount = 0;
var count = 0;
var topReached = false;
var bottomReached = false;

//
const wheelEvent = new WheelEvent('wheel', { deltaY: 1 });




//
window.addEventListener("wheel", function (event) {
    var isAtTop = window.scrollY <= 1;
    var isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 1;

    if (isAtBottom && isAtTop) {

        if (event.deltaY < 0) {
            if (pageCount >= 0 && count > -4) {
                count--;

            }
            console.log("🚀 ~ file: app.js:59 ~ count", count)
        } else if (event.deltaY > 0) {
            if (pageCount < 3) {
                count++;
            }
            console.log("🚀 ~ file: app.js:64 ~ count", count)
        }

    } else {
        if (isAtTop) {
            if (!topReached) {
                topReached = true;
            }
            if (event.deltaY < 0) {
                if (pageCount > 0) {
                    count--;
                }
                console.log("Mouse wheel scrolled up at the top of the page. Count: " + count);
            } else {
                topReached = false;
                count = 0;
            }

        }
        if (isAtBottom) {
            if (!bottomReached) {
                bottomReached = true;
            }
            if (event.deltaY > 0) {
                if (pageCount < 3) {
                    count++;
                }
                console.log("Mouse wheel scrolled down at the bottom of the page. Count: " + count);
            } else {
                bottomReached = false;
                count = 0;
            }

        }
    }
    if (count > 1) {
        nextPage.classList.remove('hidden');
    } else {
        nextPage.classList.add('hidden');
    }

    while (count === 4) {
        pageCount++
        count = 0;
        pageScrolled = false;

    }
    if (pageCount > 0) {

        while (count === (-4)) {
            pageCount--
            count = 0;
            pageScrolled = false;
        }
    }


    if (pageCount === 0) {
        pageOne.classList.remove('hidden')

        pageTwo.classList.add('hidden')
        pageThree.classList.add('hidden')
        pageFour.classList.add('hidden')

        iamOne.classList.add('iamHere')
        iamTwo.classList.remove('iamHere')
        iamThree.classList.remove('iamHere')
        iamFour.classList.remove('iamHere')

    }

    if (pageCount === 1 && !pageScrolled) {
        pageOne.classList.add('hidden');
        pageThree.classList.add('hidden')
        pageFour.classList.add('hidden')
        nextPage.classList.add('hidden');

        pageTwo.classList.remove('hidden');
        window.scroll(0, 50);
        pageScrolled = true;

        iamOne.classList.remove('iamHere')
        iamTwo.classList.add('iamHere')
        iamThree.classList.remove('iamHere')
        iamFour.classList.remove('iamHere')
    }
    if (pageCount === 2 && !pageScrolled) {
        pageOne.classList.add('hidden');
        pageTwo.classList.add('hidden')
        pageFour.classList.add('hidden')
        nextPage.classList.add('hidden');

        pageThree.classList.remove('hidden');
        window.scroll(0, 50);
        pageScrolled = true;

        iamOne.classList.remove('iamHere')
        iamTwo.classList.remove('iamHere')
        iamThree.classList.add('iamHere')
        iamFour.classList.remove('iamHere')
    }
    if (pageCount === 3 && !pageScrolled) {
        pageOne.classList.add('hidden');
        pageThree.classList.add('hidden')
        pageTwo.classList.add('hidden')
        nextPage.classList.add('hidden');

        pageFour.classList.remove('hidden');
        window.scroll(0, 50);
        pageScrolled = true;

        iamOne.classList.remove('iamHere')
        iamTwo.classList.remove('iamHere')
        iamThree.classList.remove('iamHere')
        iamFour.classList.add('iamHere')
    }

});


home.addEventListener("click", function () {
    pageCount = 0;
    count = 0;

    window.dispatchEvent(wheelEvent);
})
skills.addEventListener("click", function () {
    pageCount = 1;
    count = 0;
    console.log("🚀 ~ file: app.js:46 ~ pageCount", pageCount)
    pageScrolled = false;

    // dispatch the wheel event to the element
    window.dispatchEvent(wheelEvent);
})
projects.addEventListener("click", function () {
    pageCount = 2;
    count = 0;
    console.log("🚀 ~ file: app.js:46 ~ pageCount", pageCount)
    pageScrolled = false;

    window.dispatchEvent(wheelEvent);
})
contact.addEventListener("click", function () {
    pageCount = 3;
    count = 0;
    console.log("🚀 ~ file: app.js:46 ~ pageCount", pageCount)
    pageScrolled = false;

    window.dispatchEvent(wheelEvent);
})