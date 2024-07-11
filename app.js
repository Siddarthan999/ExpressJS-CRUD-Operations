const express = require('express');
const app = express()
const PORT  = 3000;
app.use(express.json())


app.get('/', (request, response) => {
    //response.send('Hello Word!');
    response.status(200).json({message:'Hello World!'});
})
app.get('/morning', (request, response) => {
    response.status(200).json({message:'Good Morning!'});
})


// const cityData = require('./data/cityData')

// app.get('/cityData', (request, response) => {
//     response.status(200).json(cityData)
// })
// app.get('/api/v1/cityData', (request, response) => {
//     response.status(200).json(cityData)
// })


const cityRoute = require('./routes/cityRoute')
app.use('/api/v1/Cities', cityRoute)


app.listen(PORT, () => {
    console.log(`Server started running at http://localhost:${PORT}/`);
})