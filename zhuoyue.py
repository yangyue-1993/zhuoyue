from flask import Flask
from flask import render_template

app = Flask(__name__,template_folder='templates/html')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/user')
def user():
    return render_template('user.html')

if __name__ == '__main__':
    app.run()

