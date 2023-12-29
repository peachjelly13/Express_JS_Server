const express = require('express');
const app = express();
const { products, people } = require('./data');

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a><br><a href="/api/people">People</a>');
});

app.get('/api/products', (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name } = product;
    return { id, name };
  });
  res.json(newProduct);
});

app.get('/api/people', (req, res) => {
    const peopleList = people.map((person) => {
        const { id, name } = person;
        return { id, name };
    });
    res.json(peopleList);
});

app.get('/api/products/:productID', (req, res) => {
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (singleProduct) {
    res.json(singleProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.get('/api/people/:nameOfperson', (req, res) => {
    const { nameOfperson } = req.params;
    const person = people.find((peep) => peep.name.toLowerCase() === nameOfperson.toLowerCase());
    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ message: 'Person not found' }); // Updated error message for person not found
    }
});

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

//This is how we create different paths for different things we want to access 
//This is how we access values
//These are route parameters
//routes can get very long as well for example '/api/people/:nameOfperson' we can have 
//alot of parameters after this as well