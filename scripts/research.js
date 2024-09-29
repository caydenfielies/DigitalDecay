// click button then content is toggled on, if content is toggled on then button is toggled on, and rest of the content and buttons is toggled off.

let taskDef = document.querySelector('.task-definition')
let quests = document.querySelector('.questions');
let bib = document.querySelector('.bibliograpghy');

function toggled(selector) {
    let button = document.querySelector(selector);

    if (button.classList.contains("task-def-btn")) {
        taskDef.classList.remove("content-not-toggled");
    } else {
        taskDef.classList.add("content-not-toggled");
    }

    if (button.classList.contains("quests-btn")) {
        quests.classList.remove("content-not-toggled");
    } else {
        quests.classList.add("content-not-toggled");
    }

    if (button.classList.contains("bib-btn")) {
        bib.classList.remove("content-not-toggled");
    } else {
        bib.classList.add("content-not-toggled");
    }
}