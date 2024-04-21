from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template 
from django.shortcuts import render
import datetime
import random
# Create your views here.


def Calculadora(request):
    return render(request, 'Calculadora.html')