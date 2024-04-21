from django.urls import path
from Typing import views

urlpatterns = {
    path('Typing', views.Typing, name='Typing')
}