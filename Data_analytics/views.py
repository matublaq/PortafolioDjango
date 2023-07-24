from django.shortcuts import render

# Create your views here.

def Bitcoin(request):
    return render(request, 'Bitcoin.html')