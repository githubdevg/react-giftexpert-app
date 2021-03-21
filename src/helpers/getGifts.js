

export const getGifts = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=mVoXB1blzvkSPWjlBWAo4K30rAAF1QNg`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifts = data.map(img => {
        return {
            id: img.url,
            title: img.title,
            url: img.images?.downsized.url
        }

    });

    return gifts;
}