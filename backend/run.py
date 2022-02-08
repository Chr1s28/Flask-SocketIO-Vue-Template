from flask import Flask, render_template
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)

socketio = SocketIO(app, logger=True, cors_allowed_origins="*")
CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/')
def main():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', debug=True, port=5000)