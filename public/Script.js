$('document').ready(()=>{
    let AddTodoList = $('.AddTodoList')
    let hiddenAdd = $(".hiddenAdd")
    let showAdd = $('.showAdd')
    hiddenAdd.css('cursor','pointer')
    hiddenAdd.ready(()=>AddTodoList.css('display',"none"))
    showAdd.css('cursor','pointer')
    hiddenAdd.click(()=>AddTodoList.css('display',"none"))
    showAdd.click(()=>AddTodoList.css('display',"block"))

    let EditButton = $('.EditButton')
    $('.icon-edit').click(()=>EditButton.css('display','none'))
    $('.showEdit').click(()=>EditButton.css('display','block'))

})