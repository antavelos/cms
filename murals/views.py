from django.shortcuts import render

from rest.models import Strip, Artist

# Create your views here.
def index(request):
    strips = Strip.objects.all()
    
    return render(request, 'murals/index.html', {
        'strips': strips
    })