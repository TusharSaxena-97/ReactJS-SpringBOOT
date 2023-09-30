import requests
import json
import json


# Open the text file for reading
file_path = "JSONconvert2.json"

try:
    with open(file_path, "r") as file:
        data = json.load(file)

        # Iterate over each JSON object in the list
        for obj in data:
            # Process each JSON object here
            print(obj)
            url = "http://localhost:9845/project/create"

            payload = json.dumps(obj)
            headers = {
            'Content-Type': 'application/json'
            }
            response = requests.request("POST", url, headers=headers, data=payload)
            #print(response.text)
            
except FileNotFoundError:
    print(f"File {file_path} not found.")
except json.JSONDecodeError as e:
    print(f"Error decoding JSON: {e}")
