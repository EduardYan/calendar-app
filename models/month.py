"""
This module have
the class for have
a model of a month.

"""

from calendar import Calendar

class Month:
    """
    Model for a month.

    -- Properties pass to constructor--
    name:str,

    """

    year = 2022

    def __init__(self, name:str) -> None:
        # values
        self.name = name
        self.id = None # undefined

        # validating for assing
        if self.name == 'January':
            self.id = 1
        elif self.name == 'February':
            self.id = 2
        elif self.name == 'March':
            self.id = 3
        elif self.name == 'April':
            self.id = 4
        elif self.name == 'May':
            self.id = 5
        elif self.name == 'June':
            self.id = 6
        elif self.name == 'July':
            self.id = 7
        elif self.name == 'August':
            self.id = 8
        elif self.name == 'September':
            self.id = 9
        elif self.name == 'October':
            self.id = 10
        elif self.name == 'November':
            self.id = 11
        elif self.name == 'December':
            self.id = 12


    def get_weeks(self):
        """
        Return a list with a list
        for each week of the month
        of name passed for parameter
        in the constructor.
        """

        # in case a error to get the weeks
        try:
            # getting
            calendar = Calendar()
            weeks = calendar.monthdayscalendar(self.year, self.id)

            self.weeks = weeks # asssing

            return True

        except:
            return False
