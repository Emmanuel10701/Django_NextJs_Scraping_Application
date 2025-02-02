from django.contrib import admin
from .models import Product  # Import your model

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "image", "link")  # Display fields in admin panel
    search_fields = ("title", "price")  # Enable search by title and price
    list_filter = ("price",)  # Add filtering option

# OR you can register it this way:
# admin.site.register(Product, ProductAdmin)
