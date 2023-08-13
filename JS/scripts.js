function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarList = document.querySelector(".sidebar-list");
    var header = document.querySelector(".header");
    var menuIcon = header.querySelector(".menu-icon");
    var closeIcon = header.querySelector(".close-icon");
   
    // var closeControl = document.querySelector(".close-control");
    sidebar.classList.toggle('active');    

    var sidebarWidth = parseInt(window.getComputedStyle(sidebar).width); // Get sidebar width

    if(sidebar.classList.contains("active")) {
        sidebarList.style['display']="block";
         // menuControl.style['display']="none";

        if (sidebarWidth < 141) {
            menuIcon.style['display'] = "none";
            // closeIcon.style['display'] = "inline-block";
        }   else {
                // Reset icons for larger screens if needed
                menuIcon.style['display'] = "inline-block";
                closeIcon.style['display'] = "none";
        }
}
    else {
        sidebarList.style["display"]='none';
    }
   
}

function closeSidebar() {
    
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
    var sidebarList = document.querySelector(".sidebar-list");
    sidebarList.style["display"]= 'none';

    
}






