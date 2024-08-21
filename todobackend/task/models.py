from django.db import models
from django.utils.translation import gettext_lazy as _
import string
import random
from django.contrib.auth.models import User

class Task(models.Model):
    STATUS_CHOICES = [
        ('pending', _('Pending')),
        ('completed', _('Completed')),
    ]
    
    id = models.CharField(_("ID"), max_length=10, primary_key=True, editable=False)
    title = models.CharField(_("Title of the Task"), max_length=50)
    desc = models.CharField(_("Description"), max_length=200)
    adder = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks_added')
    due_date = models.DateTimeField(_("Due Date"))
    status = models.CharField(_("Status"), max_length=10, choices=STATUS_CHOICES, default='pending')

    def save(self, *args, **kwargs):
        if not self.id:
            self.id = self.generate_unique_id()
        super().save(*args, **kwargs)

    def generate_unique_id(self):
        length = 10
        while True:
            id_str = ''.join(random.choices(string.ascii_uppercase, k=length))
            if not Task.objects.filter(id=id_str).exists():
                return id_str
