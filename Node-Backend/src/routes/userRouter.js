import express from 'express';
import User from '../models/userModel';

const userRouter = express.Router();

userRouter.use((req, res, next) => {
    console.log('user routes is being called');
    next();
});

userRouter.get('/', (req, res) => {
    res.json({message :'User Router'});
});

userRouter.route('/users')
.post((req, res) => {
    const { name, username, location, meta } = req.body;
    let newUser = new User({
        name,
        username,
        location,
        meta
    });
    newUser.save((err) => {
        if(err)
            res.send(err);
        res.json({message: 'user created successfully.'});
    });
})
.get((req, res) => {
    User.find((err, users) => {
        if(err)
            return res.send(err);
        return res.json(users);
    });
});

userRouter.route('/users/:userId')
.get((req, res) => {
    const { params : { userId }} = req;
    console.log('asdasdasd',userId)
    User.findById(userId, (err, user) => {
        if(err)
            res.send(err);
        res.json(user);
    });
})
.put((req, res) => {
     const { params : { userId }, body:{name}} = req;
      User.findById(userId, (err, user) => {
       if(err)
         res.send(err);
        user.name = name;
        user.save((err) => {
            if(err)
                res.send(err);
            res.json({message: 'user updated successfully.'});
        });
    });
})
.delete((req, res) => {
     const { params : { userId }, body:{name}} = req;
      User.findById(userId, (err, user) => {
       if(err)
         res.send(err);
        user.remove({_id:userId},(err) => {
            if(err)
                res.send(err);
            res.json({message: 'user deleted'});
        });
    });
});

export default userRouter;