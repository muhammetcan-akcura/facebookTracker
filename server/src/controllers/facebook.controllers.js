const facebookService = require('../services/facebookservices');

class FacebookController {
  async getFollowerCount(req, res) {
    try {
      const { profileUrl } = req.body;
      
      if (!profileUrl) {
        return res.status(400).json({ error: 'Profile URL is required' });
      }

      const result = await facebookService.getFollowerCount(profileUrl);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FacebookController();
