document.querySelector('.title span').addEventListener('click', function() {
    const details = document.querySelector('.about-details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block'; // Toggle visibility
});
document.getElementById('serviceTitle').addEventListener('click', function() {
    const boxes = document.getElementById('serviceBoxes');
    const additionalDetails = document.getElementById('additionalDetails');
    boxes.style.display = boxes.style.display === 'none' ? 'flex' : 'none';
    additionalDetails.style.display = additionalDetails.style.display === 'none' ? 'block' : 'none';
});
