const ipc = require('electron').ipcRenderer;

var myVar = setInterval(myTimer, 20000);

function myTimer() {
  var url = window.location.protocol + '//' + window.location.hostname + '/api/v4/users/me/teams/unread'
  console.log(url)
  fetch(url)
    .then(res => res.json())
    .then((json) => {
	ipc.send('unread', json[0].mention_count);
	ipc.send('talks', json[0].msg_count);
    });
}
