from django.urls import path
from .views import register_user,login_user
urlpatterns=[
    path('register/',register_user,name="register_view"),
    path('login/',login_user,name="login_view")
]