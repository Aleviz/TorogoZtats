from django.shortcuts import render, HttpResponse
from django.http import JsonResponse

from TorogoZtatsWebApp.models import CanastaBasica, Producto

def home(request):
    canastas_basicas=CanastaBasica.objects.all()  
    return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canastas_basicas})

def about(request):
    return render(request, "TorogoZtatsWebApp/about.html")

def contacto(request):
    return render(request, "TorogoZtatsWebApp/contacto.html")

def login(request):
    return render(request, "TorogoZtatsWebApp/login.html")

def panel_administrativo(request):
    return render(request, "TorogoZtatsWebApp/administracion.html")

def get_canasta(_request):
    canasta = list(CanastaBasica.objects.values())
    if(len(canasta) > 0):
        data ={'message':"Success",'canasta':canasta}
    else:
        data={'message': 'Not Found'}
    return JsonResponse(data) 


def get_productos(_request):
    productos = list(Producto.objects.values())
    if(len(productos) > 0):
        data ={'message':"Success",'productos':productos}
    else:
        data={'message': 'Not Found'}
    return JsonResponse(data) 


