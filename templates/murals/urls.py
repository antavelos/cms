from django.conf.urls import patterns, url, include
from rest_framework.urlpatterns import format_suffix_patterns
import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
)