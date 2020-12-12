// NOTE: Original trial class code
// Create


//Ajax skeleton
// $.ajax({
//   url:something,
//   method: something
// })
// .done(cb())
// .fail(cb())

const todoUrl = 'http://localhost:3000/todos'

//Read
$(document).ready(function(){
  $.ajax({
    url:todoUrl,
    method: "GET"
  })
  .done(function(dataObj){
    $('ul').empty()
    dataObj.map(function(todo){
      $("ul").append(
        `<li data-id=${todo.id}>${todo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      )
    })
  })
  .fail(function(errorObj){
    console.error("Issues reading data from server.")
  })
})

//Create - Post

$("input").keypress(function(event) {
  if(event.which === 13 && $(this).val() !== "") {
    var todoItem = {description: $(this).val()}
    $.ajax({
      url: todoUrl,
      method:"POST",
      data: todoItem
    })
    .done(function(newTodo){
      $("ul").append(
        `<li data-id=${newTodo.id}>${newTodo.description}<span><i class='far fa-trash-alt'></i></span></li>`
      )
      $("input").val("");
    })
    .fail(function(error){
      console.error("Error receiving new todo from server")
    })
  }
});

// Update
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

// Delete
$("ul").on("click", "span", function(event) {
  event.stopPropagation()
  let thisId = $(this).parent().data('id')
  let that = this;
  $.ajax({
    url: `${todoUrl}/${thisId}`,
    method: 'DELETE'
  })
  .done(function(){
    $(that).parent().remove();
  })
  .fail(function(error){
    console.error("Issue deleting todo on backend")
  })
});

