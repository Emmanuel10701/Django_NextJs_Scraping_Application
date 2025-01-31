from django.urls import path
from .views import get_scraped_data

urlpatterns = [
    path("scrape/", get_scraped_data),
]
