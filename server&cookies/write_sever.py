from http import server
import http
from http.server import HTTPServer, BaseHTTPRequestHandler

class Handler(BaseHTTPRequestHandler):
    
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content_type", 'text/plain;charset=utf-8')
        self.end_headers()

        self.wfile.write("hey,u find me,bro!\nAnd this is a page of:".encode()+self.path[1:].encode())

if __name__ == '__main__':
    server_address = ('',9999)
    httpd = HTTPServer(server_address, Handler)
    httpd.serve_forever()