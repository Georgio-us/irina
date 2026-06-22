import os
from PIL import Image

def crop_and_save(img_path, output_dir):
    os.makedirs(output_dir, exist_ok=True)
    img = Image.open(img_path)
    
    crops = {
        # 1. Hero photo of Irina (right side of hero section)
        "hero_photo.png": (540, 104, 1440, 660),
        
        # 2. Vase and candle photo
        "vase_candle.png": (80, 720, 496, 1036),
        
        # 3. Mentor 1.0 card image
        "mentor_1_card.png": (116, 2048, 680, 2452),
        
        # 4. Selling Star card image (pink blazer with mic)
        "selling_star_card.png": (760, 2048, 1360, 2452),
        
        # 5. Mentor 2.0 photo (small portrait)
        "mentor_2_photo.png": (132, 2792, 380, 3096),
        
        # 6. Selling Star photo details (pink blazer with mic, small portrait)
        "selling_star_photo.png": (768, 2792, 1072, 3096),
        
        # 7. Testimonials (3 photos of students)
        "testimonial_1.png": (156, 3560, 292, 3832),
        "testimonial_2.png": (544, 3560, 684, 3832),
        "testimonial_3.png": (936, 3560, 1072, 3832),
        
        # 8. Video testimonials (4 video thumbnails with play icons)
        "video_1.png": (160, 3948, 388, 4104),
        "video_2.png": (432, 3948, 648, 4104),
        "video_3.png": (652, 3948, 868, 4104),
        "video_4.png": (872, 3948, 1088, 4104),
        
        # 9. Not alone photo (Irina white blazer looking left)
        "not_alone_photo.png": (360, 4628, 632, 4964),
        
        # 10. Blog large photo (woman looking out the window)
        "blog_large_photo.png": (88, 5276, 492, 5684),
        
        # 11. Blog three small photos
        "blog_small_1.png": (88, 5704, 492, 5888),
        "blog_small_2.png": (512, 5704, 916, 5888),
        "blog_small_3.png": (940, 5704, 1360, 5888),
        
        # 12. About photo (Irina sitting on the couch)
        "about_photo.png": (80, 6252, 644, 6888),
        
        # 13. Wavy background behind "Узнайте свой уровень" card
        "wave_bg_1.png": (0, 1100, 1440, 1500),
        
        # 14. Wavy background behind "Не обязательно идти одной"
        "wave_bg_2.png": (0, 4500, 1440, 5100),
        
        # 15. Footer background
        "footer_bg.png": (0, 7400, 1440, 7955),
        
        # 16. Media Logos section (Forbes, Vogue, etc.)
        "media_logos.png": (80, 4180, 1360, 4480)
    }
    
    for filename, bbox in crops.items():
        cropped = img.crop(bbox)
        cropped_path = os.path.join(output_dir, filename)
        cropped.save(cropped_path)
        print(f"Saved {cropped_path} ({cropped.width}x{cropped.height})")

if __name__ == "__main__":
    crop_and_save(
        "/Users/georgious/Desktop/IRINA/research_images/mockup.png",
        "/Users/georgious/Desktop/IRINA/images"
    )
