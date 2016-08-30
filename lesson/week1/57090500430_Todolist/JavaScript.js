$(document).ready(function(){
  console.log($(window))

  var $input = $('.task-input')  //$ คือกำหนดว่าเป็นตัวแปล jquery
  var $btnadd = $('.btn-add')
  var $content = $('.content')
  var $spandelete = $('.spandelete')
  var $checkbox = $('.checkbox')
  var $btnclearcomplete = $('.btn-clearcomplete')
  var $task = $('.task')
  $input.focus()

  $content.on('click', '.spandelete', function() {
    $(this).parent('li').slideUp('fast')
    console.log($(this),$(this).parent())
  })

  $btnadd.on('click', function() {
          var getVal = $input.val()
          if(getVal != "") {
              $('<li>'+'<input type="checkbox" class="checkbox"></inpu>' + '<span class = "task">' + getVal + '</span>' + ' <span class="spandelete"><img src="icon/Eraser-icon.png" alt="icon" width="19" height="19"></span>').fadeIn('slow').prependTo($content)
              $input.val('')
              $input.focus()
              console.log($content,getVal)
                          } else {
              alert("Plese input message")
              $input.focus()
          }
  })

  $btnclearcomplete.on('click', function() {
        $( "input:checked" ).parent().slideUp('slow')  //effect http://api.jquery.com/category/effects/
        $input.focus()
  })

  $content.on('change','.checkbox', function () {
          if (this.checked) {
              $(this).next(".task").css('textDecoration', 'line-through')
          } else {
              $(this).next(".task").css('textDecoration', 'none')
          }
      })

})
