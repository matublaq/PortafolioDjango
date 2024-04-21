from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template 
from django.shortcuts import render
import datetime
import random
# Create your views here.

def Home(request):

    date = datetime.datetime.now()

    return render(request, 'Home.html', {"fecha_y_hora":date})

def Home2(request):
    return render(request, 'Home2.html')