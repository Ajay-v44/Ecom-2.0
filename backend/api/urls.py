from django.urls import path
from .views import *
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
   
)
urlpatterns = [
    path('api/', getProducts, name='getProducts'),
    path('product/<str:id>/', getDetailedProduct, name='getDetailedProduct'),
    path('users/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/profiles/',getUserProfile,name='getUserProfile')
]
