import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT ||5000;

const app = express();

// Use the cors middleware
app.use(cors());

app.get('/', (req, res)=>{
  res.send('Api is running...');
});

app.get('/api/lawyers',(req,res)=>{
    res.json(products);
});
app.get('/api/lawyers/:id',(req, res)=>{
    const product = products.find((p)=>p._id === req.params.id);
    res.json(product);
});

app.listen(port,()=>console.log(`Server running on port ${port}`))

/*
app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = products.find((p) => p.id === productId);
    
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});
*/ 