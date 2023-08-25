# from flask import Flask, jsonify, request,send_file
# from pymongo import MongoClient
# app = Flask(__name__)
# @app.route('/')
# def hello():
#     return "hello"

from flask import Flask,jsonify
from pymongo import MongoClient

app = Flask(__name__)

app.config['MONGO_URI'] = 'mongodb://localhost:27017/resume'
mongo = MongoClient(app.config['MONGO_URI'])
db = mongo.resume

collection = db.personal_detail

@app.route('/get_data_json', methods=['GET'])
def get_data_json():
    data = list(collection.find({}))
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
