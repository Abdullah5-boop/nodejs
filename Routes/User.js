const express=require('express');
const router=express.Router();
const usercontroller=require('../userController/UserController')
router.get('/',usercontroller.view )

// router.get('',(req,res)=>{
//     res.render('home')
// })
module.exports=router