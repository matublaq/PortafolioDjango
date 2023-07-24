from django.shortcuts import render

# Create your views here.

def Prueba1(request):
    return render(request, 'Prueba1.html')

def PruebaJS(request):
    return render(request, 'PruebaJS.html')

def PruebaNum(request):
    return render(request, 'PruebaNum.html')