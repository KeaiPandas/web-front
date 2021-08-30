from http.server import HTTPServer,BaseHTTPRequestHandler
from http import cookies
from urllib.parse import parse_qs
from html import escape as html_escape

form = '''
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>小心，网站正在读取你的信息</title>
</head>
<body>
    <p>
        {}
    </p>
    <form method="POST">
        <label>为了更好的为您服务，请输入年龄
            <input type="text" name="yourage">
        </label>
        <button type="submit">傻乎乎的提交年龄~</button>
    </form>
</body>
</html>
'''

class AgeHandler(BaseHTTPRequestHandler):
    def do_POST(self) -> None:
        length = int(self.headers.get('Content-length',0))
        data = self.rfile.read(length).decode()
        your_age = parse_qs(data)['yourage'][0]

        c = cookies.SimpleCookie()
        c['yourage'] = your_age
        c['yourage']['domain'] = 'localhost'
        c['yourage']['max-age'] = 60

        self.send_response(303)
        self.send_header('Location','/')
        self.send_header('Set-Cookie',c['yourage'])