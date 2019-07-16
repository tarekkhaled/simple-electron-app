const electron = require('electron')

const {app} = electron // please go to electron object and search for propery called app and get it 

app.on('ready' , ()=> {

    console.log('App is now ready');
     
})



