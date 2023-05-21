from django.db import models

class Categoria(models.Model):
    nombre_categoria=models.CharField(max_length=15)
    nota=models.CharField(max_length=20)

class Producto(models.Model):
    nombre_producto=models.CharField(max_length=20)
    unidad_medida=models.CharField(max_length=10)
    cantidad=models.IntegerField()
    categoria=models.ForeignKey(Categoria,null=True,blank=True,on_delete=models.CASCADE)

class CanastaBasica(models.Model):
    producto=models.ForeignKey(Producto,null=True,blank=True,on_delete=models.CASCADE)
    precio=models.FloatField()
    agno=models.IntegerField()