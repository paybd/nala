import Image from "next/image";

export default function BusinessPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[linear-gradient(180deg,#218A48_0%,#1a6b38_50%,#145c2f_100%)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight">PI Business</h1>
            <p className="mt-4 text-lg text-white/85 max-w-xl">
            প্রবাস থেকে পাই বিজনেস এজেন্ট হয়ে উপার্জনের সুবর্ণ সুযোগ উপভোগ করুণ।
            </p>
            <a
              href="/pi_business_v2.apk"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#218A48] hover:bg-[#1a6b38] px-6 py-3 text-base font-medium text-white shadow-lg transition"
              aria-label="Download Business App"
            >
              বিজনেস অ্যাপ ডাউনলোড করুন
            </a>
          </div>
          <div className="relative mx-auto w-full max-w-md aspect-[9/19]">
            <div className="absolute inset-0 rounded-[3rem] bg-neutral-900 shadow-2xl" />
            <div className="absolute left-3 right-3 top-4 bottom-4 rounded-[2.5rem] bg-black overflow-hidden">
              <Image src="/assets/phone.jpg" alt="PI Business app screenshot" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">কেন PI Business?</h2>
          <p className="mt-4 text-neutral-700">
            বৈধ পদ্ধতিতে সর্বোচ্চ রেট, সুপার ফাস্ট লেনদেন, এক্সট্রা কমিশন এবং চমৎকার সাপোর্ট—সব এক প্ল্যাটফর্মে।
          </p>
        </div>
      </section>
    </div>
  );
}


