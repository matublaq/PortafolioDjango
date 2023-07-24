from django.urls import path
from Data_analytics import views

urlpatterns = {
    path('Bitcoin', views.Bitcoin, name='Bitcoin')
}