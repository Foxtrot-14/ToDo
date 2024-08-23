from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from .models import Member

@receiver(post_save, sender=User)
def create_member(sender, instance, created, **kwargs):
    if created and not instance.is_superuser and not instance.is_staff:
        Member.objects.create(user=instance)
