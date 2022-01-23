"""
This is the principal
file for execute the server
for the calendar.
"""

from app import app

if __name__ == '__main__':
    app.run(host = '0.0.0.0', debug = True)
