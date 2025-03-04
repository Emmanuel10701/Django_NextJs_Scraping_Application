from django.db import models
from django.utils import timezone

class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.ImageField(upload_to='products/', blank=True, null=True)  # Allows optional images
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_posted = models.DateTimeField(default=timezone.now)  # Default added to prevent migration errors
    quantity = models.PositiveIntegerField(default=1)  # Default value added
    link = models.URLField(blank=True, null=True)  # Fixes the admin panel issue

    def __str__(self):
        return self.name

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)  # Ensures unique emails
    date_joined = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Job(models.Model):
    JOB_TYPES = [
        ('full_time', 'Full Time'),
        ('part_time', 'Part Time'),
        ('internship', 'Internship'),
        ('contract', 'Contract'),
    ]

    LOCATION_TYPES = [
        ('onsite', 'On-Site'),
        ('remote', 'Remote'),
        ('hybrid', 'Hybrid'),
    ]

    title = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    date_posted = models.DateTimeField(auto_now_add=True)
    payment = models.DecimalField(max_digits=10, decimal_places=2)
    job_type = models.CharField(max_length=20, choices=JOB_TYPES)
    location_type = models.CharField(max_length=20, choices=LOCATION_TYPES)
    work_hours = models.CharField(max_length=50, blank=True, null=True)  # Optional field
    num_employees = models.PositiveIntegerField(default=1)  # Default value added

    def __str__(self):
        return f"{self.title} at {self.company}"
