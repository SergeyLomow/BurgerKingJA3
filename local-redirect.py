from mitmproxy import ctx
import mitmproxy.http

class LocalRedirect:

  def __init__(self):
    ctx.log.info('Loaded redirect addon')

  def request(self, flow: mitmproxy.http.HTTPFlow):
    LST = [
    'burgerkingrus.ru', 
    #'googleapis.com',
    #'yandex.net',
    #'google.com',
    #'appsflyer.com',
    #'mindbox.ru'
    ]

    for ADR in LST:
      if ADR in flow.request.pretty_host:
        ctx.log.info("pretty host is: %s" % flow.request.pretty_host)
        # flow.request.headers=Headers[(b'Huy',b'18sm')]
        flow.request.path="/~~~~~~("+flow.request.host+")~~~~~~/"+flow.request.path
        flow.request.host = "localhost"
        flow.request.port = 8002
        flow.request.scheme = 'http'

addons = [
  LocalRedirect()
]