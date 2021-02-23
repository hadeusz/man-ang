import express from 'express';
import mongoose from 'mongoose';

const app = express()

mongoose.connect('mongodb://localhost/subscribers')

app.listen(3000, () => console.log('Server started'));