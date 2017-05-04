import express from 'express';

const moviesRouter = express.Router();

moviesRouter.use((req, res, next) => {
    console.log('movies router is getting called');
    next();
});

moviesRouter.get('/', (req, res) => {
    res.json({message:'Movie Router'});
});

export default moviesRouter;