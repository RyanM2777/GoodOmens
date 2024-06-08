"use client"
import { useState, useEffect } from 'react';

const reviews = [
  {
    text: "SO WORTH IT\nWaited three hours in line and then got super lucky on the spin to win and got three cool prizes, got four flash tattoos and my tattoo artist Emily was amazing and put up with me chatting nonsense the whole time I love my tattoos and I got lots of info on aftercare and even got a cool sticker.",
    author: "Hannah Osso",
    source: "Google Review",
  },
  {
    text: "Great service! Came in for May the Fourth Flash Sale, picked 2 tattoos and won a 3rd on their mystery wheel.  As someone who had no tattoos to getting 3 in their first sitting, it was a great experience.  Was made to feel really comfortable and it has a great atmosphere, would definitely recommend and will be coming back for more work!",
    author: `Daniel "Ginge" Carrie`,
    source: "Google Review",
  },
  {
    text: "Service was good from initial phone call to leaving. Staff were beyond lovely. Beautiful atmosphere in both waiting area and piercing/tattoo area. Piercer could not have been nicer, talked me through what I wanted and was very accommodating of previous uneven piercings also had a good laugh. Would highly recommend, everything was sanitised and the outcome is great!",
    author: "Kayla Bryant",
    source: "Google Review",
  },
  {
    text: "Came to Good Omens for Flash Day. I got a piercing and 2 flash tattoos. I absolutely love them. The place is beautifully designed and everyone is very friendly and welcoming. Would 100% recommend",
    author: "Cara Black",
    source: "Google Review",
  },
  {
    text: "Such a friendly, welcoming place with a team who are chatty and informative. Could not have asked for a better experience. The shop is lovely as well - especially the wall art. Would definitely recommend if you're looking to get a piercing!",
    author: "Reii Samson",
    source: "Google Review",
  },
  {
    text: "I had a half sleeve done by Lauren a few days ago and honestly could not be happier with everything! The studio was really clean and professional, all of the artists were super friendly, and the tattoos she did are absolutely stunning. They are healing like a dream and I’m already booked in again. I couldn’t recommend them more - 11/10!",
    author: "Ivy Prior",
    source: "Google Review",
  },
  {
    text: "Lovely little tattoo studio with a friendly, chill atmosphere and lovely staff. Sells loads of cool little bits and bobs as well    would definitely recommend, as well as visit again myself!",
    author: "Carly Elder",
    source: "Google Review",
  },
  {
    text: "Went along for their April Fools flash day and would recommend, the staff are lovely and all the little extras like spin the wheel and merch are super cute. Artists were very accommodating and a huge range of designs to choose from. I’ve had a tattoo from Lauren before and she’s awesome!",
    author: "Cari Watterton",
    source: "Google Review",
  },
  {
    text: "Just finished my second session with Iain. Couldn’t recommend him enough, such a nice guy, very accommodating and an amazing tattooist. All the staff were really friendly and chatty. Great experience and quality work. Will 100% be back for more tattoos.",
    author: "Kyle Anderson",
    source: "Google Review",
  },
  {
    text: "Got this adorable little lad done for the flash day. Staff were amazing and artist was absolutely lovely. 10/10 would recommend",
    author: "Sunflower Surprise",
    source: "Google Review",
  },
  {
    text: "Wonderful tattoo shop, everyone is so friendly and welcoming. Been going to Lauren for years and wouldn't trust anyone else.. amazing work! Also beaut decor inside, nice relaxing atmosphere :) x",
    author: "Mhairi Garrity",
    source: "Google Review",
  },
  {
    text: "I always recommend Good Omens to everyone I know! Lauren has always done my tattoos and has never let me down! The April's fool day was fun and I won myself a cute candle from the spin wheel! Bad photo but I got cute sparkly cherries!",
    author: "ERIN Frith",
    source: "Google Review",
  },
  {
    text: "I visited today for the April fools day flash sale and I got 4 tattoos from Steven. The staff are welcoming and professional and the studio itself is in a prime city centre location. Keep up the good work",
    author: "Ashley Douglas",
    source: "Google Review",
  },
  {
    text: "Got a star wars tattoo in the flash sale and won an extra tattoo on the wheel (£10 pound a spin) Wonderful job, wonderful artists and will definitely be back",
    author: "Lewis Amor",
    source: "Google Review",
  },
  {
    text: "Emily was absolutely amazing! Did such a good job with a very meaningful piece and made me very comfortable throughout. Definitely coming back xx ",
    author: "Eilidh Marrison",
    source: "Google Review",
  },
  {
    text: "Amazing service and friendly staff who is always up for a chat",
    author: "Cat Whalen",
    source: "Google Review",
  },
  {
    text: "Amazing, tattoo artist was so patient and kind. Piercer really nice too. Great experience will definitely be back",
    author: "Ella Christian",
    source: "Google Review",
  },
  {
    text: "First time getting a tattoo and staff made me feel more relaxed about it. Absolutely love both my tattoos! Really nice place too.",
    author: "Sophie Le Sueur",
    source: "Google Review",
  },
  {
    text: "Came in for April fools flash sale got 2 tattoos and I had the lovely Emily she was just nice and gentle I didn't even feel she had done any tattoos x",
    author: "Cheryl Howie",
    source: "Google Review",
  },
  {
    text: "A great environment, Emily done my flash tattoos today and was amazing she’s so friendly and easy to talk too!!",
    author: "Hannah Scott",
    source: "Google Review",
  },
  {
    text: "Lovely shop, everyone was super friendly. Went in for their walk in day for April fools and loved the tattoos I got.",
    author: "Crow Robertson",
    source: "Google Review",
  },
  {
    text: "Great day out for the first time at your studio with family and friends. An amazing experience at your April fools walk in day, Thank you all for this opportunity ",
    author: "Sarah Jayne Sustins",
    source: "Google Review",
  },
  {
    text: "Really great studio. Bright and clean, it has a comfortable not clinical feel whilst maintaing the highest standards. I had a full day session and was made to feel welcome and comfortable. Im looking forward to my next one already!!",
    author: "Aaron Haggart",
    source: "Google Review",
  },
  {
    text: "Had a great experience at the flash day today. Artists were super helpful and friendly, will definitely be back!",
    author: "Jace",
    source: "Google Review",
  },
  {
    text: "i’ve never had a tattoo before today and i got 3 flash tattoos and all were great not to painful either highly recommend",
    author: "Chloe Ferguson",
    source: "Google Review",
  },
  {
    text: "Fantastic experience at the April 1st walk-in! Tattoo artists and piercer were absolutely lovely",
    author: "Sara Sorrentino",
    source: "Google Review",
  },
  {
    text: "Tattooists are all lovely! 10/10 will be going back",
    author: "Cat Griffin",
    source: "Google Review",
  },
  {
    text: "welcomed when arriving. The shop is very clean and well decorated, artists are very nice and talkative. Good vibes :)",
    author: "Demi Kerwin",
    source: "Google Review",
  },
  {
    text: "Absolutely amazing range of flash work brilliant artist and receptionist, my go to tattoo shop    ",
    author: "terri sustins",
    source: "Google Review",
  },
  {
    text: "Amazing place, lovely people and good laughs. Will definitely be back! Cleanliness: Very professional",
    author: "Rhys Murray",
    source: "Google Review",
  },
  {
    text: "Loved the staff were so friendly and love my tattoos",
    author: "Charlie Scroggie",
    source: "Google Review",
  },
  {
    text: "Lovely studio and friendly staff , make you feel very comfortable and relaxed",
    author: "Clare Markie",
    source: "Google Review",
  },
  {
    text: "Good omens has such a good vibe, with friendly welcoming staff and I love my tattoo!!    ",
    author: "Katie Abercromby",
    source: "Google Review",
  },
  {
    text: "Came in for the Star Wars flash day! Had a great experience :)",
    author: "Alana McDowall",
    source: "Google Review",
  },
  {
    text: "Great studio, really chilled atmosphere and friendly artists, highly recommend",
    author: "TJ Murray",
    source: "Google Review",
  },
  {
    text: "Great Experience today love my tattoos thanks again.",
    author: "Morag Marshall",
    source: "Google Review",
  },
  {
    text: "Fabulous space and great staff - would definitely recommend if you’re in Dundee",
    author: "Anna Johnstone",
    source: "Google Review",
  },
  {
    text: "Great service, really happy with the results from walk-in day!",
    author: "Fraser Kelly",
    source: "Google Review",
  },
  {
    text: "The maiste damage place for a tattoo this side of the bridge",
    author: "DJ Kinnie",
    source: "Google Review",
  },
  {
    text: "Really nice studio, love my new Tattoo!",
    author: "Drew",
    source: "Google Review",
  },
  {
    text: "Great day, will definitely be back!",
    author: "Regan Marshall",
    source: "Google Review",
  },
  {
    text: "Staff was very nice and friendly, 100% recommend",
    author: "Megan High",
    source: "Google Review",
  },
  {
    text: "Flash Star Wars tattoo, looks really good",
    author: "Thomas Barclay",
    source: "Google Review",
  },
  {
    text: "Staff are friendly good customer service",
    author: "Dani Christie",
    source: "Google Review",
  },
  {
    text: "Spotless studio, pleasure being tattooed here",
    author: "Kenny Macnaughton",
    source: "Google Review",
  },
  {
    text: "Friendly staff very clean and professional",
    author: "Michael Spalding",
    source: "Google Review",
  },
  {
    text: "Done a get what you get and got this guy",
    author: "Josh Hamilton",
    source: "Google Review",
  },
  {
    text: "Great place",
    author: "Nathan Boyd",
    source: "Google Review",
  },
];

export default function Example() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentReview = reviews[currentReviewIndex];

  return (
    <div className="relative isolate overflow-hidden bg-tealGreen-200 px-6 py-24 sm:py-32 lg:px-8">

  <div className="absolute inset-0 -z-10 bg-tealGreen-200" />
  <div className="absolute inset-0 -z-10" />
  <div className="mx-auto max-w-2xl lg:max-w-4xl">
    <img className="mx-auto h-24 mt-6" src="/GoodOmens.png" alt="Good Omens Logo" />
      <h2 className="text-3xl font-bold text-center text-black"></h2>
    <figure className="mt-10">
      <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
        <p>{currentReview.text}</p>
      </blockquote>
      <figcaption className="mt-10">
        <div className="mt-4 flex items-center justify-center space-x-3 text-base">
          <div className="font-semibold text-gray-900">{currentReview.author}</div>
          <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
            <circle cx={1} cy={1} r={1} />
          </svg>
          <div className="text-gray-600">{currentReview.source}</div>
        </div>
      </figcaption>
    </figure>
  </div>
</div>
  );
}
