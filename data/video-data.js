export const videodata = async () => {
  try {
    const response = await $fetch(
      "https://mapproject.nvs.la/api/v1/sg-4/ytlist",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

/* export const videodata= [
  {
    "name": "Bnagla",
    "listvideo": [
      {
        "id": 7,
        "title": "চায়না ৬৫ তলা থেকে লাফ দিলাম | Tawhid Afridi | Bangladesh To China | Guangzhou | Vlog 112 - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/V7GYJCRKpNQ/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/V7GYJCRKpNQ"
      }
    ]
  },
  {
    "name": "No category",
    "listvideo": [
      {
        "id": 8,
        "title": "Teaching English (EDBN-1412), Introduction to Presentation Skills - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/FFJue8BfaO8/hqdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/"
      },
      {
        "id": 9,
        "title": "ব্যবসায় আইন (MGD3314)ইউনিট - ৩, পাঠ - ১, প্রতিনিধিত্ব চুক্তি - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/lbDHb9RENtg/hqdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/"
      },
      {
        "id": 13,
        "title": "মুখোমুখি হুতি ও পশ্চিমারা; একচুলও ছাড় দিতে নারাজ দু’পক্ষই! | Houthi-West Feud | Jamuna TV - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/IXEXMhNmG0g/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/IXEXMhNmG0g"
      },
      {
        "id": 11,
        "title": "【Multi-sub】The Last Immortal EP27 | Zhao Lusi, Wang Anyu | 神隐 | Fresh Drama - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/Fp0agDShn3k/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/Fp0agDShn3k"
      },
      {
        "id": 10,
        "title": "THE EMOTION IN '12TH FAIL' - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/ROAg_V1FzqI/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/ROAg_V1FzqI&t"
      },
      {
        "id": 6,
        "title": "ইভ্যালির রাসেল ও স্ত্রী শামীমার বিরুদ্ধে গ্রেফতারি পরোয়ানা | Evaly | Arrest warrant | Jamuna TV - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/dgKjcBcc0z0/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/dgKjcBcc0z0"
      },
      {
        "id": 12,
        "title": "SOE-B.Ed.-একজন পারদর্শী গণিত শিক্ষক তৈরীর ক্ষেত্রে বিবেচ্য বিষয় সমূহ - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/mVDjuYideUg/hqdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/mVDjuYideUg"
      }
    ]
  },
  {
    "name": "School Of Education",
    "listvideo": [
      {
        "id": 19,
        "title": "কৃত্তিম বুদ্ধিমত্তা বাড়াচ্ছে শঙ্কা... | Artificial Intelligence | IMF | AI | Somoy TV - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/tJPXuV14p8I/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/tJPXuV14p8I"
      }
    ]
  },
  {
    "name": "School Of social Science ,Humanities  & Languages",
    "listvideo": [
      {
        "id": 14,
        "title": "মেঘ চুরি সন্দেহে তদন্ত কমিটি | Iran | Turkey | Channel 24 - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/sIaSsVPosYc/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/sIaSsVPosYc"
      }
    ]
  },
  {
    "name": "open School",
    "listvideo": [
      {
        "id": 15,
        "title": "সালাম মুর্শেদীকে নিয়ে যা বললেন ব্যারিস্টার সুমন | Barrister Sumon - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/2e0VhhLBODo/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/2e0VhhLBODo"
      }
    ]
  },
  {
    "name": "School Of Business",
    "listvideo": [
      {
        "id": 16,
        "title": "'বাল্কহেডের ধাক্কা নয়, ফেরি কর্তৃপক্ষের গাফিলতির কারণে দুর্ঘটনা' | Ferry Sink | Paturia-Daulatdia - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/XaCEC4bbVIE/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/XaCEC4bbVIE"
      }
    ]
  },
  {
    "name": "School of Agriculture & Rural Development",
    "listvideo": [
      {
        "id": 17,
        "title": "গাড়ির সবার ঘুমের মধ্যেই ডুবে যায় রজনীগন্ধা ফেরি | Ferry Sink | Manikganj | Paturia-Daulatdia - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/gtLbCm5pFxc/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/gtLbCm5pFxc"
      }
    ]
  },
  {
    "name": "School Of science & Technology",
    "listvideo": [
      {
        "id": 18,
        "title": "ডুবে যাওয়া ফেরি উদ্ধারে হামজার আগমন | Manikgonj Ferry | Jamuna TV - YouTube",
        "thumbnail_url": "https://i.ytimg.com/vi/Kw5myfZycJI/maxresdefault.jpg",
        "embedded_url": "https://www.youtube.com/embed/Kw5myfZycJI"
      }
    ]
  }
] */
