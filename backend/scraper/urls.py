from django.urls import path
from .views import get_scraped_data

urlpatterns = [
    path("scrape/", get_scraped_data),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)