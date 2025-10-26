import Image from "next/image";
import Faq from "@/components/Faq";
import RatesCalculator from "@/components/RatesCalculator";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <div className="font-sans">
      {/* হিরো সেকশন - গভীর নীল গ্রেডিয়েন্ট */}
      <section id="hero" className="relative overflow-hidden bg-[linear-gradient(180deg,#218A48_0%,#1a6b38_50%,#145c2f_100%)] text-white min-h-screen pt-16 flex items-center">
        <div className="absolute inset-0 pointer-events-none">
          <Image src="/assets/hero_2.png" alt="হিরো ব্যাকগ্রাউন্ড" fill className="object-cover opacity-70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(33,138,72,0.0)_0%,rgba(20,92,47,0.4)_70%)]" />
          <div className="absolute inset-0" style={{backgroundImage:"radial-gradient(1px 1px at 25px 25px, rgba(255,255,255,0.25) 1px, transparent 1px)",backgroundSize:"50px 50px",opacity:0.15}} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs text-white/90">
              <span>দ্রুত ও নিরাপদ</span>
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">
              দেশে রেমিট্যান্স পাঠানো এখন আরও সহজ ও নিরাপদ। 
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              সারা বিশ্বে ৫ লক্ষ+ গ্রাহক এর সাথে যুক্ত হোন।
            </p>
           
            <div className="mt-6 flex items-center gap-2 text-white/80">
              <div className="flex items-center gap-1 text-yellow-400">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-sm">৪.৮ স্টোর রেটিং</span>
            </div>
          </div>
          <div className="relative">
            <RatesCalculator />
          </div>
        </div>
      </section>

      <section className="relative bg-neutral-50 min-h-screen flex items-center justify-center">
        {/* decorative corner images */}
        <div className="absolute inset-0">
          <Image src="/assets/1.avif" alt="" width={256} height={256} className="absolute top-6 left-4 sm:top-8 sm:left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
          <Image src="/assets/2.avif" alt="" width={256} height={256} className="absolute top-6 right-4 sm:top-8 sm:right-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
          <Image src="/assets/3.avif" alt="" width={256} height={256} className="absolute bottom-6 left-4 sm:bottom-8 sm:left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
          <Image src="/assets/4.avif" alt="" width={256} height={256} className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full object-cover shadow-2xl ring-4 ring-white/70 transition-transform duration-300 ease-out hover:scale-110 select-none" />
        </div>
        {/* কেন্দ্রের টেক্সট */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-neutral-900">
            বিশ্বজুড়ে <span className="text-sky-600">৫,০০,০০০+</span> গ্রাহকের আস্থা
          </h2>
          <p className="mt-4 text-lg text-neutral-700">US, UK, EU, আফ্রিকা ও এশিয়ায় তাৎক্ষণিক, সাশ্রয়ী ও নিরাপদ রেমিট্যান্স ট্রান্সফার।</p>
          <a href="/pi_business_v4.apk" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#218A48] hover:bg-[#1a6b38] text-white px-6 py-3 text-sm font-medium transition">এখনই ডাউনলোড করুন</a>
        </div>
      </section>

      {/* Two-row feature layout */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left: Text block with decorative floating cards */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">প্রবাস থেকে পরিবারের কাছে টাকা পাঠান</h2>
              <p className="mt-4 text-neutral-700 max-w-prose">বিদেশে থেকে দেশ এ রেমিট্যান্স পাঠানো এখন আরও সহজ ও নিরাপদ। </p>
              <p className="mt-3 text-neutral-700 max-w-prose">PI Business অ্যাপ এর মাধ্যমে পরিবারের কাছে দ্রুত টাকা পাঠান।</p>
              <div className="mt-8 relative h-80 sm:h-96">
                {/* halo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-64 w-64 sm:h-72 sm:w-72 rounded-full bg-sky-100/60 blur-0" />
                </div>
                {/* top pill */}
                <div className="absolute left-1/2 -translate-x-1/2 top-10 rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">💙</span>
                  <span className="text-sm text-neutral-800">মাকে পাঠানো হয়েছে ✅</span>
                </div>
                {/* middle card */}
                <div className="absolute left-1/2 -translate-x-1/2 top-28 sm:top-32 w-[320px] sm:w-[360px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 px-5 py-4 flex items-center gap-3">
                  <Image src="/assets/1.avif" alt="Friend avatar" width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                  <div className="flex-1">
                    <div className="font-medium text-neutral-900">PI Business এর মাধ্যমে বন্ধুদের কাছে পাঠান</div>
                    <div className="mt-1 text-xs text-neutral-600">কন্ট্যাক্ট নির্বাচন করুন</div>
                  </div>
                  <span className="text-xl">👋</span>
                </div>
                {/* bottom pill */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-[280px] rounded-2xl bg-white shadow-xl ring-1 ring-black/5 px-4 py-3 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-700">💙</span>
                  <span className="text-sm text-neutral-800">ডিপোজিট করেছেন!</span>
                </div>
              </div>
            </div>

            {/* Right: Feature card */}
            <div>
              <div className="rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-sky-100 flex items-center justify-center ring-1 ring-sky-200">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7 text-sky-700">
                      <path d="M4 14l4-4 4 4 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">সর্বোচ্চ এক্সচেঞ্জ রেট , বৈধ মাধ্যম!</h3>
                    <p className="mt-2 text-neutral-700">আপনার কষ্টার্জিত অর্থ দেশ এ আপনার পরিবারের কাছে পাঠান যখন ইচ্ছা, যত ইচ্ছা। উপভোগ করুণ সর্বাধিক বৈধ এক্সচেঞ্জ রেট</p>
                    <p className="mt-2 text-neutral-800"><span className="font-semibold">প্রতিদিন ১০ লক্ষ টাকা পর্যন্ত পাঠাতে পারবেন</span>—যেকোনো সময়, নিজ ফোন থেকে ।</p>
                  </div>
                </div>
              </div>
              {/* Desktop-only: Stay in Control card stacked under the right card */}
              <div className="hidden md:block mt-6 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">লেনদেন এর পূর্ণ নিয়ন্ত্রণ আপনার</h3>
                <p className="mt-2 text-neutral-700">রিয়েল-টাইম আপডেট ও ইনস্ট্যান্ট নোটিফিকেশনের মাধ্যমে সব লেনদেন এর খোঁজ রাখুন।</p>
              </div>
            </div>
          </div>

          {/* Mobile-only full-width: Stay in Control card */}
          <div className="md:hidden mt-10 sm:mt-12 rounded-3xl bg-white shadow-2xl ring-1 ring-black/5 p-6 sm:p-8">
            <h3 className="text-2xl font-semibold tracking-tight text-neutral-900">ট্রান্সফারের পূর্ণ নিয়ন্ত্রণ আপনার</h3>
            <p className="mt-2 text-neutral-700 max-w-3xl">রিয়েল-টাইম আপডেট ও ইনস্ট্যান্ট নোটিফিকেশনে সব ট্রান্সফারের খোঁজ রাখুন</p>
          </div>
        </div>
      </section>

     

      {/* QR Download section (per provided design) */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#218A48] to-[#145c2f] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Large phone mockup with real screenshot */}
            <div className="relative mx-auto w-full max-w-md aspect-[9/19]">
              <div className="absolute inset-0 rounded-[3rem] bg-neutral-900 shadow-2xl" />
              <div className="absolute left-3 right-3 top-4 bottom-4 rounded-[2.5rem] bg-black overflow-hidden">
                <Image src="/assets/phone.jpg" alt="PI Business app screenshot" fill className="object-cover" />
              </div>
            </div>

            {/* Right: Heading, Text, CTA */}
            <div>
              <h2 className="text-4xl sm:text-5xl font-semibold leading-tight text-white">PI Business ডাউনলোড করুন<br />এবং রিসেলার বাবসা শুরু করুন!</h2>
              <p className="mt-6 text-lg text-white/90 max-w-md">
                আজই PI Business দিয়ে শুরু করুন রিসেলার বিজনেস এবং আপনার প্রিয়জনদের কাছে দ্রুত, নিরাপদ এবং সাশ্রয়ী উপায়ে টাকা পাঠান ।
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>ট্রান্সফারে কোনো ফি নেই</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>তাৎক্ষণিক টাকা পাঠানো</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>সেরা এক্সচেঞ্জ রেট</span>
                </div>
              </div>
              <a href="/pi_business_v4.apk" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#218A48] hover:bg-[#1a6b38] px-8 py-3 text-base font-medium shadow-lg transition">
                <span>এখনই ডাউনলোড করুন</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Frequently Asked Questions</h2>
          <div className="mt-6">
            <Faq />
          </div>
        </div>
      </section>

      
    </div>
  );
}
