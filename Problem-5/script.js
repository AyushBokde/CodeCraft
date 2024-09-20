// Add event listeners for swipe gestures
document.addEventListener('DOMContentLoaded', function() {
    const feed = document.querySelector('.feed');
    const sidebar = document.querySelector('.sidebar');

    feed.addEventListener('touchstart', handleTouchStart);
    feed.addEventListener('touchmove', handleTouchMove);
    feed.addEventListener('touchend', handleTouchEnd);

    sidebar.addEventListener('touchstart', handleTouchStart);
    sidebar.addEventListener('touchmove', handleTouchMove);
    sidebar.addEventListener('touchend', handleTouchEnd);

    let startX, startY, endX, endY;

    function handleTouchStart(event) {
        startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
    }

    function handleTouchMove(event) {
        endX = event.touches[0].pageX;
        endY = event.touches[0].pageY;
    }

    function handleTouchEnd(event) {
        const deltaX = Math.abs(endX - startX);
        const deltaY = Math.abs(endY - startY);

        if (deltaX > deltaY && deltaX > 50) {
            if (endX > startX) {
                // Swipe right
                console.log('Swipe right');
            } else {
                // Swipe left
                console.log('Swipe left');
            }
        }
    }
});