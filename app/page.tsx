'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Reveal from '@/components/Reveal';

const services = [
  {
    title: 'استراتژی برند',
    description: 'طراحی مسیر رشد با تکیه بر داده و شناخت بازار تا برندی متمایز بسازید.',
    icon: '🎯',
  },
  {
    title: 'مارکتینگ دیجیتال',
    description: 'کمپین‌های هوشمند، بهینه‌سازی کانال‌ها و گزارش‌دهی شفاف برای رشد پایدار.',
    icon: '🚀',
  },
  {
    title: 'تجربه کاربری و محصول',
    description: 'طراحی رابط و تجربه‌ای که مخاطب را درگیر کند و نرخ تبدیل را افزایش دهد.',
    icon: '✨',
  },
  {
    title: 'توسعه وب و اپلیکیشن',
    description: 'زیرساختی سریع و ایمن با تکنولوژی‌های به‌روز و استانداردهای مدرن.',
    icon: '🛠️',
  },
];

const features = [
  {
    title: 'طراحی داینامیک و مدرن',
    desc: 'انیمیشن‌های روان، پس‌زمینه‌های لایه‌ای و گرادیان‌های عمیق برای حس برندینگ لوکس.',
  },
  {
    title: 'ریسپانسیو در همه ابعاد',
    desc: 'چیدمان انعطاف‌پذیر، منوی همبرگری تمیز و کارت‌هایی با قابلیت لمس راحت.',
  },
  {
    title: 'معماری قابل توسعه',
    desc: 'داده‌های کارت‌ها و لیست‌ها به‌صورت آرایه مدیریت می‌شوند تا اضافه یا ویرایش سریع باشد.',
  },
];

const steps = [
  {
    title: 'تحلیل و کشف',
    detail: 'شناخت دقیق مخاطب، رقبا و مسیرهای رشد برای طراحی نقشه راه عملیاتی.',
  },
  {
    title: 'طراحی و نمونه‌سازی',
    detail: 'طراحی رابط و تجربه کاربری با پروتوتایپ تعاملی و تست سریع.',
  },
  {
    title: 'پیاده‌سازی و لانچ',
    detail: 'توسعه فرانت و بک‌اند با استانداردهای به‌روز، مانیتورینگ و بهینه‌سازی.',
  },
];

const testimonials = [
  {
    name: 'شرکت نوآور',
    role: 'مدیرعامل',
    quote: 'همکاری با گوریل باعث شد تجربه دیجیتال ما از رقبا متمایز شود و نرخ تبدیل دو برابر گردد.',
  },
  {
    name: 'برند فروشگاهی',
    role: 'مدیر بازاریابی',
    quote: 'تیم چابک، گزارش‌دهی شفاف و طراحی چشم‌گیر؛ دقیقاً چیزی که برای رشد نیاز داشتیم.',
  },
];

const clients = ['دیجی‌برند', 'فین‌تک پلاس', 'توسعه‌یار', 'همراه‌مارکت', 'کافه‌نت'];

