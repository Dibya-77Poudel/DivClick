document.addEventListener('DOMContentLoaded', function () {
    const toggleDiv = document.getElementById('toggleDiv');
    let isOriginal = true; 

    toggleDiv.addEventListener('click', function () {
        
        toggleDiv.classList.toggle('smallDiv', !isOriginal);
        toggleDiv.classList.toggle('changediv',isOriginal);
        isOriginal = !isOriginal; 
    });
});
