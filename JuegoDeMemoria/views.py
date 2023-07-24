from django.http import HttpResponse
from django.template import Template, Context
from django.template.loader import get_template 
from django.shortcuts import render
import datetime
import random

#-----------------------------------------------------------------#

def MemoTest(request):
    date = datetime.datetime.now()

    imagenes_random = [] #Referencia de imagen
    imagenes_random1 = []
    imagenes_random2 = []
    while((len(imagenes_random1) and len(imagenes_random2)) < 6):
        xrandom = random.randint(1, 6)
        if xrandom not in imagenes_random1:
            imagenes_random1.append(xrandom)
        elif xrandom not in imagenes_random2:
            imagenes_random2.append(xrandom)
        else:
            pass
    imagenes_random = imagenes_random1 + imagenes_random2 #2 imaganes de cada una ubicadas aleatoriamenente

    posicion = {} #Posicion de las imagenes en el tablero
    for i, u in zip(range(1, 13), imagenes_random):
        posicion[i] = u


    return render(request, 'MemoTest.html', {"fecha_y_hora":date, "posiciones":posicion, "imagenes":imagenes_random})