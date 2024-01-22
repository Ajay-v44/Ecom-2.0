from django.urls import path
from .views import*
urlpatterns = [
path('api/',getProducts,name='getProducts'),
path('product/<str:id>/',getDetailedProduct,name='getDetailedProduct')
]