
document.addEventListener('DOMContentLoaded', function () {
    const toggleDiv = document.getElementById('toggleDiv');
    let isOriginal = true;

    toggleDiv.addEventListener('click', function () {
        if (isOriginal) {
            toggleDiv.classList.remove('smallDiv');
            toggleDiv.classList.add('changediv');
        } else {
            toggleDiv.classList.remove('changediv');
            toggleDiv.classList.add('smallDiv');
        }
        isOriginal = !isOriginal; 
    });
});
