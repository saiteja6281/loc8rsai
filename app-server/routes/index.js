var express=require('express');
var router=express.Router();
var ctrllocations=require('../controllers/locations');
var ctrlothers=require('../controllers/others');
router.get('/',ctrllocations.homelist);
router.get('/location',ctrllocations.locationInfo);
router.get('/location/review/new',ctrllocations.addReview);
router.get('/about',ctrlothers.about);
module.exports=router;