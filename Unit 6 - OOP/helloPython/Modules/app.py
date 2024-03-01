from Employee import Employee
from Manager import Manager
from Programmer import Programmer, FreeLancerProgrammer


if __name__ == '__main__':
    print(FreeLancerProgrammer.__mro__)
    sara = FreeLancerProgrammer('Sara','Ali', 200, 5, 'PHP', ['Project1', 'Project2'])
    sara.assign_project('iOS App')
    print(sara.projects)

