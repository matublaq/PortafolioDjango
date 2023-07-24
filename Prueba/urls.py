from django.urls import path
from Prueba import views

urlpatterns = {
    path('Prueba1', views.Prueba1, name='Prueba1'),
    path('PruebaJS', views.PruebaJS, name='PruebaJS'),
    path('PruebaNum', views.PruebaNum, name='PruebaNum')
}