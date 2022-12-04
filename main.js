const sidebar = document.querySelector('#sidebar');
const sidebarToggler = document.querySelector('.sidebar_toggler');
const sidebarClosedIcon = document.querySelector('.sidebar-closed-icon');

// Toggling The Sidebar
sidebarToggler.addEventListener('click', () => {
    sidebar.classList.toggle('show');
});

// OR -----------------------

// Show, Hide The Sidebar
// sidebarToggler.addEventListener('click', () => {
//     sidebar.classList.add('show');
// });
// sidebarClosedIcon.addEventListener('click', () => {
//     sidebar.classList.remove('show');
// });

// Closing the Sidebar on clicking Outside and on the Sidebar-Links
window.addEventListener('click', (e) => {
    if (e.target.id !== 'sidebar' && e.target.className !== 'sidebar_toggler') {
        sidebar.classList.remove('show');
    }
});