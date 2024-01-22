from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ProductSerializer
from .models import Products
# Create your views here.
@api_view(['GET'])
def getProducts(request):
    products=Products.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)
@api_view(['GET'])
def getDetailedProduct(request,id):
    products=Products.objects.get(_id=id)
    serializer=ProductSerializer(products,many=False)
    return Response(serializer.data)