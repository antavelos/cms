from itertools import chain
from models import Artist, Strip
from rest_framework import viewsets

from serializers import ArtistSerializer, StripSerializer
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly


# ViewSets define the view behavior.
class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

# class StripViewSet(viewsets.ModelViewSet):
#     queryset = Strip.objects.all()
#     serializer_class = StripSerializer

class StripList(generics.ListAPIView):
    serializer_class = StripSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        queryset = Strip.objects.all()
        term = self.request.QUERY_PARAMS.get('search-strip', None)
        if term is not None:
            queryset_by_title = queryset.filter(title__icontains=term)
            queryset_by_artist = queryset.filter(artist__name__icontains=term)
            queryset = list(chain(queryset_by_title, queryset_by_artist))

        return queryset

