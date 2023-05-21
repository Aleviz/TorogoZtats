from django.shortcuts import render, HttpResponse

from TorogoZtatsWebApp.models import CanastaBasica

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


