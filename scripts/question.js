let question_choice=document.querySelectorAll(".question__choice");
let targetClass='chosen'
let removeClass=(lists,className)=>{
    lists.forEach(item=>{
        item.classList.remove(className);
    })
}
question_choice.forEach(choice=>{
    choice.addEventListener("click",()=>{
        removeClass(question_choice,targetClass);
        choice.classList.add(targetClass);
        console.log("hi");
    })
})
console.log(question_choice);