from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import get_scraped_data, get_scraped_jobs  # Importing views

urlpatterns = [
    path("scrape/products/", get_scraped_data, name="scrape-products"),
    path("scrape/jobs/", get_scraped_jobs, name="scrape-jobs"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
