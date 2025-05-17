import random
import requests
import time

def main():
    url = "https://integrated-project-2025-1.vercel.app/api/data"

    while True:
        numero = round(random.uniform(0, 2), 1)
        payload = {"value": str(numero)}
        
        response = requests.post(url, json=payload)
        print(f"Enviado: {payload} | Status: {response.status_code}")

        if numero >= 2.0:
            print("Número 2 ou mais foi sorteado. Encerrando loop.")
            break

        time.sleep(5)

if __name__ == "__main__":
    main()
