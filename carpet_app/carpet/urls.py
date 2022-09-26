from django.urls import path
from carpet import views


urlpatterns = [
    path('company/',views.getCompanies),
    path('time/',views.showTime),
    path('order/',views.getCompanies), 
    path('authenticateuser/',views.loginUser),
    path('userregister/',views.register),
    path('userlogout/',views.logoutUser),
    path('company/<int:id>/users',views.getCompanyUsers),
]
