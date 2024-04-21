from django.urls import path

from JuegoDeMemoria import views


urlpatterns = {
    path('MemoTest', views.MemoTest, name="JuegoDeMemoria")
}