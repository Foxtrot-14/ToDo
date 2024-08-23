from django.db import models
from django.utils.translation import gettext_lazy as _
import string
import random
from django.contrib.auth.models import User
from .utils import encrypt, decrypt

class Task(models.Model):
    STATUS_CHOICES = [
        ('pending', _('Pending')),
        ('completed', _('Completed')),
    ]
    PRIORITY_CHOICES = [
        ('low', _('Low')),
        ('medium', _('Medium')),
        ('high', _('High')),
    ]
    CATEGORY_CHOICES = [
        ('personal', _('Personal')),
        ('work', _('Work')),
    ]
    
    id = models.CharField(_("ID"), max_length=10, primary_key=True, editable=False)
    _title = models.CharField(_("Title (Encrypted)"), max_length=255)
    _desc = models.CharField(_("Description (Encrypted)"), max_length=255)
    priority = models.CharField(_("Priority"), choices=PRIORITY_CHOICES, max_length=10)
    category = models.CharField(_("Category"), choices=CATEGORY_CHOICES, max_length=10,default="personal")
    adder = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks_added')
    due_date = models.DateField(_("Due Date"))
    status = models.CharField(_("Status"), choices=STATUS_CHOICES, max_length=10)

    def save(self, *args, **kwargs):
        if not self.id:
            self.id = self.generate_unique_id()
        self._title = encrypt(self.title)
        self._desc = encrypt(self.desc)
        super().save(*args, **kwargs)

    def generate_unique_id(self):
        length = 10
        while True:
            id_str = ''.join(random.choices(string.ascii_lowercase, k=length))
            if not Task.objects.filter(id=id_str).exists():
                return id_str

    @property
    def title(self):
        return decrypt(bytes(self._title,'utf-8')) 

    @title.setter
    def title(self, value):
        self._title = str(encrypt(value))  

    @property
    def desc(self):
        return decrypt(bytes(self._desc,'utf-8'))  

    @desc.setter
    def desc(self, value):
        self._desc = str(encrypt(value)) 

    @property
    def percent_completed(self):
        total_subtasks = self.subtasks.count()
        if total_subtasks == 0:
            return 0
        completed_subtasks = self.subtasks.filter(status='completed').count()
        return (completed_subtasks / total_subtasks) * 100

class SubTask(models.Model):
    STATUS_CHOICES = [
        ('pending', _('Pending')),
        ('completed', _('Completed')),
    ]

    id = models.CharField(_("ID"), max_length=10, primary_key=True, editable=False)
    _title = models.CharField(_("Title (Encrypted)"), max_length=255)
    parent_task = models.ForeignKey(Task, verbose_name=_("Parent Task"), on_delete=models.CASCADE, related_name='subtasks')
    status = models.CharField(_("Status"), choices=STATUS_CHOICES, max_length=10)

    def save(self, *args, **kwargs):
        if not self.id:
            self.id = self.generate_unique_id()
        self._title = encrypt(self.title)
        super().save(*args, **kwargs)

    def generate_unique_id(self):
        length = 8
        while True:
            id_str = ''.join(random.choices(string.ascii_lowercase, k=length))
            if not SubTask.objects.filter(id=id_str).exists():
                return id_str

    @property
    def title(self):
        return decrypt(bytes(self._title,'utf-8'))  

    @title.setter
    def title(self, value):
        self._title = str(encrypt(value)) 
