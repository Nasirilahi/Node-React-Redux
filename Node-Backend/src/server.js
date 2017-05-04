import {app} from './util/consts';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { PORT } from './constants/consts';
import { mongodbURL } from './constants/consts';
import userRouter from './routes/userRouter';
import moviesRouter from './routes/moviesRouter';
import bearRouter from './routes/bearRouter';

// configure body parser in encoded url + sending data in json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose.connect(mongodbURL);

app.use('/user',userRouter);
app.use('/movie', moviesRouter);
app.use('/bear', bearRouter);

app.listen(PORT, () => {
    console.log('server is running on' + PORT);
});