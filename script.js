document.getElementById('checkButton').addEventListener('click', function() {
    const videoId = document.getElementById('videoId').value;
    const resultElement = document.getElementById('result');

    if (!videoId) {
        resultElement.innerHTML = '<p style="color: red;">Please enter a YouTube Video ID.</p>';
        return;
    }

    // Clear previous result
    resultElement.innerHTML = '';

    // Create iframe to check embeddability
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.width = '560';
    iframe.height = '315';
    iframe.onload = function() {
        resultElement.innerHTML = '<p style="color: green;">The video is embeddable.</p>';
    };
    iframe.onerror = function() {
        resultElement.innerHTML = '<p style="color: red;">The video is not embeddable.</p>';
    };

    // Append iframe to result element
    resultElement.appendChild(iframe);
});
