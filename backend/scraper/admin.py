from django.contrib import admin
from .models import Product  # Import your model

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("name", "price", "image")  # Corrected field names
    search_fields = ("name", "price")  # Enable search by name and price
    list_filter = ("price",)  # Add filtering option
