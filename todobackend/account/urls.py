from django.urls import path
from .views import LoginView, RegistrationView,CustomTokenRefreshView
urlpatterns = [
    path("signin/",RegistrationView.as_view(),name="register_view"),
    path("login/",LoginView.as_view(),name="login_view"),
    path("refresh/",CustomTokenRefreshView.as_view(),name="refresh_token")
]

