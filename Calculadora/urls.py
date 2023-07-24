from django.urls import path
from Calculadora import views

urlpatterns = {
    path('Calculadora', views.Calculadora, name='Calculadora'),
}