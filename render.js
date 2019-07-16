const electron = require('electron');
const {ipcRenderer} = electron;
function get_info (e) {
    e.preventDefault();
    const {path} = document.querySelector('input').files[0] ; 
    ipcRenderer.send('videoPathsubmitted',path)
}


ipcRenderer.on('get_video_duration',(event,duration)=>{
    document.querySelector('.result').textContent = `video length : ${Math.floor(duration)}` ;
})
document.querySelector('form').addEventListener('submit',get_info)