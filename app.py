"""
This file have
the configuration for the server,
for execute the server is
the file index.py

"""

from flask import Flask
from routes.months import months


# creating the server
app = Flask(__name__)


# implementing the routes
app.register_blueprint(months)
