var button = document.getElementById('toggle-Skills');
var Skills = document.getElementById('skills');
if (button && skills) { // Check if both elements exist
    button.addEventListener('click', function () {
        // Use getComputedStyle to check the current display property
        var currentDisplay = window.getComputedStyle(Skills).display;
        if (currentDisplay === 'none') {
            Skills.style.display = 'block';
        }
        else {
            Skills.style.display = 'none';
        }
    });
}
else {
    console.error('Button or skills element not found');
}
