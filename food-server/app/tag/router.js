const router = require('express').Router();
const { police_check } = require('../../middlewares');
const tagController = require('./controller');

router.get('/tags', 
  tagController.index
);
router.get('/tags/:category', 
  tagController.showTagByCategory
);
router.post('/tags', 
  
  tagController.store
);
router.put('/tags/:id', 
  
  tagController.update
);
router.delete('/tags/:id', 
  
  tagController.destroy
);

module.exports = router;