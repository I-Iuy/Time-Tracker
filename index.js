// index.js
$(document).ready(function() {
    $('#addBtn').click(function() {
        // Get user input
        let hours = parseInt($('#inputHours').val()) || 0;
        let minutes = parseInt($('#inputMinutes').val()) || 0;

        // Add hours and minutes
        let totalHours = hours + Math.floor(minutes / 60);
        let totalMinutes = minutes % 60;

        // Append row to table
        $('#timeTable tbody').append(`
            <tr>
                <td>${hours}</td>
                <td>${minutes}</td>
                <td>${totalHours} hours ${totalMinutes} minutes</td>
                <td><button class="btn btn-danger btn-sm delete-btn">Delete</button></td>
            </tr>
        `);

        // Clear input fields
        $('#inputHours').val('');
        $('#inputMinutes').val('');

        // Attach delete functionality
        $('.delete-btn').click(function() {
            $(this).closest('tr').remove();
        });
    });

    $('#calculateBtn').click(function() {
        let totalHours = 0;
        let totalMinutes = 0;

        // Loop through table rows
        $('#timeTable tbody tr').each(function() {
            let rowHours = parseInt($(this).find('td:eq(0)').text());
            let rowMinutes = parseInt($(this).find('td:eq(1)').text());

            totalHours += rowHours;
            totalMinutes += rowMinutes;
        });

        // Convert excess minutes to hours
        totalHours += Math.floor(totalMinutes / 60);
        totalMinutes = totalMinutes % 60;

        // Display total time
        $('#totalTime').html(`<p>Total Time: ${totalHours} hours ${totalMinutes} minutes</p>`);
    });
});
