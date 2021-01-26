const User = require('../models/user')

// function to get list of all records
exports.getAllRecords = (req,res,next)=>{
    User.find().sort({'createdAt':-1})
    .then(users=>{
        res.render('get-records',{
            users:users
        });
    }).catch(err =>{
        console.log(err);
    })
}
// function to get ad-record page
exports.getAddRecord = (req,res,next)=>{
    res.render('add-record');
}

// function to add record to the database
exports.postAddRecord = (req,res,next) =>{
    const user = new User({
        name:req.body.name,
        location:req.body.location
    })
    user.save()
        .then(result =>{
            res.redirect('/get-records');
        }).catch(err =>{
            console.log(err);
        })
}
// function to seach records by location or name
exports.search = (req,res,next) =>{
    const searchValue=req.body.searchBar
User.find({$or:[{location:new RegExp( searchValue,'i')},{name:new RegExp( searchValue,'i')}]}).sort({'createdAt':-1})
        .then(users=>{
            console.log('users:',users)
            res.render('get-records',{
                users:users
            })         
        }).catch(err =>{
            console.log(err);
        })
}

