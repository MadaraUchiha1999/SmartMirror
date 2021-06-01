const { app, BrowserWindow } = require('electron');
const os =require('os-utils');
const path = require('path');
const { Script } = require('vm');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 500,
    height: 250,
    frame: false,
    resizable: false,
    icon: path.join(app.getAppPath(), 'build/icon.png'),
  webPreferences:{
    nodeIntegration:true,
    contextIsolation: false
  }
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
  
   
 /* let ts = Date.now();

  let date_ob = new Date(ts);
  let date = date_ob.getDate();
  let month = date_ob.getMonth() + 1;
  let year = date_ob.getFullYear();
  
  
  // prints date & time in YYYY-MM-DD format
  console.log(date + "-" + month + "-" + year);

     setInterval(() => {
      var time = Date.now();
      var komischeZeit = new Date(time);
      var Sekunden = komischeZeit.getSeconds();
      var Minuten = komischeZeit.getMinutes();
      var Stunden = komischeZeit.getHours(); 

      
      
     mainWindow.webContents.send('Stunden');
     mainWindow.webContents.send('Minuten');
     mainWindow.webContents.send('Sekunden'); 
     /* mainWindow.webContents.fromId('Stunden');
      mainWindow.webContents.fromId('Minuten');
      mainWindow.webContents.fromId('Sekunden'); */
    /* document.getElementById('Stunden').innerHTML = Stunden;
      document.getElementById('Minuten').innerHTML = Minuten; 
     document.getElementById('Sekunden').innerHTML = Sekunden; */
     
 // console.log(Stunden + ":" + Minuten + ":" + Sekunden)  
  //   }, 1000); 
   
    
        
    
   
    
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

