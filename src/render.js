

export function render(item) {
    const itemElement = document.createElement('div');
    itemElement.className = "gallery-item";
    if (item.type == 'img') {
        console.log(item.type)
        const imgElement = document.createElement('img');
        imgElement.className = "item-img";
        imgElement.src = item.content;
        itemElement.appendChild(imgElement);
    }
    if (item.type == 'audio') {
        console.log(item.type)
        const audioElement = document.createElement('audio');
        audioElement.className = "item-audio";
        audioElement.src = item.content;
        audioElement.controls = true;
        itemElement.appendChild(audioElement);
    }
    if (item.type == 'video') {
        console.log(item.type)
        const videoElement = document.createElement('video');
        videoElement.className = "item-video";
        videoElement.src = item.content;
        videoElement.controls = true;
        itemElement.appendChild(videoElement);
    }

    const titleElement = document.createElement('span');
    titleElement.className = "item-title";
    titleElement.textContent = item.title;


    itemElement.appendChild(titleElement);

    return itemElement;
};

