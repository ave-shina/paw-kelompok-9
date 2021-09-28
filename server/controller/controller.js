const { Error } = require('mongoose');
var Userdb = require('../model/model');

//create and save new user
exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }

    //new user
    const user = new Userdb({
        name:req.body.name,
        email:req.body.email,
        gender:req.body.gender,
        status:req.body.status
    })

    //save user in the database
    user
        .save(user)
        .then(data=>{
            res.send(data)
        })
        .catch(Error=>{
            res.status(500).send({
                message:Error.message||'Some error occured while a create operation'
            });
        }); 
}

//retrieve and return all user/retrieve and return a single user
exports.find = (req,res)=>{
    Userdb.find()
    .then(user=>{
        res.send(user)
    })
    .catch(Error=>{
        res.status(500).send({message:Error|| "Error Occured while retrieving user information"})
    })
}

//Update a new identify by user id
exports.update=(req,res)=>{
    if(!req.body){
        return res
            .status(400)
            .send({message:"Data to update can not be empty"})
    }
    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
        .then(data=>{
            if(!data){
                res.status(404).send({message:`Cannot Update user with ${id}. Maybe user is not found!`})
            }else{
                res.send(data)
            }
        })
        .catch(Error=>{
            res.status(500).send({message:"Error update user information!"})
        })
}

//delete a user with specify user id in the request
exports.delete=(req,res)=>{
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data=>{
            if(!data){
                res.status(404).send({message: `Cannot Delete woth id ${id}. Maybe id is wrong`})
            }else{
                res.send({
                    message:"User was deleted succesfully!"
                })
            }
        })
        .catch(Error=>{
            res.status(500).send({
                message:"Could not delete User with id="+id
            });
        });
}