const button = document.getElementById('toggle-Skills') as HTMLButtonElement;
const Skills = document.getElementById('skills') as HTMLElement;

if (button && skills) { // Check if both elements exist
    button.addEventListener('click', () => {
        // Use getComputedStyle to check the current display property
        const currentDisplay = window.getComputedStyle(Skills).display;
        if (currentDisplay === 'none') {
            Skills.style.display = 'block';
        } else {
            Skills.style.display = 'none';
        }
    });
} else {
    console.error('Button or skills element not found');
}