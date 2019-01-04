$( document ).ready(function() {

// Moves the input item to the list and resets input field to default
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

// Allows user to hit enter instead of clicking the add button
$('#listitem').keypress(function(e){
        if(e.which == 13){ // enter keypress code is 13
            $('#submitbutton').click();
        }
    });

// Removes the deleted list items from the display
$(document).on('click','.close', function(){
        $(this).parent().slideUp('slow');
      });

// strikes out completed items by changing the class
$(document).on('click','li', function(){
        $(this).toggleClass("strikeOut");
      });


});