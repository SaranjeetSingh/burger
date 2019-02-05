// $(document).ready(function(){
    // window.location.replace('/getAll');
// });

$('.devour').on('click', function () {
    var id = $(this).parent().parent().attr("data-id");
    $.ajax('/update/'+id, {
        type: "POST",
        success : updateSuccess
    })
   
    function updateSuccess(response){
        window.location.href="/getAll";
    }
});

$('#newburger').on('click', function () {
    var burgerName = $("#newburgertext").val().trim();
    $.ajax('/insert/'+burgerName, {
        type: "POST",
        success : insertSuccess
    })
   
    function insertSuccess(response){
        window.location.href="/getAll";
    }

});