const express = require('express')
const cors = require('cors');
const res = require('express/lib/response');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) =>{
    res.send('users')
})

const users = [
    {id:0, name: 'sakib khan', email:'shasahibkinkhan@gmail.com', phone: '01914002131'},
    {id:1, name: 'alamin khan', email:'alamin@gmail.com', phone: '01714002131'},
    {id:2, name: 'karim khan', email:'karim@gmail.com', phone: '01814002131'},
    {id:3, name: 'mahaub khan', email:'mahabub@gmail.com', phone: '01614002131'},
    {id:4, name: 'mona khan', email:'mahia@gmail.com', phone: '01554002131'},
    {id:5, name: 'mahiya khan', email:'mahia34@gmail.com', phone: '01554002131'},
	  {id:6, name: 'morium khan', email:'mahia35@gmail.com', phone: '01554002151'},
]

app.get('/users', (req, res) =>{
  const search = req.query.search;

  //use qurry perameters
  if(search){

const searchResult = users.filter(user => user.nmae.toLocaleLowerCase().includes
(search));
res.send(searchResult)

  }

  else{

res.send(users);
  }

   
 res.send(users)   
});

//app.mathod 
app.post('/users', (req, res)=>{
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log('hitting to post', req.body)
  //res.send(JSON.stringify(newUser))
  res.json(newUser)
})

//dynamic api

app.get('/users/:id', (req, res) =>{

    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruts/mangerfazil', (req, res) =>{
    res.send('yum yum frut')
})


app.listen(port, ()=>{
    console.log('Listening to port', port);
})