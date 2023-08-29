from flask import Flask, jsonify, render_template
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)

app.config["MONGO_URI"] = "mongodb://localhost:27017/resume"
mongo = PyMongo(app)

@app.route('/', methods=['GET'])
def get_data():
   
    user_data = list(mongo.db.personal_detail.find())

    for item in user_data:
        item['_id'] = str(item['_id'])
    return jsonify(user_data)
    
if __name__ == '__main__':
    app.run()
