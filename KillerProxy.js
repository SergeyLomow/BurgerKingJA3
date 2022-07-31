var http = require('http'),
httpProxy = require('http-proxy');
const initCycleTLS = require('cycletls');

httpProxy.createProxyServer({target:'http://localhost:9000'}).listen(8002); // See (†)
var BIdy = "";

http.createServer(function (req, res) {
  BIdy=''
  req.on("data", function (chunk) {
      BIdy += chunk;
      console.log(BIdy);
  });

  (async () => {
    const cycleTLS = await initCycleTLS();
  
    StSymb=req.url  .indexOf(')~~~~~~/')

    Addr="https://"+req.url.slice(8,StSymb)+req.url.slice(StSymb+7)

    BODY=BIdy
    const response = await cycleTLS(Addr, {
      body: BODY,
      ja3: '771,4865-4867-4866-49195-49199-52393-52392-49196-49200-49162-49161-49171-49172-156-157-47-53,0-23-65281-10-11-35-16-5-51-43-13-45-28-21,29-23-24-25-256-257,0',
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:101.0) Gecko/20100101 Firefox/101.0',
      headers: req.headers
    }, req.method);
  
    // console.log(response);

    res.writeHead(response.status, response.headers);
    Respns = response.body
    KJ = typeof(Respns)
    if (KJ == 'object')
      res.end(JSON.stringify(Respns));
    else
    res.end(Respns);
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    // res.end();

    cycleTLS.exit();
  
  })();

}).listen(9000);