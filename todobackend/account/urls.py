from django.urls import path
from .views import register_user,login_user,logout_view
urlpatterns=[
    path('register/',register_user,name="register_view"),
    path('login/',login_user,name="login_view"),
    path('logout/',logout_view,name="log_views")
]