from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests
from bs4 import BeautifulSoup
from .models import Product, Job
from .serializers import ProductSerializer, JobSerializer

def scrape_products():
    url = "https://example.com/products"  # Replace with actual product URL
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        products = []

        for item in soup.select(".product-card"):  # Adjust selector based on the website
            name = item.select_one(".product-title").text.strip()
            price = item.select_one(".product-price").text.strip()
            image = item.select_one("img")["src"]
            link = item.select_one("a")["href"]

            # Save to database
            product, created = Product.objects.get_or_create(
                name=name,
                defaults={"price": price, "image": image}
            )

            products.append({
                "name": name,
                "price": price,
                "image": image,
                "link": link,
            })
        return products

    return []

def scrape_jobs():
    url = "https://example.com/jobs"  # Replace with actual job board URL
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        jobs = []

        for item in soup.select(".job-listing"):  # Adjust selector based on the website
            title = item.select_one(".job-title").text.strip()
            company = item.select_one(".company-name").text.strip()
            category = item.select_one(".job-category").text.strip()
            date_posted = item.select_one(".date-posted").text.strip()
            payment = item.select_one(".salary").text.strip()
            job_type = item.select_one(".job-type").text.strip()
            location_type = item.select_one(".location-type").text.strip()
            work_hours = item.select_one(".work-hours").text.strip()
            num_employees = item.select_one(".num-employees").text.strip()

            # Save to database
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
                "date_posted": date_posted,
                "payment": payment,
                "job_type": job_type,
                "location_type": location_type,
                "work_hours": work_hours,
                "num_employees": num_employees,
            })
        return jobs

    return []

@api_view(["GET"])
def get_scraped_data(request):
    products = scrape_products()
    jobs = scrape_jobs()
    return JsonResponse({"products": products, "jobs": jobs}, safe=False)

@api_view(["GET"])
def get_products(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return JsonResponse(serializer.data, safe=False)

@api_view(["GET"])
def get_jobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return JsonResponse(serializer.data, safe=False)
