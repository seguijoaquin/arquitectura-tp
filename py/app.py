from flask import Flask, send_file
from time import sleep

import random

app = Flask(__name__)

static_dir = './static/files'

@app.route("/")
def index():
    return 'Hi, Im gunicorn root'

# Sirve un archivo estatico
@app.route("/static/<string:filename>")
def serve_static(filename):
    return send_file('{}/{}'.format(static_dir, filename))

# Simula una llamada a una base de datos con un sleep de un tiempo random de hasta 4 segundos
@app.route('/db')
def db():
    sleep(random.randrange(4))
    return 'DB says Hi'

# Recibe un numero entero por parametro, genera una lista de elementos, la ordena y los devuelve
@app.route('/calc')
def calc():
    for _ in range(10000000):
        pass
    return 'OK'

