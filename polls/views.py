from django.shortcuts import render
from django.contrib import messages
from polls.forms import RegistrationForm


def index(request):
    context_dict = {'form': None}
    form = RegistrationForm()

    if request.method == 'GET':
        context_dict['form'] = form
    elif request.method == 'POST':
        form = RegistrationForm(request.POST)
        context_dict['form'] = form
        if form.is_valid():
            cleaned_data = form.cleaned_data
            print(cleaned_data)
            messages.success(request, 'Your data has been submitted')
        else:
            messages.error(request, 'Something is wrong in form.')

    return render(request, 'polls/index.html', context_dict)

