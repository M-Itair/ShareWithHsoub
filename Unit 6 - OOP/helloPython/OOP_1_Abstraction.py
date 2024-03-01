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


class Manager(Employee):
    def __init__(self, first_name, last_name, salary, employees=None):
        super().__init__(first_name, last_name)
        self.__salary = salary
        if employees is None:
            employees = []
        self.employees = employees

    def get_employees(self):
        print("Employees:")
        print("=" * 10)
        employees_list = []
        for number, employee in enumerate(self.employees):
            employees_list.append(f'{number + 1}. {employee.info()}')
        return '\n'.join(employees_list)

    def info(self):
        return f'Name: {self.first_name} {self.last_name}. Job Title: {self.__class__.__name__}'

    def calculate_salary(self):
        return self.__salary

    @classmethod
    def from_sting(cls, sting):
        first_name, last_name, title, salary = sting.split('-')
        salary = int(salary)
        return cls(first_name, last_name, salary)


class Programmer(Employee):
    def __init__(self, first_name, last_name, salary, lang, projects=None):
        super().__init__(first_name, last_name)
        self.__salary = salary
        self.lang = lang
        self.projects = []
        if projects is None:
            self.projects = []
        elif type(projects) is list:
            self.projects += projects
        elif type(projects) is str:
            self.projects.append(projects)
        else:
            self.projects.append(str(projects))

    def info(self):
        return f'Name: {self.first_name} {self.last_name}. Job Title: {self.__class__.__name__}'

    def calculate_salary(self):
        return self.__salary

    @classmethod
    def from_sting(cls, sting):
        first_name, last_name, title, salary, lang = sting.split('-')
        salary = int(salary)
        return cls(first_name, last_name, salary, lang)

    def assign_project(self, project):
        if type(project) is str:
            self.projects.append(project)
        elif type(project) is list:
            self.projects += project
        else:
            self.projects.append(str(project))


print()

john = Manager('John', 'Abas', 5000)
print(john.info())

print('==' * 10)

sam = Programmer('Sam', 'Sera', 3000, 'python', True)
print(sam.info())

print(sam.projects)

sam.assign_project(['Project 1', 'project 2'])
print(sam.projects)
