from rest_framework import serializers
from .models import Product, Job, Rating

class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ["rate", "count"]

class ProductSerializer(serializers.ModelSerializer):
    rating = RatingSerializer()  # Include rating details in the response

    class Meta:
        model = Product
        fields = ["id", "title", "description", "category", "image", "price", "date_posted", "rating"]

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = [
            "id", "title", "category", "company", "date_posted",
            "payment", "job_type", "location_type", "work_hours", "num_employees"
        ]
