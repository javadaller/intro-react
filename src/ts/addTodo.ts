import { createDiv } from "./helpers/functions"

export function addTodo() {
    const input: HTMLInputElement = document.querySelector('#inputID')!
    const text: string = input.value

    const list: HTMLElement = document.querySelector('#todoList')!
    const parent: HTMLElement = createDiv('div',list,null,'todo',null,null)
    const checkbox:HTMLElement = createDiv('input',parent,null,null,null,null)
    checkbox.setAttribute('type','checkbox')
    createDiv('p',parent,text,null,null,null)
}