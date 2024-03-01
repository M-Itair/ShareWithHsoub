import datetime


class Employee:
    total = 0
    __salary_raise = 1.1

    def __init__(self, first_name, last_name, salary):
        self.first_name = first_name
        self.last_name = last_name
        self.__salary = salary
        Employee.total += 1

    def info(self):
        return f'Name is {self.first_name} {self.last_name}'

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
        cls.__salary_raise = amount

    @classmethod
    def from_sting(cls, sting):
        first_name, last_name, title, salary = sting.split('-')
        salary = int(salary)
        return cls(first_name, last_name, title, salary)

    @staticmethod
    def is_workday(day):
        if day.weekday() == 4 or day.weekday() == 5:
            return "it is not a work day"
        return "Yes, it is a working day"


class Manager(Employee):
    def __init__(self, first_name, last_name, salary, employees):
        super().__init__(first_name, last_name, salary)
        self.employees = employees

    def get_employees(self):
        print("Employees:")
        print("=" * 10)
        employees_list = []
        for number, employee in enumerate(self.employees):
            employees_list.append(f'{number + 1}. {employee.info()}')
        return '\n'.join(employees_list)


class Programmer(Employee):
    def __init__(self, first_name, last_name, salary, language, projects):
        super().__init__(first_name, last_name, salary)
        self.language = language
        self.projects = projects

    def get_projects(self):
        print("Projects:")
        print("=" * 10)
        projects_list = []
        for number, project in enumerate(self.projects):
            projects_list.append(f'{number + 1}. {project.info()}')
        return '\n'.join(projects_list)


class Projects:
    def __init__(self, name, description, days, done):
        self.name = name
        self.description = description
        self.days = days
        self.done = done

    def info(self):
        return f'Project name is {self.name}, it needs {self.days} days, Done: {self.done}'


ahmad = Employee('Ahmad', 'Mohsen', 3500)
ali = Employee('Ali', ',Mahdi', 5000)
najwa = Employee('Najwa', 'Karam', 8000)

anwar = Manager('Anwar', 'Mohammed', 10000, [ahmad, ali, najwa])

print(anwar.get_employees())

print("----" * 10)

Project1 = Projects('DODA', 'TTTTTTT', 10, True)
Project2 = Projects('RODA', 'SSSSSSS', 15, False)
Project3 = Projects('SODA', 'NNNNNNN', 22, False)


itair = Programmer('Itair', 'Saffa', 2500, 'python', [Project1, Project2, Project3])

print(itair.get_projects())
