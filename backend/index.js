const express = require('express')
const cors = require('cors')
const path = require('path')

const server = express();
server.use(cors())
server.use(express.json())

const _dirname = path.resolve();

const dataRoutes = require('./Routes/dataRoutes');
server.use('/api', dataRoutes)

if (process.env.NODE_ENV === 'production') {
    server.use(express.static(path.join(_dirname, '/frontend/dist')))
    server.get('*', (req, res) => {
        res.sendFile(path.resolve(_dirname, 'frontend', 'dist', 'index.html'))  
    });
}

const PORT = 8000;
server.listen(PORT, ()=> {
    console.log(`Server Listening on Port ${PORT}...`)
})
