document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const experience = parseInt(document.getElementById('experience').value);
    const position = document.getElementById('position').value;

    // Define minimum experience required
    const minimumExperience = 2; // Example value

    // Check if the applicant meets the requirement
    if (experience >= minimumExperience) {
        document.getElementById('result').textContent = `${name}, your application for the ${position} position has been accepted.`;
    } else {
        document.getElementById('result').textContent = `${name}, your application for the ${position} position has been rejected due to insufficient experience.`;
    }

    // Clear the form
    document.getElementById('jobApplicationForm').reset();
});
