document.getElementById('scrollRight').addEventListener('click', function() {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({ left: 200, behavior: 'smooth' });
});

document.getElementById('scrollLeft').addEventListener('click', function() {
    const container = document.getElementById('scrollContainer');
    container.scrollBy({ left: -200, behavior: 'smooth' });
});


document.getElementById('scrollRight1').addEventListener('click', function() {
    const container = document.getElementById('scrollContainer1');
    container.scrollBy({ left: 200, behavior: 'smooth' });
});

document.getElementById('scrollLeft1').addEventListener('click', function() {
    const container = document.getElementById('scrollContainer1');
    container.scrollBy({ left: -200, behavior: 'smooth' });
});
