import APPOINTEMENT from "./../assets/appointement.png";
import DOCTOR from "./../assets/hero-man.png";
import FULL_LOGO from "./../assets/LOGO s.png";
import PACK from "./../assets/pack.png";
import WHITE_LOGO from "./../assets/WhiteLogo.png";
// import RED_LOGO from "./../assets/";

const IMAGES = {
  DOCTOR,
  WHITE_LOGO,
  FULL_LOGO,
  APPOINTEMENT,
  PACK,
};

const TRIP = [
  {
    image: require("./../assets/consultancy.jpg"),
    title: "Consultation",
    text: "Our dedicated team will connect with you and will answer all of your questions. You will be provided with help in order to get to know what's best for your case. Therefore, we will make sure you will be getting the results you are wishing for!",
  },
  {
    image: require("./../assets/transportation.jpg"),
    title: "Transportation",
    text: "a whole fleet of modern and comfortable cars is at your disposal, both at the moment of your arrival at the Istanbul airport and the moment you leave the country.",
  },
  {
    image: require("./../assets/planning.jpg"),
    title: "Planning",
    text: "Your booking and appointments are pre-organized by our Coordination Team, and that's how we like to make sure that the trip goes as smoothly as possible, without any sort of trouble or inconvenience.",
  },
  {
    image: require("./../assets/accommodation.jpg"),
    title: "Accommodation",
    text: "Your accommodation is pre-booked! Your consultant will provide you with a variety of luxurious hotels to pick from",
  },
  {
    image: require("./../assets/Frame 1.png"),
    title: "Aftercare",
    text: "We are just starting, but never-ending! Our medical team will be at your service for a lifetime, you will have continuous follow-up and will answer all your questions and requests!",
  },
];

