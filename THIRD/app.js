const express = require('express');
const app = express();

// app.set('view engine', 'ejs');
// app.engine('ejs', require('ejs').__express);

app.get('/users/:id/:username', (req, res)=>{
    let user_id = req.params.id, 
        username = req.params.username;
    res.render('index.ejs',{id: user_id, username:username});
});

app.listen(3000,()=>{
    console.log('server started at port 3000');
})