$(document).ready(function() {
    // Function to add a new row in the table based on user input:
    $(".add-row").click(function() {
        var title = $("#title").val();
        var artist = $("#artist").val();
        // Make sure that the user input is not empty (validation):
        if (!$('#title').val() == '' && (!$('#artist').val() == '')) {
            var markup = "<tr><td><input type='checkbox' name='record'></td><td>" + title + "</td><td>" + artist + "</td></tr>";
            $("table tbody").append(markup);
        } else {
            alert("Empty cells")
        }
    });
    // Function to delete a row based on the checkboxes, on which checkboxes are checked:
    $(".delete-row").click(function() {
        $("table tbody").find('input[name="record"]').each(function() {
            if ($(this).is(":checked")) {
                $(this).parents("tr").remove();
            }
        });
    });
});

// Function to Sort the table:
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";

    // Make a loop until there is no more switching:
    while (switching) {
        switching = false;
        rows = table.rows;
        // Loop through the table (except header row):
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            // Condition to check if rows should switch:
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        // If so, make the switch:
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}