const axios = require('axios');
const cheerio = require('cheerio');

async function getImageUrls(query, resolution = 'medium') {
    try {
        const response = await axios.get(`https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`);
        const $ = cheerio.load(response.data);
        const imageUrls = [];
        $('img').each((index, element) => {
            const imageUrl = $(element).attr('src');
            if (imageUrl) {
                const formattedUrl = formatImageUrl(imageUrl, resolution);
                imageUrls.push(formattedUrl);
            }
        });
        return imageUrls;
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}

function formatImageUrl(url, resolution) {
    // Change 's1600' to 's1300' to get 'large' resolution
    switch (resolution) {
        case 'large':
            return url.replace(/s\d+/, 's1300');
        case 'medium':
            return url.replace(/s\d+/, 's800');
        case 'low':
            return url.replace(/s\d+/, 's200');
        default:
            return url;
    }
}

// Example usage:
const query = 'anime wallapers';
const resolution = 'large'; // 'large', 'medium', or 'low'
getImageUrls(query, resolution)
    .then(imageUrls => {
        console.log(`Image URLs for "${query}" (resolution: ${resolution}):`, imageUrls);
    })
    .catch(error => {
        console.error('Error:', error);
    });