const stats = [
  { label: 'پروژه موفق', value: '120+' },
  { label: 'نرخ رضایت', value: '98%' },
  { label: 'میانگین رشد', value: '2.4x' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gouril-dark">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" aria-hidden />
      <Navbar />

      <section id="hero" className="section-padding relative">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 lg:flex-row lg:items-center">
          <div className="relative flex-1 space-y-6">
            <div className="pill w-fit bg-white/10 shadow-glow">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-gouril-primary to-gouril-secondary shadow-glow" />
              <span>هم‌قدم با برندهای جسور</span>
            </div>

            <Reveal as="h1" className="text-3xl leading-relaxed sm:text-4xl lg:text-5xl">
              با گوریل، صفحه اول برندتان را مدرن، پویا و اثرگذار بسازید.
            </Reveal>
            <Reveal delay={0.1} className="text-slate-300 leading-8">
              طراحی تازه، انیمیشن‌های ملایم و ساختار قابل‌توسعه؛ بدون تغییر محتوا و هویت بصری فعلی شما.
            </Reveal>

            <Reveal delay={0.2} className="flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="rounded-full bg-white text-gouril-dark px-6 py-3 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5 hover:shadow-[0_15px_50px_rgba(255,255,255,0.25)]"
              >
                مشاهده خدمات
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
              >
                شروع گفتگو
              </a>
            </Reveal>

            <div className="grid grid-cols-3 gap-4 sm:w-fit">
              {stats.map((item, index) => (
                <Reveal key={item.label} delay={0.25 + index * 0.05} className="glass-panel p-4 text-center">
                  <p className="text-xl font-bold text-white">{item.value}</p>
                  <p className="text-xs text-slate-400">{item.label}</p>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="relative flex-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="glass-panel relative overflow-hidden p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5" aria-hidden />
              <div className="relative space-y-6">
                <p className="pill bg-white/5 text-sm font-semibold text-white/90">پیش‌نمایش پویا</p>
                <p className="text-lg leading-8 text-slate-200">
                  رابطی تمیز با پس‌زمینه‌های لایه‌ای و خطوط ظریف که حس عمق و حرکت ایجاد می‌کند. کارت‌ها با هاور ملایم بزرگ می‌شوند و CTAها سایه نرم می‌گیرند.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['اسکرول ریویل', 'هاور کارت', 'گرادیان نرم', 'پارالاکس ملایم'].map((item, idx) => (
                    <motion.div
                      key={item}
                      whileHover={{ y: -6, scale: 1.02 }}
                      className="glass-panel border-white/5 p-4 text-sm text-slate-200"
                      transition={{ type: 'spring', stiffness: 220, damping: 18, delay: idx * 0.02 }}
                    >
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-gradient-to-br from-gouril-primary/40 to-gouril-secondary/30 blur-3xl"
                animate={{ y: [0, 12, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
              <motion.div
                className="pointer-events-none absolute -right-10 bottom-0 h-48 w-48 rounded-full bg-gradient-to-tl from-gouril-secondary/30 to-gouril-accent/30 blur-3xl"
                animate={{ y: [0, -10, 0], scale: [1, 1.08, 1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                aria-hidden
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="section-padding">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="pill bg-white/5 text-xs text-slate-200">خدمات اصلی</p>
              <h2 className="mt-4 text-2xl md:text-3xl">هرآنچه برای صفحه اول متفاوت نیاز دارید</h2>
              <p className="mt-2 max-w-2xl text-slate-400">تمامی کارت‌ها و لیست‌ها به‌صورت داینامیک رندر می‌شوند تا اضافه کردن سرویس‌های جدید در آینده ساده باشد.</p>
            </div>
            <a className="text-sm text-gouril-secondary hover:text-white" href="#contact">
              رزرو جلسه مشاوره →
            </a>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 0.08}>
                <div className="group glass-panel relative overflow-hidden p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(142,225,255,0.08), transparent 35%)' }} aria-hidden />
                  <div className="relative space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-xl">{service.icon}</span>
                      <h3 className="text-xl">{service.title}</h3>
                    </div>
                    <p className="text-sm leading-7 text-slate-300">{service.description}</p>
                    <div className="text-xs text-gouril-secondary">هاور کنید تا انرژی کارت را ببینید</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="section-padding">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="space-y-4">
              <p className="pill bg-white/5 text-xs text-slate-200">تجربه جدید</p>
              <h2 className="text-3xl">بازطراحی بدون تغییر محتوا، با حس آینده‌گرا</h2>
              <p className="text-slate-400">چیدمان اصلی و متن‌ها حفظ شده‌اند اما سطح جزئیات، فضاها و انیمیشن‌ها ارتقا یافته تا صفحه در نگاه اول حرفه‌ای و زنده به نظر برسد.</p>
              <div className="grid gap-4 md:grid-cols-2">
                {features.map((feature, idx) => (
                  <Reveal key={feature.title} delay={idx * 0.1} className="glass-panel p-5">
                    <h3 className="text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{feature.desc}</p>
                  </Reveal>
                ))}
              </div>
            </div>

            <motion.div
              className="glass-panel relative overflow-hidden p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gouril-primary/15 via-transparent to-gouril-secondary/15" aria-hidden />
              <div className="relative space-y-4">
                {steps.map((step, idx) => (
                  <motion.div
                    key={step.title}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-white/5 p-4"
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-sm font-semibold text-white">
                      0{idx + 1}
                    </div>
                    <div>
                      <p className="text-base font-semibold">{step.title}</p>
                      <p className="text-sm leading-7 text-slate-300">{step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                className="pointer-events-none absolute left-6 top-6 h-28 w-28 rounded-full bg-gouril-secondary/25 blur-3xl"
                animate={{ y: [0, -8, 0], opacity: [0.6, 0.9, 0.6] }}
                transition={{ duration: 7, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="clients" className="section-padding">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="pill bg-white/5 text-xs text-slate-200">اعتماد برندها</p>
              <h2 className="mt-3 text-2xl md:text-3xl">همراه رشد برندهای پیشرو</h2>
            </div>
            <p className="text-sm text-slate-400">لوگو و هویت فعلی شما بدون تغییر باقی می‌ماند.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            {clients.map((client, idx) => (
              <Reveal key={client} delay={idx * 0.06} className="glass-panel flex h-24 items-center justify-center p-4 text-sm text-slate-200 hover:-translate-y-2 hover:shadow-glow">
                {client}
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {testimonials.map((item, idx) => (
              <Reveal key={item.name} delay={idx * 0.08}>
                <div className="glass-panel flex flex-col gap-4 p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-white/10" />
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="leading-8 text-slate-200">“{item.quote}”</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section-padding">
        <div className="mx-auto max-w-5xl px-5">
          <div className="glass-panel relative overflow-hidden p-8 text-center">
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5"
              animate={{ opacity: [0.7, 0.9, 0.7] }}
              transition={{ duration: 6, repeat: Infinity }}
              aria-hidden
            />
            <div className="relative space-y-4">
              <p className="pill mx-auto w-fit bg-white/10 text-xs text-slate-200">آماده همکاری</p>
              <h2 className="text-3xl">شروع یک تجربه تازه برای صفحه اصلی شما</h2>
              <p className="text-slate-300">ساختار فعلی حفظ می‌شود اما استایل و انیمیشن‌ها ارتقا می‌یابند. برای هماهنگی جلسه و دریافت نسخه دموی سفارشی پیام بدهید.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:hello@gouril.com"
                  className="rounded-full bg-white text-gouril-dark px-6 py-3 text-sm font-semibold shadow-glow transition hover:-translate-y-0.5"
                >
                  hello@gouril.com
                </a>
                <a
                  href="tel:+989000000000"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
                >
                  ۰۹۰۰ ۰۰۰ ۰۰۰۰
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-10 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Gouril — همه حقوق محفوظ است.</p>
          <div className="flex gap-4">
            <a href="#hero" className="hover:text-white">بازگشت به بالا</a>
            <a href="#contact" className="hover:text-white">تماس</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
