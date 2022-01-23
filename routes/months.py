"""
This file have
the routes, for the server.
"""

from flask import Blueprint, render_template
from models.month import Month
from calendar import Calendar


# routes
months = Blueprint('months', __name__)


@months.route('/')
def home():
    """
    Initial route
    """

    return render_template('index.html')

@months.route('/month/<id>')
def get_month(id):
    """
    Route for render each month.
    Validate and render each page
    according to id passed in the url.

    """

    # validating the month
    if id == '1':
        month = Month('January')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '2':
        month = Month('February')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '3':
        month = Month('March')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '4':
        month = Month('April')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '5':
        month = Month('May')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '6':
        month = Month('June')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '7':
        month = Month('July')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '8':
        month = Month('August')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '9':
        month = Month('September')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '10':
        month = Month('October')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '11':
        month = Month('November')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    elif id == '12':
        month = Month('December')
        month.get_weeks()

        return render_template('calendar.html', month = month)

    else:
        # in case the month is invalid
        return render_template('errors/invalid-month.html')


@months.route('/about')
def about():
    """
    Route for render the about page
    """

    return render_template('about.html')
