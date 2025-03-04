from rest_framework import serializers
from .models import Product, Job

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id", "name", "image", "price", "date_posted"]

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = [
            "id", "title", "category", "company", "date_posted",
            "payment", "job_type", "location_type", "work_hours", "num_employees"
        ]
