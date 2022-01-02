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
    image: require("./../assets/transportation.jpg"),
    title: "Transportation",
    text: "Welcome! Upon your arrival to Istanbul, Your private driver will pick you up at the airport, he will be responsible of your transportation between the airport, hotel and the hospital.",
  },
  {
    image: require("./../assets/planning.jpg"),
    title: "Planning",
    text: "Everything is perfectly pre-planned! Your companion translator will guide you through the everyday details, and will do all the logistics for you in order to ensure your comfort.",
  },
  {
    image: require("./../assets/accommodation.jpg"),
    title: "Accommodation",
    text: "Your accommodation is pre-booked! Your consultant will provide you with a variety of luxurious Hotels to pick from... And It is FREE !",
  },
  {
    image: require("./../assets/consultancy.jpg"),
    title: "Aftercare",
    text: "We are just starting, but never ending! Our medical team will be in your service for a lifetime, you will have continuous follow-up and will answer all your questions and requests!",
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

const GALLERY = [
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg"),
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg"),
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg"),
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg"),
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg"),
  require("./../assets/sharon-mccutcheon-tKnqkvFcmyM-unsplash.jpg"),
];

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
    image: require("./../assets/IMG-20211203-WA0028.jpg"),
    description:
      "In BEST CLINIC ISTANBUL, we use the latest medical technologies in the field of Hair Transplant to meet all of our clients' needs. Hair transplants at our clinic are performed by an experienced medical team of specialist surgeons with at least ten years of experience. Since 2016 Direct Hair Implantation (DHI), also called unshaven hair transplantation, is the most advanced hair transplantation technique used in BEST CLINIC ISTANBUL. DHI offers full and complete control of the angle, direction and depth in which the individual hair follicle is being implanted, in order to ensure that the end result looks as natural as possible at all times. Preparation, graft uptake and post-transplant care are the same as in the FUE methed, but the healing process is faster because the channels are thinner. You can directly contact an expert to analyze your pre and post operation by WhatsApp or e-mail.",
    children: [
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
    image: require("./../assets/plastic.jpg"),
    children: [
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
    title: "Breast Aesthetics",
    image: require("./../assets/IMG-20211203-WA0043.jpg"),
    description:
      "Breast Aesthetics covers a number of planned surgical procedures which are available to improve the appearance of breasts, as a result of developmental problems, significant weight loss, or planned alongside breast cancer surgery - when it is termed 'Oncoplastic Surgery'.",
    children: [],
  },
  {
    title: "Face Aesthetics",
    children: [],
    description:
      "Face Aesthetics is a medically led, results-driven clinic with unparalleled experience and expertise in dermal fillers, hair-loss therapy, skin rejuvenation and anti-ageing treatments. We believe in practising safe non-surgical cosmetic treatments and are proud to be accredited by Save Face",
    image: require("./../assets/IMG-20211203-WA0050.jpg"),
  },
  {
    title: "Bariatric Surgeries",
    children: [],
    description:
      "Bariatric surgery includes a variety of procedures performed on people who are obese. Long term weight loss through standard of care procedures is largely achieved by altering gut hormone levels that are responsible for hunger and satiety, leading to a new hormonal weight set point.",
    image: require("./../assets/csm_Surgery_MIC_7320786e2f.jpg"),
  },
  {
    title: "Dental Treatments",
    children: [],
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
