from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import ProductSerializer
from .models import Products
# Create your views here.
@api_view(['GET'])
def index(request):
    products=Products.objects.all()
    serializer=ProductSerializer(products,many=True)
    return Response(serializer.data)