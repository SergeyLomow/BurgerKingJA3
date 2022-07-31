1. Прокиньте прокси до burp-а на мобиле (8000 порт) - заранее установите сертификат
2. В настройках бурпа в Upstream поставьте * | localhost | 8080
3. Запутите mitmproxy: `mitmproxy.exe -s .\local-redirect.py`
4. Запустите KillerProxy: `node .\KillerProxy.js`