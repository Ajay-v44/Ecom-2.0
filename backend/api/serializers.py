from rest_framework import serializers
from .models import Products
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model=Products
        fields="__all__"
class UserSeralizer(serializers.ModelSerializer):
    name=serializers.SerializerMethodField(read_only=True)
    _id=serializers.SerializerMethodField(read_only=True)
    isAdmin=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin']
    def get_name(self,obj):
        firstname=obj.first_name    
        lastname=obj.last_name 
        name=firstname+' '+lastname
        if name==' ':
            name='Set Name'
        return name
    def get__id(self,obj):
        return obj.id
    def get_isAdmin(self,obj):
        return obj.is_staff

class UserSeralizerWithToken(serializers.ModelSerializer):
    token=serializers.SerializerMethodField(read_only=True)
    class Meta:
        model=User
        fields=['id','_id','username','email','name','isAdmin','token']

    def get_token(self,obj):
        token=RefreshToken.for_user(obj)
        return str(token.access_token)