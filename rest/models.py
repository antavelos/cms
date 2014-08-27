import os
import uuid

from django.db import models
from django.core.files.storage import FileSystemStorage
from django.conf import settings

# Create your models here.

fs = FileSystemStorage(location=settings.MEDIA_ROOT)

class Artist(models.Model):
    name = models.CharField(max_length=100, blank=False, null=False)
    birthdate = models.DateTimeField(blank=True, null=True)
    text = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'artist'

    def __unicode__(self):
        return self.name

def upload_image(instance=None, filename=None):
    ext = '.png'
    if filename is not None:
        _, ext = os.path.splitext(filename)
    filename = '%s%s' % (uuid.uuid4(), ext)

    return filename

class Strip(models.Model):
    title = models.CharField(max_length=100, blank=False, null=False)
    artist = models.ForeignKey(Artist, related_name='strips')
    created = models.DateTimeField(blank=True, null=True)
    address = models.CharField(max_length=100, blank=True, null=True)
    lat = models.FloatField(blank=True, null=True)
    lng = models.FloatField(blank=True, null=True)
    text = models.TextField(blank=True, null=True)
    image_big = models.ImageField(upload_to=upload_image, max_length=128, blank=True, null=True)
    image_small = models.ImageField(upload_to=upload_image, max_length=128, blank=True, null=True)


    class Meta:
        db_table = 'strip'

    def __unicode__(self):
        return self.title