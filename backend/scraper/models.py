from django.db import models
from django.utils import timezone

class Rating(models.Model):
    rate = models.FloatField()
    count = models.PositiveIntegerField()

    def __str__(self):
        return f"Rating: {self.rate} ({self.count} reviews)"

class Product(models.Model):
    id = models.AutoField(primary_key=True)  # Ensures ID matches expected format
    title = models.CharField(max_length=255)
    description = models.TextField(default="No description available")  # Added default value
    category = models.CharField(max_length=100, default="Uncategorized")  # Added default value
    image = models.URLField()  # Image from an external source
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_posted = models.DateTimeField(auto_now_add=True)
    rating = models.OneToOneField(Rating, on_delete=models.CASCADE, related_name="product", null=True, blank=True)  # Made optional

    def __str__(self):
        return self.title

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
