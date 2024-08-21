from django.contrib import admin
from .models import Task

class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'desc', 'adder', 'due_date', 'status')
    list_filter = ('status', 'adder')
    search_fields = ('title', 'desc')
    ordering = ('-due_date',) 
    readonly_fields = ('id',) 

admin.site.register(Task, TaskAdmin)