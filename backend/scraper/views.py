from django.http import JsonResponse
from rest_framework.decorators import api_view
import requests
from bs4 import BeautifulSoup

def scrape_data():
    url = "https://example.com"  # Replace with the real e-commerce store URL
    headers = {"User-Agent": "Mozilla/5.0"}
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        soup = BeautifulSoup(response.text, "html.parser")
        products = []

        for item in soup.select(".product-card"):  # Adjust selector based on the website
            title = item.select_one(".product-title").text.strip()
            price = item.select_one(".product-price").text.strip()
            image = item.select_one("img")["src"]
            link = item.select_one("a")["href"]

            products.append({
                "title": title,
                "price": price,
                "image": image,
                "link": link,
            })
        return products

    return []

@api_view(["GET"])
def get_scraped_data(request):
    data = scrape_data()
    return JsonResponse({"products": data}, safe=False)
