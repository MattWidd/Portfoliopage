document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    const projectContainer = document.getElementById('projectContainer');
    let currentIndex = Math.floor(projects.length / 2); // Start with the center project

    // Function to update project sizes and position based on the clicked index
    function updateProjectSizes(clickedIndex) {
        // Calculate the center position of the viewport
        const viewportWidth = window.innerWidth;
        const projectWidth = 230; // Width of project + margin
        const centerOffset = (viewportWidth / 2) -  (projectWidth + 50);

        // Calculate how far to move the container
        const moveAmount = -(clickedIndex * projectWidth) +centerOffset;

        // Update container position
        projectContainer.style.transform = `translateX(${moveAmount}px)`;

        // Update sizes of all projects
        projects.forEach((project, index) => {
            // Reset all transformations
            project.style.transform = '';
            project.classList.remove('clicked', 'adjacent');

            if (index === clickedIndex) {
                // Clicked project
                project.style.transform = 'scale(1.5)';
                project.classList.add('clicked');
            } else if (index === clickedIndex - 1 || index === clickedIndex + 1) {
                // Adjacent projects
                project.style.transform = 'scale(0.5)';
                project.classList.add('adjacent');
            } else {
                // Far projects
                project.style.transform = 'scale(0.25)';
            }
        });

        currentIndex = clickedIndex;
    }

    // Add click event listeners to each project
    projects.forEach((project, index) => {
        project.addEventListener('click', () => {
            updateProjectSizes(index);
        });
    });

    // Initialize with center project
    updateProjectSizes(currentIndex);
});