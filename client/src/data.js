import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/SQ3jTkPk/1-1.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg",
            "https://i.postimg.cc/qqhqJ5zP/5.jpg",
            "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
            "https://i.postimg.cc/mD6hGs23/6.jpg",
            "https://i.postimg.cc/DZmy6MdS/the-villas-at-sunway.jpg",
            "https://i.postimg.cc/P5zx5Z55/pirate-s-revenge-3-wide.jpg"
        ],
        title:"Full Day Admission",
        desc:"Unlock a day of excitement at Sunway Lagoon with the Full Day Admission Ticket for MyKad holders. Enjoy thrilling rides, water attractions, and endless fun in Malaysia's premier amusement park.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:141,
                    child:119,
                    senior:119,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:181,
                    child:149,
                    senior:149,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/28LZvTb7/e4b73bbb-d5d9-4ca2-9414-cd80567c5c9a.jpg",
            "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
            "https://i.postimg.cc/qqhqJ5zP/5.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg",
        ],
        title:"Quack Express Only",
        desc:"Upgrade your visit with Quack Xpress - skip regular queues at selected rides and attractions. Note:Quack Xpress is an express lane pass, not an admission ticket.",
        type:"bookTypeTwo",
        pricing: {
            adult:75,
            child:75,
            senior:75,
        },

    },

    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/kM0KVQqQ/the-ghostbusters-adventure-live-at-sunway-lagoon-11.jpg",
            "https://i.postimg.cc/RZ9tdv3q/Apache-Pots-Sunway-Lagoon-Night-Park.jpg",
            "https://i.postimg.cc/hGZ7Kx27/Vultures-Sunway-Lagoon-Night-Park.jpg",
            "https://i.postimg.cc/Y059hzFh/Image-P.jpg",
            "https://i.postimg.cc/zG1vNp5Q/2.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg",
        ],
        title:"Night Park Admission Ticket",
        desc:"Experience the magic of Sunway Lagoon after sunset at our Night Park. Enjoy dazzling lights, exciting rides, and captivating entertainment for an unforgettable evening adventure. ",
        type:"bookTypeFour",
        type:"bookTypeThree",
        pricing: {
            adult:50,
            child:48,
            senior:48,
        },

    },

    {
        id: uuidv4(),
        image:[
            "https://i.postimg.cc/28LZvTb7/e4b73bbb-d5d9-4ca2-9414-cd80567c5c9a.jpg",
            "https://i.postimg.cc/SQ3jTkPk/1-1.jpg",
            "https://i.postimg.cc/3w8w4RkC/1-2.jpg",
            "https://i.postimg.cc/qqhqJ5zP/5.jpg",
            "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
            "https://i.postimg.cc/mD6hGs23/6.jpg",
            "https://i.postimg.cc/DZmy6MdS/the-villas-at-sunway.jpg",
            "https://i.postimg.cc/P5zx5Z55/pirate-s-revenge-3-wide.jpg"
        ],
        title:"Combo Admission + Quack Express",
        desc:"Enhance your Sunway Lagoon adventure as an international guest with our Day Admission Ticket, featuring the added convenience of Quack Xpress. Immerse yourself in all the attractions and skip regular lines at selected rides for a day filled with seamless thrills and excitement!",
        preference:[
                {
                    title:"Malaysian",
                    price:{
                        adult:218,
                        child:200,
                        senior:200,
                    },
                    details:[
                        "Valid only for Malaysian Citizens"
                    ]
                },
            {
                title:"Non-Malaysian",
                price:{
                    adult:229,
                    child:209,
                    senior:209,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },
    
]

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/mDqZ5y88/vuvzela-1.png",
        title:"Vuvuzela",
        desc:"Experience the world's largest water ride, taking you on a thrilling journey throughamassivefunnel and an extended flume."
    },
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/kM0KVQqQ/the-ghostbusters-adventure-live-at-sunway-lagoon-11.jpg",
        title:"Ghost Busters Adventure Live",
        desc:"Experience a live show where you can join the Ghostbusters teamand assist theminbusting some ghosts."
    },   
    {
        id: uuidv4(),
        image: "https://i.postimg.cc/wjhtRZ0H/NLL-Cover.jpg",
        title:"Nickelodeon Lost Lagoon",
        desc:"For fans of Nickelodeon characters, the Nickelodeon Lost Lagoon is a must-visit. Immerse yourself in the worlds of SpongeBob SquarePants, Dora the Explorer, Teenage Mutant Ninja Turtles, and many more."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Dive into the fun with massive water slides, wave pools, and the iconic Vuvuzelaride.",
        image: "https://i.postimg.cc/NG9RfJqG/theme-park-overview-14-wide.jpg"
    },
    {
        id: uuidv4(),
        desc:"Enjoy interactive play areas, slime time, and meet beloved Nickelodeon characters.",
        image: "https://i.postimg.cc/DZmy6MdS/the-villas-at-sunway.jpg"
    },
    {
        id: uuidv4(),
        desc:"Experience adrenaline-pumping roller coasters, wildlife encounters, and cultural showsinone dynamic theme park.",
        image: "https://i.postimg.cc/Z5cdDX3H/Malaysia-Sunway-Lagoon-Amusement-and-Water-Park-2-1100x500-1.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Opens everyday from 10am - 11pm", 
            "Close every Tuesday except Public and School holiday.",
            "Night Park starts at 6pm - 11pm"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age is 12 to 59 years old.",
            "Child age is  3 to 11 years old.",
            "Below 90cm Free.",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Inclusion",
        ans:[
            "Full day Ticket: Waterpark, Scream Park, Amusement Park, WildlifePark, Nickelodeon Lost Lagoon, Extreme Park & Night Park.",
            "Night Park: Lost City of Gold, Carousel, Wagon Wheel, GrandCanyon,Colorado, Vultures & Butch Cassidy.",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:["The tickets are fixed dated tickets. And no re-entry allowed."]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"Can I bring food inside Sunway Lagoon ?",
        ans:"No. Food and drinks is prohibited inside."
    },
    {
        id: uuidv4(),
        ques:"Does my 2 years old baby need to buy ticket to enter Sunway Lagoon ?",
        ans:"No, Child below 90cm can enter for FREE."
    },
    {
        id: uuidv4(),
        ques:"How long can I stay inside Sunway Lagoon ?",
        ans:"You may stay as long as you want, no time limit."
    },
    {
        id: uuidv4(),
        ques:"When does Sunway Lagoon close ?",
        ans:"Sunway Lagoon is close every Tuesday except for Public Holiday and School Holiday."
    },
    {
        id: uuidv4(),
        ques:"Does my ticket includes Locker and Tubes ?",
        ans:"No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."
    },
    {
        id: uuidv4(),
        ques:"Is all games included in my ticket ?",
        ans:"Yes all included except for Paid Games; Buggy Jump, G-Force X and GoKart"
    },
    {
        id: uuidv4(),
        ques:"Can I enter Night park if I buy Full Day Ticket ?",
        ans:"Yes, Customer who have Full Day Ticket may enjoy night park as well by staying inside the park as no re-entry is allowed."
    },
    {
        id: uuidv4(),
        ques:"Can I buy Only Quack Express Tickets if I already have Annual Pass ?",
        ans:"For Annual Pass Holders, you may buy Quack Express tickets only separatelyifyou want to enjoy Express Lane Privilege."
    },
    {
        id: uuidv4(),
        ques:"Can I buy Quack Express Tickets only to enter Sunway Lagoon ?",
        ans:"No. Quack Express is only add on ticket. You are required to have admission ticketsto enter the park."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]