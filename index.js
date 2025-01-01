import { chapters, saveChapterNo } from "./storage.js";

const list = document.querySelector('main .chapters .list')

const readF = document.querySelector('main .showcase .btn-section .readF')
const readL = document.querySelector('main .showcase .btn-section .readL')

renderScreen()

function renderScreen() {
    list.innerHTML = ''
    readF.innerHTML = `Chapter 0`
    readL.innerHTML = `Chapter ${chapters.length - 1}`
    chapters.forEach((item, index) => {
        const container = document.createElement('a')
        container.setAttribute('href', 'Chapter.html')
        container.setAttribute('id', index)
        container.innerHTML = `Chapter ${index}`
        container.addEventListener('click', (e) => {
            saveChapterNo(e.target.id)
        })
        list.appendChild(container);
    })
}

readF.addEventListener('click', function () {
    const result = this.innerHTML
    const arr = result.split(' ')
    saveChapterNo(arr[1])
})
readL.addEventListener('click', function () {
    const result = this.innerHTML
    const arr = result.split(' ')
    saveChapterNo(arr[1])
})
