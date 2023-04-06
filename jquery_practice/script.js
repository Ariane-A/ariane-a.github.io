/* Exercise 1: Wish list */
function addToList(item) {
    $('#items').append('<li>' + item + '<span class=\'label pending\'>Pending</span></li>');
}

$(document).on('click', '#add-to-list', function() {
    let item = $('#item');
    addToList(item.val()); // .val() get the value of what is typed in the input box
    item.val(''); // this sets the value back to nothing after it is clicked
    item.focus(); // this puts the focus back on the box after click
    updateTotal();
});

$(document).on('click', '.pending', function() {
    let li_node = $(this).parent(); // 'this' keyword selects the element that the event is happening to; in this case the <span> element. The .parent() selects the parent element.
    li_node.append("<span class='label success'>Done!</span>");
    $(this).remove(); // 'this' refers to the <span> element again. do not add the parent method or will not work.
    li_node.addClass('completed');
    updateTotal();
});

function updateTotal() {
    // using the .length property with jquery selectors will return the number of those elements.
    let pendTotal = $(".pending").length; // this gets the number of all the elements with the .pending class
    let compTotal = $(".success").length; // this gets the number of all elements with the .success class
    $(".total").text('Pending: ' + pendTotal + ' Completed: ' + compTotal);
    /* .text() either sets or returns the text contents of matched elements. If text() parameter is blank it returns
    the contents of that element.
    If it is filled (e.g. $("p").text("This p tag is filled now")*/
}