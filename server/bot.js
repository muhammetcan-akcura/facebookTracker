const axios = require('axios');

async function getFacebookPageData(pageUsername) {
    try {
        const accessToken = "893804359631884|6wkT_3rI2QM2NjXz_Xc0TlNh8uM";
        const apiVersion = 'v21.0';
        const url = `https://graph.facebook.com/${apiVersion}/${pageUsername}`;
        
        const response = await axios.get(url, {
            params: {
                access_token: accessToken,
                fields: 'id,name,fan_count,followers_count'
            }
        });
        
        return {
            id: response.data.id,
            name: response.data.name,
            followers: response.data.followers_count,
            likes: response.data.fan_count
        };
    } catch (error) {
        if (error.response?.data?.error) {
            console.error('Facebook API Hatası:', error.response.data.error.message);
        } else {
            console.error('Bağlantı Hatası:', error.message);
        }
        return null;
    }
}

// Test
const pageUsername = 'jameskitten3000'; // örnek: zuck
getFacebookPageData(pageUsername).then(console.log);