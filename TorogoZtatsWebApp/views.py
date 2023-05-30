from django.shortcuts import render, HttpResponse
from django.http import JsonResponse

from TorogoZtatsWebApp.models import CanastaBasica, Producto, Categoria

def home(request):
    canastas_basicas=CanastaBasica.objects.all()  
    return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canastas_basicas})



def filtrado(request):
    
    # FILTRADO SOLO DE PRODUCTO
    if request.GET["pro"]:
        pro = request.GET["pro"]
        p = Producto.objects.get(nombre_producto=pro)
        canasta_basica = CanastaBasica.objects.filter(producto=p)
        for canasta in canasta_basica:
            print(canasta.agno)
        return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canasta_basica})

    # FILTRADO SOLO DE CATEGORIA
    elif request.GET["cat"] :
        cat = request.GET["cat"]
        c = Categoria.objects.get(nombre_categoria=cat)
        p = Producto.objects.get(categoria = c)
        canasta_basica = CanastaBasica.objects.filter(producto=p)
        for canasta in canasta_basica:
            print(canasta.agno)
        return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canasta_basica})
    

    # FILTRADO SOLO DE AÑO
    elif request.GET["year"] :
        year = request.GET["year"]
        canasta_basica = CanastaBasica.objects.filter(agno=year)
        for canasta in canasta_basica:
            print(canasta.agno)
        return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canasta_basica})


    # FILTRADO DE PRODUCTO Y AÑO
    elif request.GET["pro"] and request.GET["year"]  :
        
        pro = request.GET["pro"]
        p = Producto.objects.get(nombre_producto=pro)
        year = request.GET["year"]

        canasta_basica = CanastaBasica.objects.filter(producto=p).filter(agno=year)

        for canasta in canasta_basica:
            print(canasta.agno)
        return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canasta_basica})
    
    # FILTRADO DE CATEGORIA Y AÑO
    elif request.GET["cat"] and request.GET["year"]  :
        cat = request.GET["cat"]
        c = Categoria.objects.get(nombre_categoria=cat)
        p = Producto.objects.get(categoria = c)
    
        year = request.GET["year"]

        canasta_basica = CanastaBasica.objects.filter(producto=p).filter(agno=year)

        for canasta in canasta_basica:
            print(canasta.agno)
        return render(request, "TorogoZtatsWebApp/home.html", {"canastas_basicas":canasta_basica})
    

    else:
        mensaje = "no hay"
        return HttpResponse(mensaje)


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


