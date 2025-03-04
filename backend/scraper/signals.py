from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from django.core.mail import send_mail
from django.conf import settings
from .models import Product, Job

@receiver(post_save, sender=Product)
def notify_admin_on_new_product(sender, instance, created, **kwargs):
    if created:
        admin_users = User.objects.filter(is_superuser=True).values_list("email", flat=True)
        if admin_users:
            subject = "New Product Added!"
            message = f"A new product has been added:\n\nName: {instance.name}\nPrice: {instance.price}\n\nCheck it out!"

            send_mail(
                subject,
                message,
                settings.EMAIL_HOST_USER,  # From email
                list(admin_users),  # To email (list of superuser emails)
                fail_silently=False,
            )

@receiver(post_save, sender=Job)
def notify_admin_on_new_job(sender, instance, created, **kwargs):
    if created:
        admin_users = User.objects.filter(is_superuser=True).values_list("email", flat=True)
        if admin_users:
            subject = "New Job Posted!"
            message = f"A new job has been posted:\n\nTitle: {instance.title}\nCompany: {instance.company}\nPayment: {instance.payment}\n\nCheck it out!"

            send_mail(
                subject,
                message,
                settings.EMAIL_HOST_USER,  # From email
                list(admin_users),  # To email (list of superuser emails)
                fail_silently=False,
            )
