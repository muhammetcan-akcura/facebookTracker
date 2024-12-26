import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

export const facebookApi = {
  getFollowerCount: async (profileUrl: string) => {
    const { data } = await axios.post(`${API_URL}/facebook/follower-count`, { profileUrl });
    return data;
  }
};
