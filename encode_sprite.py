import base64
import os

file_path = os.path.join("/Users/claywarren/super", "assets", "sprite-sheet.png")
try:
    with open(file_path, "rb") as image_file:
        encoded_string = base64.b64encode(image_file.read()).decode('utf-8')
        print(f"data:image/png;base64,{encoded_string}")
except FileNotFoundError:
    print(f"Error: File not found at {file_path}")
except Exception as e:
    print(f"An error occurred: {e}")
