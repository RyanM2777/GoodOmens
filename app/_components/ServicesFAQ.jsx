import React from 'react'

function ServicesFAQ() {
  return (
    <div className="bg-tealGreen-100">
  <div className="container mx-auto px-4 py-6">
    <h1 className="text-center text-tealGreen-500 text-2xl mb-6">Frequently Asked Questions</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* First FAQ Section */}
      <div className="bg-tealGreen-100">
      <div className="flex items-center gap-4 bg-tealGreen-100 mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-700">TATTOOS FAQs</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <div className="mx-auto max-w-lg bg-tealGreen-100">
          <div className="space-y-6">
            {/* FAQ Items for the First Section */}
            <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
        Can I bring someone to my appointment?
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">You may bring someone with you to your appointment, however they may not be permitted into the tattoo area. This is for several reasons: <br /> <br /> Due to health and safety- during the procedure we are dealing with bodily fluids and essentially open woulds- we need to minimise the risk of contamination. The dignity of our customers- for some tattoos our customers are required to adjust their clothing and discretion is required. Busy studio- if the studio is busy there may simply not be room for your friend to come along! <br /> <br /> Some exceptions may be permitted, let us know before coming to your appointment. We politely remind customers that our studio is not child friendly, no children are permitted in the main studio and we ask that they are not in the reception area for any extended period of time. We are not babysitters and take no responsibility for children left unattended.</div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
        When can I see my design?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Please except your design 24-48hrs before your appointment- this is standard practice for most artists and studios. Without an appointment and a deposit, the artist is essentially working for hours for free. They must create multiple designs for every day they work- these are usually done in their free time, in order and a day or two prior to the appointment (this saves them wasting time over rescheduled or canceled appointments) We have also in the past had customers take the design and tattooed elsewhere- stealing that persons work.</div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
        How should I prep for my Tattoo?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Please do not shave or wax the area for 4 days prior to the procedure. We will shave the area on site immediately prior to the tattoo. This is to lessen the likelihood of razor rash, ingrown hairs and cuts- if these were present on the tattoo area we may not be able to tattoo you. Please also do not apply fake tan close to your appointment or soon after - this can have a huge effect on the colour of your finished tattoo and lead to it healing very differently. </div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      I think I might be pregnant, can I get a tattoo?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Short answer - no. Although the risk of infection is incredibly small, it is a possibility if aftercare is not followed. Also, pregnancy can send the body into a healing overdrive and cause the ink to reject, and we dont want that to happen!! </div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      Is the studio accessible?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Yes! We are on one level with disabled access bathrooms. There is a step up into the reception area, please let us know beforehand and we can make sure this is safely navigable for wheelchair users prior to your appointment. </div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      Payment
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">We are currently a CASH ONLY studio. Artists can be paid by bank transfer or cash only. There are several cash machines less than 50m from the shop entrance.

For any other queries please contact us on the booking form <div className="mt-2 flex items-center justify-center gap-x-6">
              
              <a href="/contact" className="text-sm font-bold leading-6 text-tealGreen-400">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div> </div>
    </details>
          </div>
        </div>
      </div>
      {/* Second FAQ Section */}
      <div className="bg-tealGreen-100">
        <div className="mx-auto max-w-lg bg-tealGreen-100">
          <div className="space-y-6">
          <div className="flex items-center gap-4 bg-tealGreen-100 mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-gray-700">PIERCINGS FAQs</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
            {/* FAQ Items for the Second Section */}
            <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      How old do I need to be?
        <div class="text-secondary-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Please note that we only pierce ears for under 16s, and under 16s will need a parent of guardian present, who must also bring photo ID. Nipple piercings are done on ages 16+ only. </div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      Can I come in for a consultation?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Yes! Please let us know when you would like to come in, as we may be busy with other clients, but we are always happy to take a look and discuss piercings with you and make sure you have suitable anatomy.</div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      What do you pierce with?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">We only use needles - no guns!! We think guns are extremely brutal and outdated, and cause far more trauma than is necessary. We also only use implant grade titanium for all of our piercings - its by far the easiest and best for ensuring your piercing heals well with minimal chance of rejection. </div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      Can you change my jewellery?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">Yes, we can. If its a downsize after your initial tongue or nipple piercing, this is free of charge, if you want us to change your existing jewellery to one supplied by yourself or something we sell as an upgrade, this is done for a £10 nominal fee.
 </div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      Can I supply my own jewellery for the piercing?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">We only pierce with our own sterlised jewellery, we cannot pierce and fit you with any jewellery supplied by yourselves.</div>
    </details>
    <details class="group rounded-xl bg-tealGreen-100 shadow-[0_10px_100px_10px_rgba(0,0,0,0.05)]">
      <summary class="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-black">
      How private is the appointment?
        <div class="text-black">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="block h-5 w-5 transition-all duration-300 group-open:-rotate-90">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </summary>
      <div class="px-6 pb-6 text-black">All piercings take place in their own room at the back of the shop. Privacy is of utmost importance to us, as is your comfort.

For any further queries, please contact us on the booking form <div className="mt-2 flex items-center justify-center gap-x-6">
              
              <a href="/contact" className="text-sm font-bold leading-6 text-tealGreen-400">
                Get in touch <span aria-hidden="true">→</span>
              </a>
            </div> </div>
              
              
    </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default ServicesFAQ