// <Завдання 1>
function toggleSubMenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    const isHidden = submenu.classList.contains('hidden');
    
    const allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach((el) => el.classList.add('hidden'));

    if (isHidden) {
        submenu.classList.remove('hidden');
    }
}

const menuItems = document.querySelectorAll('.group');
menuItems.forEach(item => {
    item.addEventListener('mouseleave', () => {
        const submenu = item.querySelector('.submenu');
        submenu.classList.add('hidden');
    });
});

// <Завдання 2>
const image = document.getElementById("zoomImage");

let scale = 1; 
const maxScale = 1.5; 
const scaleStep = 0.005; 

function increaseScale() {
    if (scale < maxScale) {
        scale += scaleStep;
        image.style.transform = `scale(${scale})`;
        requestAnimationFrame(increaseScale); 
    }
}

function decreaseScale() {
    if (scale > 1) {
        scale -= scaleStep;
        image.style.transform = `scale(${scale})`;
        requestAnimationFrame(decreaseScale);
    }
}

image.addEventListener("mouseenter", increaseScale);
image.addEventListener("mouseleave", decreaseScale);
