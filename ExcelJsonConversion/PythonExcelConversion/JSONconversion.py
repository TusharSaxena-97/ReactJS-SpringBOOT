import json

# Read the old-style JSON data from a text file
with open('output.json', 'r') as old_data_file:
    old_json_data = json.load(old_data_file)
    #print(old_json_data)

# Create a list to store the new JSON objects
new_json_list = []

# Process each old-style JSON object and convert it to the new format
for old_json in old_json_data:
    print(old_json)

    new_json = {}
    if old_json.get("ProjectName", ""): 
        new_json['projectName'] = old_json.get("ProjectName", "")

    if  old_json.get("frontend", "") : 
        raw_json =  old_json.get("frontend", "").replace(' ','').replace('.','').split(",")
        if raw_json:
            raw_dict = []
            for raw in raw_json:
                 raw_dict.append( {'name' : raw })  
            new_json['frontend'] = raw_dict
    if old_json.get("backend", ""):
        raw_json = old_json.get("backend", "").replace(' ','').replace('.','').split(",")
        if raw_json:
            raw_dict = []
            for raw in raw_json:
                raw_dict.append( {'name' : raw })        
            new_json['backend'] = raw_dict
        
    if old_json.get("database", ""):
        raw_json = old_json.get("database", "").replace(' ','').replace('.','').split(",")
        if raw_json:
            raw_dict = []
            for raw in raw_json:
                raw_dict.append( {'name' : raw })
            new_json['database']  = raw_dict
    if old_json.get("infra",""):
        raw_json = old_json.get("infra","").replace(' ','').replace('.','').split(",")
        if raw_json:
            raw_dict = []
            for raw in raw_json:
                  raw_dict.append( {'name' : raw })
            new_json['infra']  = raw_dict
    if old_json.get("remark",""):
        new_json['remark'] = old_json.get("remark","")

    # new_json = {
    #     "projectName" : old_json.get("ProjectName", ""),
    #     "frontEnd" : old_json.get("frontend", "").replace(' ','').replace('.','').split(","),
    #     "backend" : old_json.get("backend", "").replace(' ','').replace('.','').split(","),
    #     "dataBase" : old_json.get("dataBase", "").replace(' ','').replace('.','').split(","),
    #     "infra" : old_json.get("infra","").replace(' ','').replace('.','').split(","),
    #     "remark" : old_json.get("remark","")
    # }

    # Remove empty strings from lists in the new JSON
    # for key, value in new_json.items():
    #     if isinstance(value, list):
    #         new_json[key] = [item for item in value if item]

    # Append the new JSON object to the list
    new_json_list.append(new_json)

# Convert the list of new JSON objects to JSON format
formatted_json = json.dumps(new_json_list, indent=4)

# Save the formatted JSON to another file
with open('JSONconvert2.json', 'w') as new_json_file:
    new_json_file.write(formatted_json)

print("Data converted, null values handled, and saved as 'new_data.json'.")
