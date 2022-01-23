"""
This is the principal
file for execute the server
for the calendar.
"""

from app import app

if __name__ == '__main__':
    # running the server port 5000 for default
    app.run(host = '0.0.0.0', debug = True)
