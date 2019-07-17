from django.urls import path, re_path
from . import views

app_name = 'groups'

urlpatterns = [
    path('', views.ListGroups.as_view(), name='all'),
    path('new/', views.CreateGroup.as_view(), name='create'),
    re_part(r'^posts/in/(?P<slug>[-\w]+)/$',
            views.SingleGroup.as_view(),
            name='single'),
]