const TEAM = [
  {
    image: require("./../assets/client-avatar2.jpg"),
    name: "Josh Buttler",
    job: "Web Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    image: require("./../assets/client-avatar2.jpg"),
    name: "Josh Buttler",
    job: "Web Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    image: require("./../assets/client-avatar2.jpg"),
    name: "Josh Buttler",
    job: "Web Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    image: require("./../assets/client-avatar2.jpg"),
    name: "Josh Buttler",
    job: "Web Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
  {
    image: require("./../assets/client-avatar2.jpg"),
    name: "Josh Buttler",
    job: "Web Developer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
  },
];

const SERVICES = [
  {
    image: require("./../assets/transportation.png"),
    title: "Transport Gratuit",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
  },
  {
    image: require("./../assets/health.png"),
    title: "PCR",
    description:
      " Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
  },
  {
    image: require("./../assets/5063406-min-removebg-preview.png"),
    title: "Incurrence for life",
    description:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
  },
];

const GALLERY = new Array(5).fill(
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg")
);

const INFOS = {
  clinicName: "Best clinic istanbul",
  clinicAddress: "",
  phoneNumber: "",
  facebookPage: "",
  instagramPage: "",
  whatsappGroup: "",
  about:
    "BEST CLINIC ISTANBULS has over 10 years experience in hair transplant operations with perfect results, visitor from the whole world, global reputation and high level of service quality",
};

const WORK = [
  {
    title: "DHI CHOI",
    image: require("./../assets/58_IMG-20211203-WA0022.jpg"),
    description:
      "In BEST CLINIC ISTANBUL, we use the latest medical technologies in the field of Hair Transplant to meet all of our clients' needs. Hair transplants at our clinic are performed by an experienced medical team of specialist surgeons with at least ten years of experience. Since 2016 Direct Hair Implantation (DHI), also called unshaven hair transplantation, is the most advanced hair transplantation technique used in BEST CLINIC ISTANBUL. DHI offers full and complete control of the angle, direction and depth in which the individual hair follicle is being implanted, in order to ensure that the end result looks as natural as possible at all times. Preparation, graft uptake and post-transplant care are the same as in the FUE methed, but the healing process is faster because the channels are thinner. You can directly contact an expert to analyze your pre and post operation by WhatsApp or e-mail.",
    children: [
      {
        title: "Hair transplant",
        description:
          "In BEST CLINIC ISTANBUL, we use the latest medical technologies in the field of Hair Transplant to meet all of our clients' needs. Hair transplants at our clinic are performed by an experienced medical team of specialist surgeons with at least ten years of experience. Since 2016 Direct Hair Implantation (DHI), also called unshaven hair transplantation, is the most advanced hair transplantation technique used in BEST CLINIC ISTANBUL. DHI offers full and complete control of the angle, direction and depth in which the individual hair follicle is being implanted, in order to ensure that the end result looks as natural as possible at all times. Preparation, graft uptake and post-transplant care are the same as in the FUE methed, but the healing process is faster because the channels are thinner. You can directly contact an expert to analyze your pre and post operation by WhatsApp or e-mail.",
        image: require("./../assets/hair-transplant-grafts-do-i-need-7000-grafts-min.png"),
      },
      {
        title: "Beard implantation",
        description:
          "The use of DHI CHOI PRO by the medical staff of our clinic is a solution for the pain that spoils the aesthetic appearance of men which causes sparse beards or abnormal beards for various reasons. The methods are similar in bread transplantation as in hair transplantation. Except that for the beard transplant the design must be very homogeneous with the shape of the face, this is why Best clinic istanbul offers estheticians specialized in each medical team. As with hair transplantation after bread transplantation, it is necessary to be careful. Planted roots are very sensitive to trauma and can be shed with small contacts. Beards are more risky in terms of trauma than hair. Especially the first 3 days are very important. It is necessary to sleep on your back to avoid the pillow contact. It should not be shaved for two weeks. It can then be shaved with suitable blades. Because the skin of the face is more sensitive; Although side effects such as redness, bruising and acne are common, they are temporary. ",
        image: require("./../assets/beard-transplant.jpg"),
      },
      {
        title: "Eyebrows transplantation",
        description:
          "A well-shaped eyebrow enhances the overall facial appearance. It is undoubtedly the most expressive part of the face. They are naturally shaped and form a beautiful and stunning exterior. A woman looks great with thick and dense eyebrows. Hence, so many people desire for an arched shaped and perfect eyebrow. But in some cases, eyebrows are very light, hardly visible since birth or fall over time. There can be a plethora of reasons contributing to less eyebrow growth. This demand for perfect shaped eyebrow has given rise to the concept of surgery. Eyebrow Transplant Surgery is the only permanent solution to eyebrow loss. In BEST CLINIC ISTANBUL, our specialists perform Direct hair implantation DHI PRO techniques to treat eyebrow loss with precision. We use the latest techniques for eyebrow implants giving natural, long-lasting results.",
        image: require("./../assets/eyebrows-hair-transplant.jpg"),
      },
      {
        title: "PRP Therapy for hair",
        description:
          "PRP (Platelet-Rich Plasma) is a popular method used by hair transplant clinics to stimulate hair regrowth. It is a non-surgical hair restoration technique that helps to treat male pattern baldness and other cosmetic procedures. PRP therapy ensures quick healing and promotes tissue regeneration in the operated region. PRP injections are safe and can be used as an individual treatment for hair loss or alongside hair transplant surgery depending on the choice of the patient. This treatment is quite effective for those suffering from early signs of hair-loss and both, men and women can benefit from this treatment. In BEST CLINIC ISTANBUL our team of expert doctors perform PRP therapy with precision. Equipped with an abundance of experience within the industry, we have consistently delivered natural-looking results to a wide variety of patients.",
        image: require("./../assets/prp-for-hair.jpg"),
      },
    ],
  },
  {
    title: "Plastic Surgery",
    description:
      "Plastic surgery is a surgical specialty involving the restoration, reconstruction, or alteration of the human body. It can be divided into two main categories: reconstructive surgery and cosmetic surgery. Reconstructive surgery includes craniofacial surgery, hand surgery, microsurgery, and the treatment of burns",
    image: require("./../assets/IMG-20211203-WA0047.jpg"),
    children: [
      {
        title: "Abdominoplast",
        description:
          "The tummy tuck is a cosmetic operation that treats the distension of the skin of the stomach, or the abdominal apron in the case of excessive sagging skin.The procedure allows you to find a flat stomach thanks to the practice of three main gestures: sucking the excess fat using liposuction, tightening the muscles of the abdomen to finally remove the excess skin. The abdominoplasty is performed under general anesthesia and lasts about 2 hour 30 minutes. One or three nights of hospitalization should be considered",
        image: require("./../assets/Abdominoplast.jpg"),
      },
      {
        title: "Breast reduction",
        description:
          "Living with large breasts is not always easy and can even become a problem that prevents a woman from living a normal life. This excess volume can be linked to a disproportion between the two breasts which gives the breast a misshapen appearance. Breast reduction in BEST CLINIC ISTANBUL, intervention aimed at reducing the size of the breast is in this case, your best way to get rid of this handicap, in a radical and lasting way",
        image: require("./../assets/breast reduction.jpeg"),
      },
      {
        title: "BBL brazilian butt lifting",
        description:
          "Also Known as “Buttocks augmentation”, that is a surgical cosmetic procedure that increases the size of the buttocks by using fat transfer or butt implants. Buttocks Augmentation includes reshaping and lifting with fat grafting to provide a true, aesthetically proportionate figure that restores the patient’s self-confidence and allows him/her to wear the clothes that he or she wishes.",
        image: require("./../assets/BBL brazilian butt lifting.jpg"),
      },
      {
        title: "Otoplasty",
        description:
          "This is one of the shortest surgical procedures that is performed in BEST CLINIC ISTANBUL to correct protruding ears. The operation can take anywhere from 15 minutes to an hour at most, and involves reshaping the skin and cartilage behind the ear so that it is less noticeable and more aesthetic. Protruding ears are a big problem for men because they cannot hide them, as well as for women because they have to keep a hairstyle that covers their ears; Now BEST CLINIC ISTANBUL is offering this life changing operation for many people to give them more common shapes that greatly improve their confidence.",
        image: require("./../assets/gal5.jpg"),
      },
      {
        title: "face lipofilling",
        description:
          "Also known as fat transfer/injections. It is a surgical process in which, fat is transferred from one part of the body to another. For example, fat can be removed from the belly and transfered to the buttocks.",
        image: require("./../assets/blog-lipofilling-02.jpg"),
      },
      {
        title: "Jaw Line",
        description:
          "By getting injected into the skin, jaw fillers lessen the appearance of sagging and bone loss around the jaw. They create a more defined separation between the jawline and the neck.",
        image: require("./../assets/jaw.jpg"),
      },
      {
        title: "Rhinoplasty",
        image: require("./../assets/Rhinoplasty.png"),
        description:
          "Rhinoplasty is one of the most popular cosmetic procedures performed to create perfect harmony with your other facial features. Also, known as nose reshaping surgery it can transform your appearance immensely and correct breathing problems, birth defect or any nose injury etc. The surgery is safe and can help to restore your self-confidence. Both men and women can get it done to improve cosmetic imperfections and functional issues within the nose. It is an outpatient procedure performed under anaesthesia and typically ends in about one or two hours. In BEST CLINIC ISTANBUL, our expert rhinoplasty surgeons have helped many patients achieve the desired look they always wanted. We take pride in delivering natural, satisfying and long-lasting results to all our valuable clients.",
      },
      {
        title: "Arm lift",
        image: require("./../assets/Arm lift.jpg"),
        description:
          "If your hanging arms are making you conscious about your unshaped body part and preventing you from wearing your favourite sleeveless dress. Then Arm Lift is a perfect choice to consider to tighten your arms and make it look appealing. Arm Lift or Brachioplasty is an effective cosmetic procedure performed to tone sagging skin and to eliminate excess flab deposits in the upper arms. This loose skin is usually caused due to immense weight reduction or as a natural ageing process. Arm Lift is a safe, outpatient procedure performed under the influence of anaesthesia. The procedure involves making incisions on the inside or back of your arms to remove excess fat and then tightening the tissues with stitches to close the wound. The complete surgery takes about two to three hours. In BEST CLINIC ISTANBUL, our plastic surgeons are specialized in performing successful arm lift surgery and producing desired results. Over the years with the rich experience in the field, we have treated thousands of patients and helped them see a tremendous improvement in their arm size. We have seen our patients with increased confidence and a better self-image after the surgery.",
      },
      {
        title: "leg lifting",
        description:
          "Legs lifting in our clinic is one of the aesthetic operations that many women request to fill the signs of aging appearing at the level of the crotch: the skin sags and relaxes mercilessly which gives the thighs an old appearance. very unsightly. This physical imperfection can induce in the person who suffers from it a feeling of regret and likewise of disgust. If you want to find the best contours of your thighs, do not hesitate to schedule your operation in BEST CLINIC ISTANBUL.",
        image: require("./../assets/leg lifting.jfif"),
      },
      {
        title: "Breast augmentation",
        image: require("./../assets/Breast augmentation.jpg"),
        description:
          "Breast augmentation in BEST CLINIC ISTANBUL is the operation that results in the change in the size of the breasts, when they are considered too small. General anesthesia is required for this type of operation. The operation must be performed by a specialized surgeon. He places the prosthesis (also called an implant) which has been chosen so as to best correspond to the wishes and anatomical characteristics of the patient. All our implants are 100% safe. However, your medical consultant can advise you with the best choice of implant for you by requesting a callback.",
      },
      {
        title: "BLEPHAROPLASTY",
        image: require("./../assets/blepharoplasty.jpg"),
        description:
          "As you age, eyelids stretch and the muscles that support them become weaker and weaker with time. With Blepharoplasty, say goodbye to that! It repairs droopy eyelids and removes excess skin, muscle and fat.",
      },
      {
        title: "Breast lift",
        image: require("./../assets/breast-lifting.jpg"),
        description:
          "A Breast Lift is a surgical procedure that restores a firmer, more elegant, and more aesthetically pleasing shape to sagging breasts by removing excess, stretched-out skin and reshaping the breast tissue. Sometimes, a Breast Lift surgery might include raising the nipple and areola into a more forward position. Stretched large areolae can also be reduced during breast lift surgery, creating an overall better proportioned, natural-looking breast. In Best Clinic Istanbul, your surgeon can simply create your dream breast contour.",
      },
      {
        title: "Face lifting",
        description:
          "Face Lift is a cosmetic surgery performed to regain a youthful appearance. Also, called rhytidectomy this surgery helps to uplift and tightens the loose facial tissue. It is one of the most popular and preferred skin treatments by patients desiring to reverse the signs of ageing. As we age, our skin naturally begins to lose elasticity and firmness leading to hanging skin, creases and folds in various parts of the face. It is only face lift that can show positive results and gives a younger-looking effect. Face Lift is a safe and effective procedure that works to remove excess fat from the base of the nose to the corners of the mouth. It can be done as a standalone treatment or in conjunction with other procedures to improve the quality of the skin. The process is simple, performed under anaesthesia and involves cutting off the excess skin, tightening the tissues and re-draping the skin for refreshed, rejuvenated and more toned appearance. In BEST CLINIC ISTANBUL, our expert surgeons will ensure to give you the best of treatment and care, both during and after the procedure. Over the years, we have helped thousands of patients in their 40’s and 50’s achieve great results.",
        image: require("./../assets/face lifting.jpg"),
      },
      {
        title: "Neck lift",
        image: require("./../assets/neck lifting.webp"),
        description:
          "Also known as platysmaplasty. It is a cosmetic plastic surgery that consists of removing the excessive fat from the neck. It helps with the removal of the muscle banding in the neck. In other words, it enhances the appearance of your neck.",
      },
      {
        title: "Eyebrow lifting",
        description:
          "Also known as forehead lift or browplasty, a surgery that reverses all the effects of gravity resulting in tight soft tissues of the forehead and a more youthful contour to upper eyelids and eyebrows.",
        image: require("./../assets/eye lifting.jpg"),
      },
      {
        title: "Liposuction",
        image: require("./../assets/Liposuction.jpg"),
        description:
          "Maintaining a healthy lifestyle, eating a nutritious diet and exercising regularly is important to stay in good shape. But what if despite of all your sincere efforts, you’re still unable to get rid of that excess body fat. Thankfully, we have the solution popularly known as Liposuction. In BEST CLINIC ISTANBUL our medical staff used the Vazer Liposuction 4D which is an excellent cosmetic procedure used to eliminate unwanted body fat using a hollow instrument known as a cannula. Whether in the chin, arms, oval of the face, hips, stomach, saddlebags, thighs, love handles, back, arms, knees, calves or even the ankles, liposuction reconstructive surgery rids patients of their excess fat, depending on their morphology.",
      },
    ],
  },
  {
    title: "Skin",
    children: [
      {
        title: "BOTOX",
        description:
          "freezes muscles to stop creases and wrinkles caused by facial expressions. These are typically found in the upper face, such as the forehead and around the eyes.",
        image: require("./../assets/injections-botox-quel-age-dr-durbec-lyon.jpg"),
      },
      {
        title: "Dermal fillers",
        description:
          "These use hyaluronic acid and similar substances to “fill in” or plump areas that have lost volume and smoothness. This includes wrinkles around the mouth, thin lips, and cheeks that have lost fullness. They may also be used on forehead wrinkles, scars, and other areas that need extra volume for a smoother look.",
        image: require("./../assets/Accredited-Dermal-Fillers-Training.jpg"),
      },
      {
        title: "Thread lifting",
        description:
          "A thread lift is a type of procedure wherein temporary sutures are used to produce a subtle but visible 'lift' in the skin. Instead of removing the patient's loose facial skin surgically, the cosmetic surgeon simply suspends it by stitching up portions of it. ",
        image: require("./../assets/how-do-thread-lifts-work.jpg"),
      },
    ],
    description:
      "Face Aesthetics is a medically led, results-driven clinic with unparalleled experience and expertise in dermal fillers, hair-loss therapy, skin rejuvenation and anti-ageing treatments. We believe in practising safe non-surgical cosmetic treatments and are proud to be accredited by Save Face",
    image: require("./../assets/IMG-20211203-WA0050.jpg"),
  },
  {
    title: "Weightloss",
    children: [
      {
        title: "Gastric Sleeve",
        description:
          "Sleeve gastrectomy is a bariatric surgery that renders the stomach smaller, after which, the patient will not be able to eat the same volumes of food he used to eat before. The gastric sleeve method proved its efficiency with a success rate of up to 90 percent.",
        image: require("./../assets/Laparoscopic-sleeve-gastrectomy_web.jpg"),
      },
      {
        title: "Gastric Balloon",
        description:
          "Also known as Stomach Balloon. It is a device that is temporarily placed in the stomach to help you get rid of weight. It is done when diet and exercising had no effective results. It is noteworthy to mention that the gastric balloon does not require a recovery period or a surgical intervention.",
        image: require("./../assets/balloon.jpg"),
      },
      {
        title: "Gastric botox",
        description:
          "Nowadays, it is known that increasing obesity disease and excess weight can cause many problems in human health. There are many well-known false or incomplete information about overweight, and people who act with this information are known to face different problems. The weight loss drugs taken from the internet especially for losing weight cause problems that can even lead to death. Along with developing medical science and technology, treatment methods for obesity disease and weight loss are also developing. One of these treatment methods is stomach botox",
        image: require("./../assets/1457597297.jpg"),
      },
      {
        title: "Gastric Bypass",
        description:
          "A surgical process in which the size of the stomach is reduced and the first portion of the small intestine is bypassed, which restricts food intake and reduces caloric absorption. Gastric bypass is the most effective treatment for morbid obesity as the resulting weight loss is typically dramatic.",
        image: require("./../assets/Omega-loop_web.jpg"),
      },
    ],
    description:
      "Bariatric surgery includes a variety of procedures performed on people who are obese. Long term weight loss through standard of care procedures is largely achieved by altering gut hormone levels that are responsible for hunger and satiety, leading to a new hormonal weight set point.",
    image: require("./../assets/csm_Surgery_MIC_7320786e2f.jpg"),
  },
  {
    title: "Dental Treatments",
    children: [
      {
        title: "Microscope advanced dentistry",
        description:
          "Microscopic dentistry involves the use of state-of-the-art microscopes to provide close-up images of the patient's dental structures. They're strong enough to magnify the gums, teeth, and oral tissue up to 20 times what the naked eye can see on its own",
        image: require("./../assets/Endodontics-Specialist-Services.jpg"),
      },
      {
        title: "Paediatric dentistry",
        description:
          "Pediatric dentists specialize in oral care for infants, toddlers, children, and teenagers. They are trained to handle: Treatment of children under anesthesia and sedation. Treatment of medically compromised children and adolescents.",
        image: require("./../assets/pediatric-dentistry.jpg"),
      },
      {
        title: "Crown bridges",
        description:
          "Crowns and bridges are related to dental procedures. A crown is a cap that fits over your tooth to protect and restore its appearance. A bridge replaces a missing tooth, and a crown is fitted to each neighboring tooth, which supports the replacement tooth.",
        image: require("./../assets/Dental-bridge-implant-crown.jpg"),
      },
      {
        title: "Orthodontic dentistry",
        description:
          "Orthodontics is a branch of dentistry that treats malocclusion, a dental condition in which the teeth are not correctly positioned when the mouth is closed. It deals with facial and jaw irregularities. Improper alignment of the teeth and jaw arches affects coherent speech, chewing, and biting abilities.",
        image: require("./../assets/istockphoto-1129200700-612x612.jpg"),
      },
      {
        title: "Dental implant",
        description:
          "Dental implant systems consist of a dental implant body and dental implant abutment and may also include an abutment fixation screw. The dental implant body is surgically inserted in the jawbone in place of the tooth's root. The dental implant abutment is usually attached to the implant body by the abutment fixation screw and extends through the gums into the mouth to support the attached artificial teeth.",
        image: require("./../assets/dental-implant-turkey.jpg"),
      },
      {
        title: "Hollywood smile",
        description:
          "Also known as Dental Veneers, which are ultra-thin veneers that are bonded to the front of the patient’s teeth to enhance the beauty, naturality, and strength of their teeth. Best Clinic Istanbul’s Veneers are highly resistant to staining from coffee, tea, or even cigarette smoking. Also, they are great alternatives to painful dental procedures to improve the appearance of your smile.",
        image: require("./../assets/hollywood-smile.png"),
      },
      {
        title: "Tooth coloured fillings",
        description:
          "Fillings are used to repair decayed teeth. Bacteria living on the surfaces of the teeth digest sugary/starchy food residue making cavities in the process.",
        image: require("./../assets/AdobeStock_133965848-Custom-1024x685.jpeg"),
      },
    ],
    description:
      "Implants are a fixed alternative to removable dentures. They may be the only option if the loss of teeth has caused the mouth to shrink so it can no longer support dentures.  You can use implants to replace just a single tooth or several teeth To fit an implant, titanium screws are drilled into the jaw bone to support a crown, bridge or denture Replacement parts take time to prepare. This is to ensure that they fit your mouth and other teeth properly. This means they may not be available on your first visit to the dentist",
    image: require("./../assets/IMG-20211203-WA0079.jpg"),
  },
];

const RESERVATION = [
  "Please provide us the date you wish to have the surgery, after checking the flight availability.",
  "Let us check and confirm the availability of the clinics.",
  "You can send us the flight ticket confirmation along with the deposit payment.",
  "We will do the organization and confirm with all pre-OP details and information",
];

const PACKAGE = [
  "Your accommodation in a 4-5 star hotel including wifi and breakfast.",
  "Transfer between the hotel, the airport and the hospital.",
  "Blood analyses and a 3D simulation and a consultation with the doctor before doing the operation.",
  "A medical suitcase includes all the necessary medications after the procedure, with lotions and shampoos.",
  "Translators and nurses available 24 hours a day.",
  "A PCR test before your return date.",
  "A check, and a washing session with the doctor will be scheduled 1 day after the operation. ",
];

export {
  IMAGES,
  TRIP,
  TEAM,
  SERVICES,
  GALLERY,
  INFOS,
  WORK,
  PACKAGE,
  RESERVATION,
};
