require('dotenv').config();
const axios = require('axios');

async function getFacebookPageData(pageId) {
    try {
        const accessToken = process.env.FACEBOOK_ACCESS_TOKEN;
        const apiVersion = 'v19.0';
        const url = `https://graph.facebook.com/${apiVersion}/${pageId}`;
        
        const response = await axios.get(url, {
            params: {
                access_token: accessToken,
                fields: 'followers_count,fan_count,name'
            }
        });
        
        return {
            followers: response.data.followers_count,
            likes: response.data.fan_count,
            name: response.data.name
        };
    } catch (error) {
        console.error('API Hatası:', error.response?.data || error.message);
        return null;
    }
}

// Kullanım
const pageId = 'SAYFA_ID';
getFacebookPageData(pageId).then(data => {
    if (data) {
        console.log(`Sayfa Adı: ${data.name}`);
        console.log(`Takipçi Sayısı: ${data.followers}`);
        console.log(`Beğeni Sayısı: ${data.likes}`);
    }
});