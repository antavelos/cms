from django.contrib import admin

# Register your models here.

from models import Artist, Strip

admin.site.register(Artist)
admin.site.register(Strip)