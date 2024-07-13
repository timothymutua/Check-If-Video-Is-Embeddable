document.getElementById('checkButton').addEventListener('click', function() {
    const videoId = document.getElementById('videoId').value;
    const apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your YouTube API key

    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=status&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const resultElement = document.getElementById('result');
            if (data.items && data.items.length > 0) {
                const isEmbeddable = data.items[0].status.embeddable;
                resultElement.textContent = isEmbeddable ? 'The video is embeddable.' : 'The video is not embeddable.';
            } else {
                resultElement.textContent = 'Video not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('result').textContent = 'An error occurred. Please try again.';
        });
});
