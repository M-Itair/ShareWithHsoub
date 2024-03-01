from Employee import Employee, Freelancer


class Programmer(Employee):
    def __init__(self, first_name, last_name, salary, lang, projects=None):
        Employee.__init__(self, first_name, last_name)
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


class FreeLancerProgrammer(Freelancer, Programmer):
    def __init__(self, first_name, last_name, hour_rate, work_hour, lang, projects):
        Freelancer.__init__(self, first_name, last_name, hour_rate, work_hour)
        Programmer.__init__(self, first_name, last_name, lang, projects)
