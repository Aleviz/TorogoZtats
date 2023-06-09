from django.urls import path

from TorogoZtatsWebApp import views

urlpatterns = [
    path('', views.home, name="Home"),
    path('about',views.about, name="About"),
    path('contacto', views.contacto,name="Contacto"),
    path('login',views.login,name ="Login"),
    path('administracion',views.panel_administrativo,name="Administracion"),
    
    path('canasta/', views.get_canasta, name='get_canasta'),
    path('productos/', views.get_productos, name='get_productos'),

     path('filtrado/', views.filtrado),  
]
