import requests

def is_youtube_video_embeddable(api_key, video_id):
    url = f"https://www.googleapis.com/youtube/v3/videos?id={video_id}&part=status&key={api_key}"
    response = requests.get(url)
    data = response.json()
    if 'items' in data and len(data['items']) > 0:
        return data['items'][0]['status']['embeddable']
    return False

# Usage
api_key = 'YOUR_YOUTUBE_API_KEY'
video_id = 'VIDEO_ID'
embeddable = is_youtube_video_embeddable(api_key, video_id)
print(f"Video embeddable: {embeddable}")
