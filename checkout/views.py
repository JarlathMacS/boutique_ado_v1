from django.contrib import messages
from django.shortcuts import render, redirect
from django.urls import reverse
from .forms import OrderForm

# Create your views here.


def checkout(request):
    """ A view to return the checkout page """
    bag = request.session.get('bag', {})
    if not bag:
        messages.error(request, "There's nothing in your bag at the moment")
        return redirect(reverse('products'))

    order_form = OrderForm()
    template = 'checkout/checkout.html'
    context = {
        'order_form': order_form,
        'stripe_public_key': 'pk_test_51TOt0N3MLdxfNpHCLhwTIwGkbYYWyEILOpxJGM3'
        'XK7KgYVDbwgHLsHaeL39gk5ZwGdW0K3T8OUr1mH3ouPlbr7mA00gLkySq2X',
        'client_secret': 'test client secret',
    }
    return render(request, template, context)
