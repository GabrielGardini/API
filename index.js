const express = require('express')
const axios = require('axios')

const app =express()

app.listen('3000')


//GET

// app.route('/').get((req, res) => res.send('hello'))
// app.route('/lucas').get((req, res) => res.send('hello lucas'))

//////////////////////////////////////////////////

//POST 

//middleware
// app.use(express.json())

// app.route('/').post((req,res)=> res.send(req.body))

/////////////////////////////////////////////////////////////////////////

//PUT

// let author= "Gabriel"
// app.use(express.json())

// app.route('/').get((req,res)=>res.send(author))
// app.route('/').put((req,res)=> {
//     author = req.body.author;
//     res.send(author);
// } )
/////////////////////////////////////////////////////////////////////////////

//DELETE

// let author = "Gabriel"
// app.route('/:identificador').delete((req,res)=> {
//     author=""
//     res.send(req.params.identificador)
// })

///////////////////////////////////////////////////////
//TIOPS DE PARAMETROS

//BODY
// app.use(express.json())
// app.route('/').post((req,res)=>{
//     const {nome, cidade} = req.body
//     res.send(`meu nome é ${nome} e minha cidade é ${cidade}`)
// })

////////////////////////////////////

//ROUTE
// app.use(express.json())
// app.route('/:nome').get((req,res)=>{
//     res.send(req.params.nome)
// })

//////////////////////////////////////

//QUERY
// app.route('/').get((req,res)=>{
//     res.send(req.query)
// })


////////////////////////////////////////////
//CONSUMIR API EXTERNA NO BACKEND

app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/gabrielgardini')
    .then(result => res.send(`<img src="${result.data.avatar_url}"/>`))
    .catch(error => console.log(error))
})