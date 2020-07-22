$('document').ready(()=>{
    let AddTodoList = $('.AddTodoList')
    let hiddenAdd = $(".hiddenAdd")
    hiddenAdd.css('cursor','pointer')
    let showAdd = $('.showAdd')
    showAdd.css('cursor','pointer')
    hiddenAdd.click(()=>AddTodoList.css('display',"none"))
    showAdd.click(()=>AddTodoList.css('display',"block"))
})