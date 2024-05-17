from django.urls import path
from Inicio import views

urlpatterns = {
    path('Home', views.Home, name="Home"),
    path('Home2', views.Home2, name="Home2"), 
    path('Home3', views.Home3, name="Home3")
}