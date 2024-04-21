from django.urls import path
from Aleatorio import views

urlpatterns = {
    path('Aleatorio', views.Aleatorio, name='Aleatorio')
}