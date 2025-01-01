import { retrnChapterNo, chapters, saveChapterNo } from "./storage.js";
let chapterNo = retrnChapterNo();

const list = document.querySelector('main .controllers #chapters')
const content = document.querySelector('main .contents')
const title = document.querySelector('main h3')

const refreshLink = document.querySelector('.refresh')

renderScreen()

function renderScreen() {
    document.title = `Chapter ${chapterNo} | The Tales of The Celestial Gods`
    title.innerHTML = `The Tales of The Celestial Gods - Chapter ${chapterNo}`
    list.innerHTML = '';
    chapters.forEach(item => {
        const container = document.createElement('option')
        container.innerHTML =  `Chapter ${item.id}`
        if (item.id == chapterNo) {
            container.setAttribute('selected', '')
            content.innerHTML = item.content
        }
        list.appendChild(container)
    })
}

list.onchange = function () {
    const result = this.value
    const arr = result.split(' ')
    saveChapterNo(arr[1])
    refreshLink.click()
}

const prevBtn = document.querySelector('main .controllers .btns .prev')
const nextBtn = document.querySelector('main .controllers .btns .next')

prevBtn.addEventListener('click', prevBtnFun)
nextBtn.addEventListener('click', nextBtnFun)

function prevBtnFun() {
    chapterNo--
    if (!(chapterNo < 0)) {
        saveChapterNo(chapterNo)
        refreshLink.click()
    } else {
        chapterNo = 0
    }
}

function nextBtnFun() {
    chapterNo++
    if (chapterNo < chapters.length) {
        saveChapterNo(chapterNo)
        refreshLink.click()
    } else {
        chapterNo = chapters.length - 1
    }
}
