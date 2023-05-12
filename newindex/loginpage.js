$(document).ready(function () {
    $('#modalForm').modal({
        backdrop: 'static',
        keyboard: false
      })
    
   
    $("#submit, #close").click(function() {
        // Validation
        var form = $("#inputs")

        if (form[0].checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }
        form.addClass('was-validated')

        //Declare and initialize variable for display inputs in div
        var code = "";
        $("#inputs").each(function() {
            var text1 = $(this).find("#firstname").val();
            var text2 = $(this).find("#lastname").val();
            code += text1 + " " + text2;
        });

        $("#results").html(code);
        
    });
});