// *****Import Modules*****
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// If a valid route isn't found
router.use((req, res) => {
  return res.send('Incorrect route!');
});

module.exports = router;