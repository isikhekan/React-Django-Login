from curses import pair_content
from importlib.metadata import requires
from statistics import mode
from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class Company(AbstractUser):
    id = models.BigAutoField(primary_key=True)
    companyName = models.CharField(max_length=100)

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Company'


class Customer(models.Model):
    relatedCompany = models.ForeignKey(Company, on_delete=models.CASCADE, null=True)
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=50)
    surname = models.CharField(max_length=50)
    email = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.username