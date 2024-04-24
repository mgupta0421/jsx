import axios from 'axios';

 const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 02A80kQddyy4cu_jo47WLVeNGLqWWPnPYQcRVmeUGaI',
        },
        params: {
            query: term,
        },
    });

    console.log(response.body);
    return response.data.results;
};

export default searchImages;