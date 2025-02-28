from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    image = models.URLField()  # Assuming the image is stored as a URL
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date_posted = models.DateField()
    quantity = models.IntegerField()

    def __str__(self):
        return self.name
