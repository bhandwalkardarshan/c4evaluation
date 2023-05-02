const axios = require('axios');
const redis = require('../helpers/redis');

getIpInfo = async (req, res) => {
  const { ip } = req.params;

  try {
    let ipInfo = await redis.getAsync(ip);
    if (ipInfo) {
      return res.json(JSON.parse(ipInfo));
    }
   
    const url = `https://ipapi.co/${ip}/json/`;
    const response = await axios.get(url);
    
    ipInfo = response.data;
    await redis.setAsync(ip, JSON.stringify(ipInfo), 'EX', 6 * 60 * 60);

    res.json(ipInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}


module.exports = {getIpInfo}