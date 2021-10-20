$(document).ready(function() {
    $(".add-row").click(function() {
        var title = $("#title").val();
        var artist = $("#artist").val();
        var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + title + "</td><td>" + artist + "</td></tr>";
        $("table tbody").append(markup);
    });

    $(".delete-row").click(function() {
        $("table tbody").find('input[name="record"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
});