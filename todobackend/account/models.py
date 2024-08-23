from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

class Member(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    
    # Replicating fields from the User model
    username = models.CharField(max_length=150, unique=True)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    email = models.EmailField(blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    last_login = models.DateTimeField(null=True, blank=True)
    date_joined = models.DateTimeField(default=timezone.now)
    # Any other fields from the User model

    def __str__(self):
        return self.username

    def save(self, *args, **kwargs):
        # Sync fields with the related User instance
        self.username = self.user.username
        self.first_name = self.user.first_name
        self.last_name = self.user.last_name
        self.email = self.user.email
        self.is_active = self.user.is_active
        self.is_staff = self.user.is_staff
        self.is_superuser = self.user.is_superuser
        self.last_login = self.user.last_login
        self.date_joined = self.user.date_joined
        super().save(*args, **kwargs)
