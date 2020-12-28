from django.shortcuts import render
from polls.forms import RegistrationForm


def index(request):
    context_dict = {'form': None}
    form = RegistrationForm()
    context_dict['form'] = form
    return render(request, 'polls/index.html', context_dict)

