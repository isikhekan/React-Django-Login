from email.policy import HTTP
from http.client import HTTP_PORT, HTTPResponse
import json
from sqlite3 import Date
from .serializers import CustomerSerializer
from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from rest_framework.response import Response
from django.urls import path
from django.http.response import HttpResponse
import datetime
from rest_framework.decorators import api_view,APIView
from .models import Company
from django.contrib.auth import authenticate,login,logout
from .models import Company,Customer





# Create your views here.


def getCompanies(request):
    return HttpResponse('asdasd')


def showTime(request):
    return HttpResponse(datetime.datetime.now())

@api_view(['GET','POST'])
def loginUser(request):
    if request.method == 'GET':
            return HttpResponse('this is get')
    elif request.method == 'POST':
        ''' this is validating user datas coming from login page'''
        user = authenticate(username = request.data['username'], password = request.data['password'])
        if user is not None:
            login(request,user)
            return HttpResponse(json.dumps({"CompanyOwnerId":user.id, "CompanyName":user.username}), content_type="application/json")
        else:
            print('there no user')
            return HttpResponse('no user')

@api_view(['GET','POST'])
def register(request):
    if request.method=='GET':
        pass    
    elif request.method=='POST':    
        username = request.data['username']
        password = request.data['password']
        email = request.data['email']
        repassword = request.data['repassword']
        if password == repassword:
            if email :
                newUser = Company.objects.create_user(email = email,username = username)
                newUser.set_password(password)
                newUser.save()
                print(newUser)
    return HttpResponse('halan')


def logoutUser(request):
    logout(request)
    print("logged out")
    return HttpResponse("logget out")

@api_view(['GET','POST'])
def getCompanyUsers(request,id):
    if request.method =='GET':
        company = Company.objects.get(id=id)
        companyUsers = Customer.objects.filter(relatedCompany = company)
        serializedUsers = CustomerSerializer(companyUsers,many=True)
    return Response(serializedUsers.data)