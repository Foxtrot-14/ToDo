from django.contrib import admin
from .models import Task, SubTask

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'priority', 'due_date', 'status', 'adder')
    search_fields = ('title', 'desc')
    list_filter = ('priority', 'status', 'due_date')

class SubTaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'parent_task', 'status')
    search_fields = ('title',)
    list_filter = ('status', 'parent_task')

admin.site.register(Task, TaskAdmin)
admin.site.register(SubTask, SubTaskAdmin)
