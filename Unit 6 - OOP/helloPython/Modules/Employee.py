import datetime
from math import floor
from abc import ABC, abstractmethod


class Employee(ABC):
    total = 0
    __salary_raise = 1.1

    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        Employee.total += 1

    @abstractmethod
    def info(self):
        pass

    @abstractmethod
    def calculate_salary(self):
        pass

    @classmethod
    @abstractmethod
    def from_sting(cls, sting):
        first_name, last_name, title, salary = sting.split('-')
        salary = int(salary)
        return cls(first_name, last_name)

    @staticmethod
    def is_workday(day):
        if day.weekday() == 4 or day.weekday() == 5:
            return "it is not a work day"
        return "Yes, it is a working day"


class Freelancer(Employee):
    def __init__(self, first_name, last_name, hour_rate, work_hour):
        Employee.__init__(self, first_name, last_name)
        self.hour_rate = hour_rate
        self.work_hour = work_hour

    def info(self):
        return f'Name: {self.first_name} {self.last_name}. Job Title: {self.__class__.__name__}; Working HOurs {self.work_hour}'

    def calculate_salary(self):
        return self.hour_rate * self.work_hour

    @classmethod
    def from_sting(cls, sting):
        first_name, last_name, title, hour_rate, work_hour = sting.split('-')
        hour_rate, work_hour = int(hour_rate), int(work_hour)
        return cls(first_name, last_name, hour_rate, work_hour)