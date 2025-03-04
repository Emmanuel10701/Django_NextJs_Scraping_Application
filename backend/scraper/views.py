from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from bs4 import BeautifulSoup
from .models import Product, Job, Rating
from .serializers import ProductSerializer, JobSerializer


def scrape_products():
    url = "https://fakestoreapi.com/products"  # Replace with actual product URL
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        products_data = response.json()
        products = []

        for item in products_data:
            title = item["title"]
            description = item.get("description", "")
            category = item.get("category", "")
            image = item.get("image", "")
            price = item.get("price", 0.0)
            rating_data = item.get("rating", {"rate": 0.0, "count": 0})

            # Save rating first
            rating, _ = Rating.objects.get_or_create(rate=rating_data["rate"], count=rating_data["count"])

            # Save product to the database
            product, created = Product.objects.get_or_create(
                title=title,
                defaults={
                    "description": description,
                    "category": category,
                    "image": image,
                    "price": price,
                    "rating": rating,
                }
            )

            products.append({
                "title": title,
                "description": description,
                "category": category,
                "image": image,
                "price": price,
                "rating": rating_data,
            })

        return products

    return []


def scrape_jobs():
    url = "https://remoteok.io/api"  # Replace with actual job board URL
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        jobs_data = response.json()
        jobs = []

        for item in jobs_data:
            title = item.get("title", "")
            company = item.get("company", "")
            category = item.get("category", "")
            payment = item.get("salary", 0.0)
            job_type = item.get("job_type", "full_time")
            location_type = item.get("location", "remote")
            work_hours = item.get("work_hours", "")
            num_employees = item.get("num_employees", 1)

            # Save job to database
            job, created = Job.objects.get_or_create(
                title=title,
                company=company,
                defaults={
                    "category": category,
                    "payment": payment,
                    "job_type": job_type,
                    "location_type": location_type,
                    "work_hours": work_hours,
                    "num_employees": num_employees,
                }
            )

            jobs.append({
                "title": title,
                "company": company,
                "category": category,
                "payment": payment,
                "job_type": job_type,
                "location_type": location_type,
                "work_hours": work_hours,
                "num_employees": num_employees,
            })

        return jobs

    return []


# **Class-Based Views (CBVs)**
class ScrapedDataView(APIView):
    def get(self, request):
        products = scrape_products()
        jobs = scrape_jobs()
        return Response({"products": products, "jobs": jobs})


class ProductListView(APIView):
    def get(self, request):
        products = Product.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)


class JobListView(APIView):
    def get(self, request):
        jobs = Job.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)
