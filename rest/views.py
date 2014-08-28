from models import Artist, Strip
from rest_framework import viewsets

from serializers import ArtistSerializer, StripSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# ViewSets define the view behavior.
class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

class StripViewSet(viewsets.ModelViewSet):
    queryset = Strip.objects.all()
    serializer_class = StripSerializer