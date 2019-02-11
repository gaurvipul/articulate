let API_URL = null;
let WS_URL = null;

export function getAPI() {
  if (API_URL) {
    return API_URL;
  }
  if (process.env.API_URL) {
    API_URL = process.env.API_URL;
  }
  else {
    const loc = window.location;
    API_URL = `${loc.protocol}//${loc.hostname}:7500`;
  }
  console.log(`locationResolver::getAPI`); // TODO: REMOVE!!!!
  console.log(API_URL); // TODO: REMOVE!!!!
  return API_URL;
}

export function getWS() {
  if (WS_URL) {
    return WS_URL;
  }
  if (process.env.WS_URL) {
    WS_URL = process.env.WS_URL;
  }
  else {
    const loc = window.location;
    if (loc.protocol === 'https:') {
      WS_URL = 'wss:';
    }
    else {
      WS_URL = 'ws:';
    }
    WS_URL += `//${loc.hostname}:7500`;
  }
  console.log(`locationResolver::WS`); // TODO: REMOVE!!!!
  console.log(WS_URL); // TODO: REMOVE!!!!
  return WS_URL;

}
