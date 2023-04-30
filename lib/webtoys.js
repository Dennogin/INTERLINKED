export function generateTopServersHTML(gameName, serverList, style) {
  var now = new Date();
  var topServer;
  if (serverList.activeServers.length == 0) topServer =
`  <div class="embed-topserver">
    <p1 class="embed-topserver-title">🔴 No active ${gameName} servers. 🔴</p1>
  </div>`;
  else {
    var server = serverList.activeServers[0];
    topServer =
`  <div class="embed-topserver">
    <p1 class="embed-topserver-title">👑 Top ${gameName} server 👑</p1>
    <br>
    <p2 class="embed-topserver-name">🟢 ${server.name}</p2>
    <br>
    <p2 class="embed-topserver-label">Players: </p2>
    <p2 class="embed-topserver-value">${server.playerCount}/${server.maxPlayerCount}</p2>
    <br>
    <p2 class="embed-topserver-label">Connect: </p2>
    <a href="steam://connect/${server.address}"><p2 class="embed-topserver-value">steam://connect/${server.address}</p2></a>
    <br>
    <p2 class="embed-topserver-label">IP: </p2>
    <p2 class="code embed-topserver-value">${server.address}</p2>
    <br>
    <p2 class="embed-topserver-label">Map: </p2>
    <p2 class="code embed-topserver-value">${server.mapName}</p2>
    <br>
  </div>`;
  }
  var result =
`<html>
<head>
<meta charset="UTF-8">
<title>
INTERLINKED
</title>
<link rel="icon" href="https://github.com/GleammerRay/INTERLINKED/blob/main/assets/logo.png?raw=true" type="image/icon type">
</head>
<style>
${style}
</style>
<body>
<a target="_blank" href="https://github.com/GleammerRay/INTERLINKED">
<div class="embed-author">
<div class="image-cropper">
<img class="embed-author-iconurl" src="https://github.com/GleammerRay/INTERLINKED/blob/main/assets/logo.png?raw=true" padding="50" width="15">
</div>
<p1 class="embed-author-name">INTERLINKED</p1>
</div>
</a>
<div class="embed-content">
  <div class="embed-status">
    <p2 class="embed-status-label">🖥️ Online servers: </p2>
    <p2 class="embed-status-value">${serverList.serverCount}</p2>
    <br>
    <p2 class="embed-status-label">🤗 Online players: </p2>
    <p2 class="embed-status-value">${serverList.playerCount}</p2>
    <br>
  </div>
  ${topServer}
  <div class="embed-footer">
  <div class="image-cropper">
  <img class="embed-footer-iconurl" src="https://cdn.discordapp.com/attachments/1005272489380827199/1005581705035399198/gleam.jpg" padding="50" width="15">
  </div>
  <p2 class="embed-footer-text">Made by Gleammer (nice) • ${now.toUTCString()}</p2>
  </div>
</div>
</body>
</html>`;
  return result;
}