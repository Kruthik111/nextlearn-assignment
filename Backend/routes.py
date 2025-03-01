from flask import Blueprint, request, jsonify
from database import users_collection
from models import serialize_user

routes = Blueprint("routes", __name__)

@routes.route("/register", methods=["POST"])
def register():
    data = request.json
    if not all(k in data for k in ("name", "email", "phone", "city")):
        return jsonify({"error": "Missing fields"}), 400
    users_collection.insert_one(data)
    return jsonify({"message": "User registered successfully"}), 201

@routes.route("/users", methods=["GET"])
def get_users():
    users = list(users_collection.find())
    return jsonify([serialize_user(user) for user in users])
