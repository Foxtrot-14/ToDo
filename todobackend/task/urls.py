from django.urls import path
from .views import task_list,task_detail
urlpatterns=[
    path('',task_list,name="create-task"),
    path('<str:pk>/',task_detail,name="retrive-task"),
]