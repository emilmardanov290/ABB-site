document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.panel')
    
    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('bg-black', 'text-white','rounded-lg','px-2','py-1'))
            tab.classList.add('bg-black', 'text-white', 'rounded-lg', 'px-2', 'py-1');
            
            panels.forEach(p => p.classList.add('hidden'));
            panels[index].classList.remove('hidden');
        });
    });
});

