from django import forms


class RegistrationForm(forms.Form):
    first_name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=32,
        label='First Name'
    )
    last_name = forms.CharField(
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=32,
        label='Last Name'
    )
    email = forms.EmailField(
        widget=forms.TextInput(attrs={'class': 'form-control'}),
        max_length=254,
        label='Email'
    )
