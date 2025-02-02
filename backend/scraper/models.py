from django.db import models

class Product(models.Model):
    title = models.CharField(max_length=255)
    price = models.CharField(max_length=50)  # Store as string to keep formatting
    image = models.URLField()
    link = models.URLField()

    def __str__(self):
        return self.title
