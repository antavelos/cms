#!/usr/bin/env python
import codecs
import ast

from django.db import IntegrityError

from models import Artist, Strip

def read_file():
	with codecs.open('data.json') as f:
		text = f.read()

	data = ast.literal_eval(text)
	for d in data:
		try:
			artist = Artist.objects.create(name=d['artist'])
			artist.save()
		except IntegrityError:
			artist = Artist.objects.filter(name=d['artist'])[0]
		strip = Strip(artist=artist, title=d['title'], address=d['address'], lat=d['lat'], lng=d['lng'])
		strip.save()