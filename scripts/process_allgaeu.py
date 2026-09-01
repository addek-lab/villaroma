import os
import glob
from PIL import Image, ExifTags

def fix_orientation(img):
    try:
        for orientation in ExifTags.TAGS.keys():
            if ExifTags.TAGS[orientation] == 'Orientation':
                break
        exif = img._getexif()
        if exif is not None:
            orientation = exif.get(orientation)
            if orientation == 3:
                img = img.rotate(180, expand=True)
            elif orientation == 6:
                img = img.rotate(270, expand=True)
            elif orientation == 8:
                img = img.rotate(90, expand=True)
    except (AttributeError, KeyError, IndexError):
        pass
    return img

def process_images():
    src_dir = "/Users/administrator/Projects/villaroma/assets/Bilder/Allgäu 2026"
    dest_dir = "/Users/administrator/Projects/villaroma/public/images/gallery"
    
    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)

    js_elements = []
    
    for file_path in glob.glob(os.path.join(src_dir, "*.jpg")):
        filename = os.path.basename(file_path)
        name, ext = os.path.splitext(filename)
        
        webp_name = name.lower().replace(" ", "-").replace("_", "-") + ".webp"
        dest_path = os.path.join(dest_dir, webp_name)
        
        try:
            with Image.open(file_path) as img:
                img = fix_orientation(img)
                # Resize if larger than 1200px
                max_size = (1200, 1200)
                img.thumbnail(max_size, Image.Resampling.LANCZOS)
                
                # Save as WebP
                img.save(dest_path, "WEBP", quality=85)
                
                # Add to JS elements
                js_elements.append(f'  {{ optimized: "{webp_name}", original: "{filename}", category: "Reisen & Exkursionen", caption: "Duftreise ins Naturparadies Juli 26" }},')
        except Exception as e:
            print(f"Failed to process {filename}: {e}")

    print("--- JS ARRAY ELEMENTS ---")
    for el in js_elements:
        print(el)

if __name__ == "__main__":
    process_images()
