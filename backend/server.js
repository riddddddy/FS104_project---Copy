import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js'
import expensesRoutes from './routes/expenses.js'
import cors from 'cors';

import dotenv from 'dotenv'
dotenv.config()

const app = express();
// const port = 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// app.listen(port, () => {
//     console.log(`My example app listening on port ${port}`);
// });

app.use(express.json())

app.use(cors());

app.use('/api/user', userRoutes)

app.use('/api/expenses', expensesRoutes)

//connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server and DB is running on port`, process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error)
    })


// try {
//     await mongoose.connect('mongodb+srv://ridwanyusoff93:s9338492z@cluster0.ewwbw3t.mongodb.net/?retryWrites=true&w=majority');
//     console.log("it is working")
// } catch (error) {
//     handleError(error);
// }
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });
