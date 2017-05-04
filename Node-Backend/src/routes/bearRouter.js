import express from 'express';
import Bear from '../models/bearModel';
let bearRouter = express.Router();

bearRouter.use((req, res, next) => {
    console.log('Bear Router');
    next();
});

bearRouter.get('/', (req, res) => {
    res.json({message:'Bear Router is getting called'});
});

bearRouter.route('/bears')
.post((req, res) => {
  let bear = new Bear();
  bear.name = req.body.name;
  bear.save((err) => {
    if(err)
        res.send(err);
    res.json({message: 'Bear created!'});
  });
})
.get((req, res) => {
  Bear.find((err, bears) => {
    if(err)
    res.send(err);
    res.json(bears);
  });
});

bearRouter.route('/bears/:bear_id')
.get((req, res) => {
  const { params: { bear_id }} = req;
  Bear.findById(bear_id, (err, bear) => {
    if(err)
      res.send(err);
    res.json(bear);
  });
})
.put((req, res) => {
  const { params: { bear_id }} = req;
  Bear.findById(bear_id, (err, bear) => {
    if(err)
      res.send(err);
    bear.name = req.body.name;
    bear.save((err) => {
      if(err)
        res.send(err);
      res.send({message: ' Bear information has been updated'});
    });
  });
})
.delete((req, res) => {
    const { params: { bear_id }} = req;
  Bear.remove({_id: bear_id}, (err, bear) => {
    if(err)
      res.send(err);
    res.json({message :' Bear has been deleted successfully'});
  });
});


export default bearRouter;