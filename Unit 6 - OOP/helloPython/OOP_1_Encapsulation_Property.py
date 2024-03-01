import datetime


class Employee:
    total = 0
    __salary_raise = 1.1

    def __init__(self, first_name, last_name, title, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.title = title
        self.__salary = salary
        Employee.total += 1

    def info(self):
        return f'Name is {self.first_name} {self.last_name}, Title is {self.title}'

    @property
    def salary(self):
        return self.__salary

    @salary.setter
    def salary(self, salary):
        if salary <= 0:
            raise ValueError
        self.__salary = salary

    @classmethod
    def __change_raise(cls, amount):
        cls.salary_raise = amount

    @classmethod
    def from_sting(cls,sting):
        first_name, last_name, title, salary = sting.split('-')
        salary = int(salary)
        return cls(first_name,last_name,title,salary)

    @staticmethod
    def is_workday(day):
        if day.weekday() == 4 or day.weekday() == 5:
            return "it is not a work day"
        return "Yes, it is a working day"


ahmad = Employee.from_sting('Ahmad-Kamel-Engineer-2500')

print(ahmad.info())

ali = Employee('Ali', 'Husain', 33, 2300)

print(ali.info())

date = datetime.date(2023, 11, 25)

print(Employee.is_workday(date))
print(ali.is_workday(date))

print('-------------------------------------------------------')

print(ahmad.salary)
ahmad.salary = 4000
print(ahmad.salary)