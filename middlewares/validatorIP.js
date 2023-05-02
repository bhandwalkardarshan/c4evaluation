const { validationResult } = require('express-validator');
const { isIP } = require('net');

const validateIP = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { ip } = req.params;
  if (!isIP(ip)) {
    return res.status(400).json({ error: 'Invalid IP address format' });
  }
  next();
}

module.exports = validateIP
