function checkAttendance() {
    // Get input values
    const total = parseInt(document.getElementById('totalClasses').value);
    const attended = parseInt(document.getElementById('attendedClasses').value);
    const modalBody = document.getElementById('modalBody');

    // Validation
    if (isNaN(total) || total <= 0) {
        modalBody.innerHTML = `<p class="text-danger">Total classes must be greater than 0.</p>`;
        showModal();
        return;
    }

    if (isNaN(attended) || attended < 0 || attended > total) {
        modalBody.innerHTML = `<p class="text-danger">Attended classes cannot be negative or greater than total classes.</p>`;
        showModal();
        return;
    }

    // Calculate percentage
    const percentage = (attended / total) * 100;

    // Create result message
    let message = `<p>Attendance Percentage: <strong>${percentage.toFixed(2)}%</strong></p>`;
    if (percentage >= 75) {
        message += `<p class="text-success">Congratulations! You are eligible for the exam.</p>`;
    } else {
        message += `<p class="text-danger">Sorry! You are not eligible for the exam.</p>`;
    }

    // Show result in modal
    modalBody.innerHTML = message;
    showModal();
}

// Function to show the Bootstrap modal
function showModal() {
    const attendanceModal = new bootstrap.Modal(document.getElementById('attendanceModal'));
    attendanceModal.show();
}