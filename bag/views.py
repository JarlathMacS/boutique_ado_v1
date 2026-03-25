from django.shortcuts import render

# Create your views here.


def view_bag(request):
    """View function to return the bag page."""
    return render(request, 'bag/bag.html')
