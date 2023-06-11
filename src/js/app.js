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

const allPages = [pageOne, pageTwo, pageThree, pageFour]

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
        pagechanger()

        pageOne.classList.remove('hidden')
        pageOne.classList.add('active')

        // pageTwo.classList.add('hidden')
        // pageThree.classList.add('hidden')
        // pageFour.classList.add('hidden')

        pageTwo.classList.remove('active')
        pageThree.classList.remove('active')
        pageFour.classList.remove('active')

        iamOne.classList.add('iamHere')
        iamTwo.classList.remove('iamHere')
        iamThree.classList.remove('iamHere')
        iamFour.classList.remove('iamHere')
        removeElement()
    }

    if (pageCount === 1 && !pageScrolled) {
        pagechanger()

        // pageOne.classList.add('hidden');
        // pageThree.classList.add('hidden')
        // pageFour.classList.add('hidden')
        // nextPage.classList.add('hidden');

        pageOne.classList.remove('active')
        pageThree.classList.remove('active')
        pageFour.classList.remove('active')

        pageTwo.classList.remove('hidden');

        pageTwo.classList.add('active');
        window.scroll(0, 0);
        pageScrolled = true;

        iamOne.classList.remove('iamHere')
        iamTwo.classList.add('iamHere')
        iamThree.classList.remove('iamHere')
        iamFour.classList.remove('iamHere')
        removeElement()
    }
    if (pageCount === 2 && !pageScrolled) {
        pagechanger()

        // pageOne.classList.add('hidden');
        // pageTwo.classList.add('hidden')
        // pageFour.classList.add('hidden')
        // nextPage.classList.add('hidden');

        pageOne.classList.remove('active')
        pageTwo.classList.remove('active')
        pageFour.classList.remove('active')

        pageThree.classList.remove('hidden');

        pageThree.classList.add('active');
        window.scroll(0, 0);
        pageScrolled = true;

        iamOne.classList.remove('iamHere')
        iamTwo.classList.remove('iamHere')
        iamThree.classList.add('iamHere')
        iamFour.classList.remove('iamHere')
        removeElement()
    }
    if (pageCount === 3 && !pageScrolled) {
        pagechanger()

        // pageOne.classList.add('hidden');
        // pageThree.classList.add('hidden')
        // pageTwo.classList.add('hidden')
        // nextPage.classList.add('hidden');

        pageOne.classList.remove('active')
        pageThree.classList.remove('active')
        pageTwo.classList.remove('active')

        pageFour.classList.remove('hidden');

        pageFour.classList.add('active');
        window.scroll(0, 0);
        pageScrolled = true;

        iamOne.classList.remove('iamHere')
        iamTwo.classList.remove('iamHere')
        iamThree.classList.remove('iamHere')
        iamFour.classList.add('iamHere')
        removeElement()
    }

    function pagechanger() {
        for (var i = 0; i < allPages.length; i++) {
            if (allPages[i].classList.contains("back-section") && !allPages[i].classList.contains("active")) {
                allPages[i].classList.replace("back-section", "hidden");
            }
            if (allPages[i].classList.contains("active")) {
                allPages[i].classList.add("back-section");
            }
        }

    }

    function removeElement() {
        setTimeout(function () {
            for (var i = 0; i < allPages.length; i++) {
                if (allPages[i].classList.contains("back-section") && !allPages[i].classList.contains("active")) {
                    allPages[i].classList.replace("back-section", "hidden");
                    console.log("🚀 ~ file: app.js:235 ~ i:", i)
                }
            }
        }, 1500);
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