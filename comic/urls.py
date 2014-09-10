
from django.conf.urls import url, patterns, include
from django.contrib.auth.models import User, Group
from django.conf import settings
from django.contrib import admin

from rest_framework import viewsets, routers

from rest import views

admin.autodiscover()

# ViewSets define the view behavior.
class UserViewSet(viewsets.ModelViewSet):
    model = User

class GroupViewSet(viewsets.ModelViewSet):
    model = Group


# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'artists', views.ArtistViewSet)
# router.register(r'strips', views.StripList)


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browseable API.
urlpatterns = patterns('',
    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('rest.urls')),
    url(r'^', include('murals.urls')),
    url(r'^api/', include(router.urls)),
    url(r'^api/strips/(?P<pk>[0-9]+)/$', views.StripDetail.as_view()),
    url(r'^api/strips/$', views.StripList.as_view()),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^media/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT
    })
)