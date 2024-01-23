from rest_framework import serializers
from .models import Products
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields="__all__"
class UserSeralizer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'
class UserSeralizerWithToken(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)