from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Products(models.Model):
    user = models.ForeignKey(User,  on_delete=models.CASCADE)
    productname = models.CharField(max_length=150)
    image = models.ImageField(upload_to='img')
    brand = models.CharField(max_length=50)
    category = models.CharField(max_length=50)
    info = models.TextField()
    rating = models.DecimalField(max_digits=5, decimal_places=2)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    stockcount = models.IntegerField(default=0)
    createdat = models.DateTimeField(auto_now=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.productname
