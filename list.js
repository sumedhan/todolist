$( document ).ready(function() {
var count = 0;
$("#submitbutton").click(function(){
    var listItem = $("#listitem").val();
    var addItem = $("<li></li>").text(listItem);
    addItem.attr({"class":"item",
                  "id": "item" + count
                });
    var closeButton = $("<span></span>").text("x");
    closeButton.attr({"class":"close",
                    "id":"close"+count
                    });
    $("#todolist").append(addItem);
    $("#item"+count).append(closeButton);
    $("#listitem").val("");
    count++;

    });
$('#listitem').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#submitbutton').click();//Trigger search button click event
        }
    });


$(document).on('click','.close', function(){
        $(this).parent().fadeOut('slow');
      });


});