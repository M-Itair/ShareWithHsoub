from abc import ABC

class Field(ABC):
    field_type = None

    def __init__(self, max_length=255, unique=None):
        if unique is True:
            self.unique = 'UNIQUE'
        else:
            self.unique = ''

        if max_length:
            self.max_length = max_length

    def __repr__(self):
        colum = []
        if self.field_type == 'VARCHAR':
            colum.append(f'VARCHAR({self.max_length}')
        else:
            co