from django.shortcuts import render, HttpResponse


def home(request):
    return render(request, "TorogoZtatsWebApp/home.html")

def about(request):
    return render(request, "TorogoZtatsWebApp/about.html")

def contacto(request):
    return render(request, "TorogoZtatsWebApp/contacto.html")

def login(request):
    return render(request, "TorogoZtatsWebApp/login.html")

def panel_administrativo(request):
    return render(request, "TorogoZtatsWebApp/administracion.html")


