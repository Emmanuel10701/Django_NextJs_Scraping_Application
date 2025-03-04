from django.contrib import admin
from .models import Product, User, Job, Rating  # Import all models

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("title", "price", "image")  # Updated to match the latest model fields
    search_fields = ("title", "price")  # Enable search by title and price
    list_filter = ("price", "category")  # Add filtering option

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "date_joined")
    search_fields = ("name", "email")
    list_filter = ("date_joined",)

@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    list_display = ("title", "company", "payment", "job_type", "location_type")
    search_fields = ("title", "company", "category")
    list_filter = ("job_type", "location_type", "category")

@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ("rate", "count")
    search_fields = ("rate",)
