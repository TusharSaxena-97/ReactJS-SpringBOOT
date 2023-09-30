import pandas as pd

# Load Excel file into a DataFrame
df = pd.read_excel('Data.xlsx', engine='openpyxl')

# Convert DataFrame to JSON
json_data = df.to_json(orient='records', indent=4)

# Save JSON data to a file
with open('output.json', 'w') as json_file:
    json_file.write(json_data)

print("Excel data converted to JSON and saved as 'output.json'.")