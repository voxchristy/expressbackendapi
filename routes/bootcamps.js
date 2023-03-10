const express = require('express');
const { 
    getBootcamps, 
    getBootcamp, 
    updateBootcamp, 
    createBootcamp, 
    deleteBootcamp 
} = require('../controllers/bootcamps');

const router = express.Router();

//Route matching
router.route('/').get(getBootcamps)
                 .post(createBootcamp);

router.route('/:id').get(getBootcamp)
                    .put(updateBootcamp)
                    .delete(deleteBootcamp);


module.exports = router;