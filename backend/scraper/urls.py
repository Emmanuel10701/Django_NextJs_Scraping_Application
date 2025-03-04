from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from .views import ScrapedDataView, ProductListView, JobListView

urlpatterns = [
    path('get-scraped-data/', ScrapedDataView.as_view(), name='get_scraped_data'),
    path('get-products/', ProductListView.as_view(), name='get_products'),
    path('get-jobs/', JobListView.as_view(), name='get_jobs'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
