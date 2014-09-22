from django.contrib.auth.models import User, Group
from rest_framework import serializers

from models import Artist, Strip

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'groups')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = ('id', 'name', 'birthdate', 'strips')


class StripSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()
    class Meta:
        model = Strip
        fields = ('id', 'title', 'artist', 'created', 'address', 'lat', 'lng', 'image_big', 'image_small', 'text')