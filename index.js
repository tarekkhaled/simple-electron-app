/* this is the page loved by electron and get the code to execute from it*/
/* electron app and this file run on command level  */

const electron = require('electron')
const ffmpeg = require('fluent-ffmpeg')
const {app,BrowserWindow,ipcMain} = electron // please go to electron object and search for propery called app and get it 
let window ; 
app.on('ready' , ()=> {
    
     window = new BrowserWindow({
        webPreferences : {
            nodeIntegration:true
        }
    });
    /* the window above will be seperatly different from index.js */
    window.loadFile('./index.html')

    
})

ipcMain.on('videoPathsubmitted',(event,path)=>{ /* event to know who make this event , path the date we want */
    console.log(path)
   ffmpeg.ffprobe(path,(err,metadate)=>{
    window.webContents.send(
        'get_video_duration',
        metadate.format.duration
    )
   })
})




process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';




