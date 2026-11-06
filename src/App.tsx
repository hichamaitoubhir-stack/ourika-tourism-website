import { useState, useContext, useEffect, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, Users, MapPin, Star, ArrowUpRight, Menu, X, 
  Mountain,MountainSnow, UtensilsCrossed, Droplets, Home as HomeIcon,
  Leaf, Heart, Quote, Check, Shield, Calendar,
  Mail, Phone, Instagram, Facebook, Youtube,
  ChevronRight, Play, Sparkles
} from 'lucide-react';
import { experiences, reviews as reviewsData } from './lib/data';
import { LangContext, dict, type Lang } from './lib/i18n';
import WinterPromotionBar from "./lib/WinterPromotionBar";
import FAQSection from "./lib/FAQSection";
import Logo from "./lib/Logo";
import { UserRound } from 'lucide-react';
import LegalLinks from "./lib/LegalLinks";
import Privacy from "./lib/pages/Privacy";
import Terms from "./lib/pages/Terms";
import Imprint from "./lib/pages/Imprint";




const WHATSAPP_NUMBER = '212606125022';
const WA_LINK = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

// --- Lang Provider
function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>(() => (localStorage.getItem('ourika-lang') as Lang) || 'en');
  const setLang = (l: Lang) => { setLangRaw(l); localStorage.setItem('ourika-lang', l); };
  const t = dict[lang];
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

// --- Header

function Header() {
  const { lang, setLang, t } = useContext(LangContext);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(()=>{ const h=()=>setScrolled(window.scrollY>20); window.addEventListener('scroll',h); return()=>window.removeEventListener('scroll',h); },[]);
  useEffect(()=>{ setOpen(false); },[loc.pathname]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/experiences', label: t.nav.experiences },
    { to: '/half-day-tours', label: t.nav.half },
    { to: '/full-day-tours', label: t.nav.full },
    { to: '/sahara-desert', label: 'Sahara-Desert',isNew: true },
    // { to: '/about', label: t.nav.about },
    // { to: '/gallery', label: t.nav.gallery },
    // { to: '/blog', label: t.nav.blog },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled||open?'bg-[#FFFBF2]/90 backdrop-blur-xl shadow-[0_2px_30px_rgba(0,0,0,0.06)]':'bg-transparent'}`}>
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8 h-[72px] flex items-center justify-between ">
          <Logo/>

          <nav className="hidden lg:flex items-center gap-1  backdrop-blur  rounded-full p-3 " >
            {links.map(l=>(
              <Link key={l.to} to={l.to} className={`px-4 py-2 rounded-full text-[13.5px] font-[550] tracking-[-0.01em] transition ${loc.pathname===l.to?'bg-[#1A3A2F] text-white':'text-[#1A3A2F]/70 hover:text-[#1A3A2F] hover:bg-[#F5EBDC]'}`}>{l.label}</Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1 rounded-full bg-white border border-black/5 p-1">
              {(['en','fr','es'] as Lang[]).map(l=>(
                <button key={l} onClick={()=>setLang(l)} className={`w-8 h-8 rounded-full text-[11px] font-[700] uppercase tracking-wide transition ${lang===l?'bg-[#1A3A2F] text-white':'text-[#1A3A2F]/60 hover:bg-[#F5EBDC]'}`}>{l}</button>
              ))}
            </div>
           
            <a href={WA_LINK('Salam! I want to know about Ourika experiences')} target="_blank" className="hidden md:inline-flex h-10 px-4 items-center gap-2 rounded-full bg-[#D9773A] text-white text-[13px] font-[600] hover:bg-[#B85C24] transition">
              <span className="w-5 h-5 rounded-full bg-white/20 grid place-items-center">↗</span> {t.common.whatsapp}
            </a>
            <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-[#1A3A2F] text-white">
              {open?<X className="w-5 h-5"/>:<Menu className="w-5 h-5"/>}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-10 }} className="lg:hidden border-t border-black/5 bg-[#FFFBF2]">
              <div className="px-6 py-6 grid gap-1">
                {links.map(l=>(
                  <Link key={l.to} to={l.to} className={`py-3 text-[18px] font-display font-[550] tracking-tight flex items-center justify-between border-b border-black/5 last:border-0 ${loc.pathname===l.to?'text-[#D9773A]':'text-[#1A3A2F]'}`}>{l.label}<ChevronRight className="w-4 h-4 opacity-40"/></Link>
                ))}
               
                            
<div className="flex items-center justify-center gap-4 pt-4">
  {([
    {
      code: 'en',
      label: 'English',
      flag: 'https://flagcdn.com/w80/gb.png',
    },
    {
      code: 'fr',
      label: 'Français',
      flag: 'https://flagcdn.com/w80/fr.png',
    },
    {
      code: 'es',
      label: 'Español',
      flag: 'https://flagcdn.com/w80/es.png',
    },
  ] as const).map((item) => (
    <button
      key={item.code}
      type="button"
      onClick={() => setLang(item.code)}
      aria-label={item.label}
      title={item.label}
      aria-pressed={lang === item.code}
      className={`flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-200 hover:scale-110 ${
        lang === item.code
          ? 'border-[#D9773A] bg-[#1A3A2F] shadow-md'
          : 'border-black/10 bg-white'
      }`}
    >
      <img
        src={item.flag}
        alt={item.label}
        className="h-6 w-6 rounded-full object-cover"
        loading="lazy"
      />
    </button>
  ))}
</div>


              {/* labguage */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <div className="h-[72px]" />
       
    </>
  );
}

function Footer() {
  const { t } = useContext(LangContext);
  return (
    <footer className="bg-[#1A3A2F] text-[#F5EBDC]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-10 pb-12 border-b border-white/10">
          <div>
            <Logo/ >
            
            <p className="text-[14px] leading-[1.6] text-white/60 max-w-[32ch]">{t.footer.tagline}</p>
            <div className="flex gap-2 mt-6">
              {[Instagram, Facebook, Youtube].map((I,i)=>(
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-white/10 grid place-items-center hover:bg-[#D9773A] transition"><I className="w-4 h-4"/></a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.15em] font-[700] mb-4 text-white/40">{t.footer.links}</h4>
            <div className="grid gap-2 text-[14px] text-white/70">
  <Link to="/experiences" className="hover:text-white">Experiencias</Link>
  <Link to="/half-day-tours" className="hover:text-white">Excursiones de medio día</Link>
  <Link to="/full-day-tours" className="hover:text-white">Excursiones de día completo</Link>
  <Link to="/blog" className="hover:text-white">Diario de viaje</Link>
  <Link to="/gallery" className="hover:text-white">Galería</Link>

            </div>
          </div>
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.15em] font-[700] mb-4 text-white/40">{t.footer.contact}</h4>
            <div className="grid gap-3 text-[14px] text-white/70">
              <div className="flex gap-2"><MapPin className="w-4 h-4 mt-0.5 text-[#D9773A]"/> Sahara Desierto & Atlas Montañas<br/>Desde Marrakesh</div>
              <div className="flex gap-2"><Phone className="w-4 h-4 mt-0.5 text-[#D9773A]"/>+212 6 06 12 50 22</div>
              <div className="flex gap-2"><Mail className="w-4 h-4 mt-0.5 text-[#D9773A]"/>hola@atlas-desierto.com</div>
            </div>
          </div>
          <div className="bg-white/[0.06] rounded-[20px] p-5 border border-white/10">
            <div className="flex items-center gap-2 text-[12px] font-[700] tracking-[0.12em] uppercase text-[#8FBDA3]"><Shield className="w-4 h-4"/>Secure & Direct</div>
            <p className="text-[13px] leading-[1.5] text-white/60 mt-3">Pagos procesados a través de Stripe y PayPal. Cancelación gratuita hasta 24 horas antes. El 100 % de los beneficios se destina a las familias locales, sin intermediarios.</p>
            <div className="flex gap-2 mt-4 text-[10px] font-[700] tracking-wide">
              <span className="px-2.5 py-1 rounded-full bg-white text-[#1A3A2F]">STRIPE</span>
              <span className="px-2.5 py-1 rounded-full bg-white text-[#1A3A2F]">PAYPAL</span>
              <span className="px-2.5 py-1 rounded-full border border-white/20 text-white/60">CASH</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[12px] text-white/40">
  <span>{t.footer.legal}</span>
  <span className="flex gap-4">
    <a href="/privacy" className="hover:text-white/70">Privacy</a>
    <a href="/terms" className="hover:text-white/70">Terms</a>
    <a href="/Imprint" className="hover:text-white/70">Imprint</a>
  </span>
</div>
        
      </div>
    </footer>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-black/10 text-[11px] font-[700] tracking-[0.08em] uppercase text-[#1A3A2F]">{children}</span>;
}

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  const { lang, t } = useContext(LangContext);
  const l = lang as 'en'|'fr'|'es';
  return (
    <Link to={`/experiences/${exp.slug}`} className="group block bg-white rounded-[24px] border border-black/[0.06] overflow-hidden hover:shadow-[0_20px_60px_rgba(26,58,47,0.12)] transition-all duration-400 hover:-translate-y-1">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={exp.image} alt={exp.title[l]} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.06] transition duration-[800ms] ease-[0.16,1,0.3,1]" />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#FFFBF2] text-[10px] font-[800] tracking-[0.08em] uppercase text-[#1A3A2F]">{exp.category}</span>
          {exp.featured && <span className="px-2.5 py-1 rounded-full bg-[#D9773A] text-[10px] font-[800] tracking-[0.08em] uppercase text-white flex items-center gap-1"><Sparkles className="w-3 h-3"/>Featured</span>}
        </div>
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#1A3A2F] text-white text-[12px] font-[700] flex items-center gap-1"><Star className="w-3.5 h-3.5 fill-white"/>{exp.rating} · {exp.reviewsCount}</div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-[19px] font-[600] leading-[1.15] tracking-[-0.02em] line-clamp-2 group-hover:text-[#D9773A] transition">{exp.title[l]}</h3>
          <div className="shrink-0 w-8 h-8 rounded-full bg-[#F5EBDC] grid place-items-center group-hover:bg-[#1A3A2F] group-hover:text-white transition"><ArrowUpRight className="w-4 h-4"/></div>
        </div>
        <p className="text-[13px] leading-[1.5] text-[#8A7D6B] mt-2 line-clamp-2">{exp.shortDesc[l]}</p>
        <div className="flex items-center gap-3 mt-4 text-[12px] text-[#1A3A2F]/70">
          <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5"/>{exp.duration}</span>
          <span className="inline-flex items-center gap-1"><Users className="w-3.5 h-3.5"/>{exp.groupSize}</span>
          <span className="inline-flex items-center gap-1"><Leaf className="w-3.5 h-3.5"/>{exp.difficulty}</span>
        </div>
        <div className="flex items-baseline justify-between mt-4 pt-4 border-t border-black/5">
          <div><span className="text-[12px] text-[#8A7D6B]">{t.common.from} </span><span className="font-display text-[22px] font-[700] tracking-tight text-[#1A3A2F]">€{exp.price}</span><span className="text-[12px] text-[#8A7D6B]">{t.common.perPerson}</span></div>
          {exp.originalPrice && <span className="text-[12px] line-through text-[#8A7D6B]">€{exp.originalPrice}</span>}
        </div>
      </div>
    </Link>
  );
}

// Booking Widget
function BookingWidget({ exp }: { exp: typeof experiences[0] }) {
  const { t, lang } = useContext(LangContext);
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [food, setFood] = useState(false);
  const [transport, setTransport] = useState(false);
  const [payMode, setPayMode] = useState<'now'|'later'>('now');
  const [success, setSuccess] = useState(false);
  const total = guests * exp.price +(food ? guests * 15 : 0) + (transport ? 80 : 0);

  

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="bg-white rounded-[24px] border border-black/5 p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-[#8FBDA3]/20 text-[#1A3A2F] grid place-items-center mx-auto mb-4"><Check className="w-7 h-7"/></div>
        <h4 className="font-display text-[20px] font-[650]">Booking received — shukran!</h4>
        <p className="text-[13px] text-[#8A7D6B] mt-2">We’ll confirm on WhatsApp & email within 2 hours. Free cancellation 24h before.</p>
        <a href={WA_LINK(`Hi! I just booked ${exp.title[lang as 'en'|'fr'|'es']} for ${guests} guests on ${date}`)} target="_blank" className="mt-4 inline-flex h-11 px-6 items-center justify-center rounded-full bg-[#1A3A2F] text-white text-[13px] font-[650] w-full">Open WhatsApp confirmation</a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="bg-white rounded-[24px] border border-black/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.06)] p-5 lg:p-6 sticky top-[90px]">
      <div className="flex items-baseline justify-between">
  <div>
    <span className="text-[12px] text-[#8A7D6B]">{t.common.from} </span>
    <span className="font-display text-[28px] font-[750] tracking-tight">
      €{exp.price}
    </span>
    <span className="text-[12px] text-[#8A7D6B]">{t.common.perPerson}</span>
  </div>

  <div className="text-[13px] flex items-center gap-1 bg-black text-[#D4AF37] px-3 py-1.5 rounded-full">
    <Star className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
    <span className="font-[700]">{exp.rating}</span>
    <span className="text-[#D4AF37]/80">({exp.reviewsCount})</span>
  </div>
</div>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <label className="grid gap-1.5"><span className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[#8A7D6B]">{t.booking.date}</span><input required type="date" value={date} onChange={e=>setDate(e.target.value)} className="h-11 rounded-full border border-black/10 px-4 text-[14px] bg-[#FFFBF2] focus:outline-none focus:border-[#D9773A]"/></label>
        <label className="grid gap-1.5"><span className="text-[11px] font-[700] tracking-[0.08em] uppercase text-[#8A7D6B]">{t.booking.guests}</span><select value={guests} onChange={e=>setGuests(Number(e.target.value))} className="h-11 rounded-full border border-black/10 px-4 text-[14px] bg-[#FFFBF2] focus:outline-none"><option value={1}>1 guest</option><option value={2}>2 guests</option><option value={3}>3 guests</option><option value={4}>4 guests</option><option value={6}>5-6 guests</option><option value={8}>7-10 guests</option></select></label>
      </div>

      <div className="grid gap-3 mt-4">
        <input required placeholder={t.booking.name} value={name} onChange={e=>setName(e.target.value)} className="h-11 rounded-full border border-black/10 px-4 text-[14px] bg-white focus:outline-none focus:border-[#D9773A]"/>
        <input required type="email" placeholder={t.booking.email} value={email} onChange={e=>setEmail(e.target.value)} className="h-11 rounded-full border border-black/10 px-4 text-[14px] bg-white focus:outline-none focus:border-[#D9773A]"/>
        <textarea placeholder={t.booking.message} value={msg} onChange={e=>setMsg(e.target.value)} rows={3} className="rounded-[16px] border border-black/10 p-4 text-[14px] bg-white focus:outline-none focus:border-[#D9773A] resize-none"/>
      </div>

      <div className="flex gap-2 mt-4 p-1 rounded-full bg-[#F5EBDC] border border-black/5">
        <button type="button" onClick={()=>setPayMode('now')} className={`flex-1 h-9 rounded-full text-[12px] font-[650] transition ${payMode==='now'?'bg-[#1A3A2F] text-white':'text-[#1A3A2F]/60'}`}>{t.booking.pay}</button>
        <button type="button" onClick={()=>setPayMode('later')} className={`flex-1 h-9 rounded-full text-[12px] font-[650] transition ${payMode==='later'?'bg-[#1A3A2F] text-white':'text-[#1A3A2F]/60'}`}>{t.booking.payLater}</button>
      </div>
      {/* extra */}
      <div className="mt-5">
  <h4 className="font-display text-[15px] font-[700]">
    Personaliza tu experiencia.
  </h4>
  <p className="text-[12px] text-[#8A7D6B] mt-1">
    Añade servicios opcionales a tu reserva.
  </p>

  <div className=" grid gap-3 mt-3">

    <label className="flex items-center justify-between p-4 rounded-[16px] border border-black bg- text-[#D4AF37] cursor-pointer hover:border-[#D9773A]">
  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      checked={food}
      onChange={e => setFood(e.target.checked)}
      className="w-4 h-4 accent-[#D9773A]"
    />
    <div>
      <p className="text-[13px] font-[650]">Comida y aperitivos</p>
      <p className="text-[11px] text-[#D4AF37]/70">
        Comida tradicional marroquí y bebidas refrescantes.
      </p>
    </div>
  </div>
  <span className="font-[700] text-[14px]">+$15</span>
</label>

    <label  className="flex items-center justify-between p-4 rounded-[16px] border border-black bg- text-[#D4AF37] cursor-pointer hover:border-[#D9773A]">
      <div className="flex items-center gap-3 ">
        <input
          type="checkbox"
          checked={transport}
          onChange={e => setTransport(e.target.checked)}
          className="w-4 h-4 accent-[#D9773A]"
        />
        <div >
          <p className="text-[13px] font-[650]" >Transporte</p>
          <p className="text-[11px] text-[#8A7D6B]">
            Transporte privado para tu experiencia.
          </p>
        </div>
      </div>
      <span className="font-[700] text-[14px]">+$ 70</span>
    </label>

  </div>
</div>
      {/* extra */}
      <div className="mt-4 flex items-center justify-between text-[13px]">
        <span className="text-[#8A7D6B]">{guests} x € {exp.price}</span><span className="font-[700]">€{total}</span>
      </div>

      <button type="submit" className="mt-4 w-full h-[48px] rounded-full bg-[#D9773A] text-white font-[700] text-[14px] tracking-[-0.01em] hover:bg-[#B85C24] transition flex items-center justify-center gap-2">
        <Shield className="w-4 h-4"/>{payMode==='now'?`Pay €${total} & confirm`:`Reserve for €${total}`}
      </button>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <a href={WA_LINK(`Salam! Question about ${exp.title[lang as 'en'|'fr'|'es']} - ${guests} guests`)} target="_blank" className="h-10 rounded-full border border-black/10 grid place-items-center text-[12px] font-[600]">💬 WhatsApp first</a>
        <span className="h-10 rounded-full bg-[#F5EBDC] grid place-items-center text-[11px] text-[#8A7D6B]">✓ Free cancel 24h</span>
      </div>

      <p className="text-[11px] leading-[1.4] text-[#8A7D6B] mt-4 text-center">Secure checkout via Stripe • Instant confirmation • No hidden fees</p>
    </form>
  );
    // <div className="mt-12">
    //         <h3 className="font-display text-[20px] font-[600]">You may also like</h3>
    //         <div className="mt-4 grid md:grid-cols-2 gap-4">{experiences.filter(e=>e.id!==exp.id).slice(0,2).map(e=><ExperienceCard key={e.id} exp={e}/>)}</div>
    //       </div> 
}

// Pages
function HomePage() {
  const { t, lang } = useContext(LangContext);
  const l = lang as 'en'|'fr'|'es';
  const featured = experiences.filter(e=>e.featured);
  return (
    
    <main>
      <WinterPromotionBar />
      {/* HERO */}
      <section className="relative max-w-[1280px] mx-auto px-6 lg:px-8 pt-2">
        <div className="relative rounded-[28px] md:rounded-[32px] overflow-hidden bg-[#1A3A2F] min-h-[720px] md:min-h-[88vh] flex items-end">
          <img src="/images/cookingClass.png" alt="Atlas Mountains Ourika Valley" fetchPriority="high" decoding="async" className="absolute inset-0 
          w-full h-full object-cover opacity-[0.72]" loading="eager"/>

          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(75% 0.183 55.934)] via-[oklch(93.8% 0.127 124.321)]/30 to-transparent" />
          
<div className="absolute top-6 left-6 right-6 flex items-center justify-between">
  <Badge>
    <span className="w-2 h-2 rounded-full bg-[#D9773A] animate-pulse"/>
    {t.hero.badge}
  </Badge>
  <div className="hidden md:flex items-center gap-4 text-[11px] text-white/70">
    <MapPin className="w-3.5 h-3.5"/>
    31.316°N, 7.780°W • Tnine Ourika
  </div>
</div>

          {/* changer */}
            
          {/* <div className="relative p-8 lg:p-12 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-end"> */}
          <div className="relative z-10 p-5 pt-32 sm:p-8 sm:pt-32 lg:p-12 w-full grid lg:grid-cols-[1.2fr_0.8fr] gap-8 lg:gap-10 items-end">
          
            <div>
              {/* <h1 className="font-display text-[42px] lg:text-[72px] font-[640] leading-[0.9] tracking-[-0.04em] text-white whitespace-pre-line">{t.hero.title}</h1> */}
               <h1 className="font-display text-[clamp(2.5rem,9vw,4.5rem)] lg:text-[72px] font-[640] leading-[0.98] tracking-[-0.04em] text-white whitespace-pre-line">{t.hero.title}</h1>
              
              <p className="text-[16px] lg:text-[18px] leading-[1.5] text-white/75 max-w-[48ch] mt-6">{t.hero.subtitle}</p>
              <div className="flex flex-wrap gap-3 mt-8">
                <Link to="/experiences" className="h-12 px-7 rounded-full bg-[#FFFBF2] text-[#1A3A2F] font-[700] text-[14px] inline-flex items-center gap-2 hover:bg-white transition">{t.hero.ctaPrimary}<ArrowUpRight className="w-4 h-4"/></Link>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className="h-12 px-6 rounded-full bg-white/10 backdrop-blur text-white border border-white/20 font-[600] text-[14px] inline-flex items-center gap-2 hover:bg-white/15 transition"><span className="w-7 h-7 rounded-full bg-white text-[#1A3A2F] grid place-items-center"><Play className="w-3.5 h-3.5 fill-[#1A3A2F] ml-[1px]"/></span>{t.hero.ctaSecondary}</a>
              </div>
            </div>
            <div className="lg:justify-self-end w-full lg:max-w-[360px]">
              <div className="rounded-[20px] bg-white/10 backdrop-blur-xl border border-white/15 p-5 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <img src="/images/woman.jpg" alt="host" className="w-10 h-10 rounded-full object-cover"/>
                  <div><div className="text-[13px] font-[700] tracking-tight">Organizado por Hicham, Fatima & Hossain</div><div className="text-[11px] text-white/60">Berber families • Since 2014</div></div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {t.hero.stats.map((s:any,i:number)=>(
                    <div key={i} className="rounded-[14px] bg-white/10 p-3 border border-white/10"><div className="font-display text-[18px] font-[700] leading-none">{s.k}</div><div className="text-[10px] text-white/60 mt-1 leading-[1.2]">{s.v}</div></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-4 rounded-full border border-black/5 bg-white px-6 py-3 flex flex-wrap gap-x-6 gap-y-2 items-center justify-between text-[12px] text-[#8A7D6B]">
          <span className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-[#F5EBDC] grid place-items-center text-[#1A3A2F]"><Check className="w-3.5 h-3.5"/></span>Excursiones al valle de Ourika • Senderismo en las montañas del Atlas • Qué hacer cerca de Marrakech</span>
          <span className="flex items-center gap-2"><Star className="w-4 h-4 fill-[#D9773A] text-[#D9773A]"/> Valoración media de 4,94/5 entre más de 2.400 viajeros • GetYourGuide / Airbnb / Google</span>
        </div>
      </section>

      {/* Experiences */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-[800] tracking-[0.14em] uppercase text-[#D9773A]"><Leaf className="w-4 h-4"/> Experiencias Bereberes Auténticas</div>
            <h2 className="font-display text-[36px] lg:text-[52px] font-[620] leading-[0.95] tracking-[-0.03em] mt-3">Viaja sin prisas,<br/>conexiones reales.</h2>
          </div>
          <p className="max-w-[36ch] text-[14px] leading-[1.6] text-[#8A7D6B]">
            Descubre la auténtica cultura amazigh (bereber) de Marruecos a través de la cocina tradicional, 
            antiguos senderos de montaña, pan casero y encuentros inolvidables con familias locales en el valle de Ourika y las montañas del Atlas.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map(exp=><ExperienceCard key={exp.id} exp={exp}/>)}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/experiences" className="h-12 px-7 rounded-full bg-[#1A3A2F] text-white font-[650] text-[14px] inline-flex items-center gap-2">{t.common.viewAll}<ArrowUpRight className="w-4 h-4"/></Link>
          <Link to="/half-day-tours" className="h-12 px-7 rounded-full bg-white border border-black/10 font-[600] text-[14px] inline-flex items-center gap-2"><Clock className="w-4 h-4"/> Half-Day from Marrakech</Link>
          <Link to="/full-day-tours" className="h-12 px-7 rounded-full bg-[#F5EBDC] border border-black/5 font-[600] text-[14px] inline-flex items-center gap-2"><Mountain className="w-4 h-4"/> Full-Day Immersion</Link>
        </div>
      </section>

      {/* Split storytelling */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="/images/asguine_pueblo_atlas_mountains.png" alt="Berber village" className="rounded-[28px] aspect-[4/3] object-cover w-full" loading="lazy"/>
            <div className="absolute -bottom-6 -right-6 bg-[#FFFBF2] rounded-[20px] p-4 border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.12)] max-w-[240px]">
              <div className="flex items-center gap-2 text-[11px] font-[800] uppercase tracking-wide text-[#D9773A]"><Heart className="w-4 h-4"/> Community Impact</div>
              <div className="grid grid-cols-3 gap-2 mt-3 text-center">
                <div><div className="font-display text-[20px] font-[700]">27</div><div className="text-[10px] text-[#8A7D6B]">families</div></div>
                <div><div className="font-display text-[20px] font-[700]">€182k</div><div className="text-[10px] text-[#8A7D6B]">to locals</div></div>
                <div><div className="font-display text-[20px] font-[700]">100%</div><div className="text-[10px] text-[#8A7D6B]">direct</div></div>
              </div>
            </div>
          </div>
          <div>
            <Badge>Cultura Bereber • Amazigh • Patrimonio del Atlas y desierto</Badge>
            <h2 className="font-display text-[36px] lg:text-[48px] font-[600] leading-[0.95] tracking-[-0.03em] mt-4">No son solo montañas y pueblos, son paisajes que enamoran y una hospitalidad que se siente en el corazón.</h2>
            <p className="text-[15px] leading-[1.7] text-[#5A5348] mt-5">El valle de Ourika no es solo un destino: es un mundo de 32 pueblos, terrazas ancestrales y más de 3.000 años de cultura amazigh. Aquí, las tradiciones siguen vivas, desde el pan artesanal hasta los sabores y saberes de las familias locales. No somos simples operadores turísticos; somos vecinos que compartimos con orgullo nuestra tierra y nuestra forma de vivir.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
                      {[
        { icon: HomeIcon, title: 'Hogares auténticos', desc: 'Sin casas preparadas para turistas. Té en el salón y niños jugando a tu alrededor.' },
        { icon: Leaf, title: 'Tradición y ritmo natural', desc: 'Lo que se cosecha, recoge y cocina depende de la temporada: aceitunas en noviembre, cebada en mayo.' },
        { icon: UtensilsCrossed, title: 'Manos a la masa', desc: 'Amasas, volteas y hasta te quemas los dedos. ¡De eso se trata!' },
        { icon: Droplets, title: 'Historias del agua', desc: 'Descubre el sistema de riego del siglo XII que todavía da vida a las terrazas agrícolas.' },
              ].map((f,i)=>(
                <div key={i} className="rounded-[18px] bg-[#FFFBF2] border border-black/5 p-4"><f.icon className="w-5 h-5 text-[#D9773A]"/><div className="font-[700] text-[14px] mt-2">{f.title}</div><div className="text-[12px] leading-[1.5] text-[#8A7D6B] mt-1">{f.desc}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Half vs Full */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-5">
  <Link to="/half-day-tours" className="group relative rounded-[28px] overflow-hidden min-h-[360px] flex items-end p-8 bg-[#1A3A2F]">
    <img src="/images/farm.jpg" alt="medio día" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-[1.03] transition duration-[1000ms]" loading="lazy"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"/>
    <div className="relative text-white">
      <div className="inline-flex px-3 py-1 rounded-full bg-white text-[#1A3A2F] text-[11px] font-[800] uppercase">Más reservado</div>
      <h3 className="font-display text-[32px] font-[600] leading-[0.95] mt-3">Descubre Atlas y Desierto<br/>desde Marrakech</h3>
      <p className="text-white/70 text-[13px] mt-2 max-w-[32ch]">5 horas • Recogida a las 9:00 • Pueblo, cascadas y almuerzo junto al río. Ideal para estancias cortas.</p>
      <div className="mt-4 h-10 px-5 rounded-full bg-white text-[#1A3A2F] inline-flex items-center gap-2 text-[13px] font-[700]">Explorar excursiones de medio día <ArrowUpRight className="w-4 h-4"/></div>
    </div>
  </Link>

  <Link to="/full-day-tours" className="group relative rounded-[28px] overflow-hidden min-h-[360px] flex items-end p-8 bg-[#D9773A]">
    <img src="/images/hiking.jpg" alt="día completo" className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-[1.03] transition duration-[1000ms]" loading="lazy"/>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"/>
    <div className="relative text-white">
      <div className="inline-flex px-3 py-1 rounded-full bg-[#1A3A2F] text-white text-[11px] font-[800] uppercase">Experiencia completa</div>
      <h3 className="font-display text-[32px] font-[600] leading-[0.95] mt-3">Inmersión en el Atlas y desierto<br/>de día completo</h3>
      <p className="text-white/80 text-[13px] mt-2 max-w-[32ch]">8 horas • Senderismo, agricultura, pan tradicional, cocina, cooperativa y té al atardecer. Nuestra historia completa.</p>
      <div className="mt-4 h-10 px-5 rounded-full bg-[#1A3A2F] text-white inline-flex items-center gap-2 text-[13px] font-[700]">Explorar excursiones de día completo <ArrowUpRight className="w-4 h-4"/></div>
    </div>
  </Link>
</section>

      {/* Reviews */}
      <section className="bg-[#F5EBDC] border-y border-black/5 py-20">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-[32px] lg:text-[44px] font-[600] leading-[0.95] tracking-[-0.02em]">Viajes auténticos,<br/>Historias Reales</h2>
            <div className="flex items-center gap-2 text-[13px]"><span className="w-8 h-8 rounded-full bg-[#1A3A2F] text-white grid place-items-center"><Star className="w-4 h-4 fill-white"/></span>4.94/5 from 2,400+ reviews on Google</div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {reviewsData.map((r,i)=>(
              <div key={i} className="bg-white rounded-[20px] border border-black/5 p-5">
                <div className="flex items-center gap-1 text-[#D9773A]">{Array.from({length:5}).map((_,j)=><Star key={j} className="w-4 h-4 fill-[#D9773A]"/>)}</div>
                <p className="text-[14px] leading-[1.5] mt-3">“{r.text[l as 'en'] ?? r.text.en}”</p>
                <div className="flex items-center gap-2 mt-4">
                  {/* <div className="w-8 h-8 rounded-full bg-[#F5EBDC] overflow-hidden"><img src={r.avatar} alt={r.name} className="w-full h-full object-cover"/></div> */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  r.gender === 'female'
                    ? 'bg-[#F5EBDC] text-[#D9773A]'
                    : 'bg-[#E8EFE9] text-[#1A3A2F]'
                }`}>
                  <UserRound className="w-4 h-4" />
                </div>
                  
                  <div><div className="text-[13px] font-[700]">{r.name}</div><div className="text-[11px] text-[#8A7D6B]">{r.country}</div></div></div>
              </div>
            ))}
          </div>
        </div>
        
      </section>

      {/* Map & Contact strip */}
      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        <div className="rounded-[24px] overflow-hidden border border-black/10 bg-white">
       
          <iframe title="Ourika Valley map" src="https://www.openstreetmap.org/export/embed.html?bbox=-7.85%2C31.25%2C-7.68%2C31.38&layer=mapnik&marker=31.316%2C-7.78" className="w-full h-[420px] border-0" loading="lazy"/>
          <div className="p-4 flex items-center justify-between text-[12px]"><span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#D9773A]"/> Atlas Y desierto desde Marrakech — Recogida incluida en tours y experiencias</span><a href="https://maps.google.com/?q=Ourika+Valley" target="_blank" className="px-3 py-1.5 rounded-full bg-[#1A3A2F] text-white font-[600]">Open Google Maps</a></div>
        </div>
        <div>
          <h3 className="font-display text-[30px] font-[600] leading-[1] tracking-tight">Ven por las montañas,<br/>quédate por su gente.</h3>
          <p className="text-[14px] leading-[1.6] text-[#8A7D6B] mt-4">Salida directa con transporte propio o recogida en Marrakech. Grupos reducidos, confirmación inmediata y cancelación gratuita hasta 24 horas antes.</p>
          <div className="mt-6 grid gap-3">
            <a href={WA_LINK('Hi! Can you help me choose between half-day and full-day?')} target="_blank" className="h-14 rounded-full bg-[#1A3A2F] text-white flex items-center justify-between px-6 font-[650] text-[14px]"><span className="flex items-center gap-3"><span className="w-8 h-8 rounded-full bg-white/15 grid place-items-center">💬</span>Habla por WhatsApp — respondemos en 2 min.</span><ArrowUpRight className="w-5 h-5"/></a>
            <Link to="/contact" className="h-14 rounded-full bg-white border border-black/10 flex items-center justify-between px-6 font-[600] text-[14px]"><span>O envíanos un mensaje.</span><Mail className="w-5 h-5"/></Link>
          </div>
        </div>
         {/* <FAQSection /> */}
      </section>
    </main>
  );
}

function ExperiencesPage() {
  const { lang } = useContext(LangContext);
  const l = lang as 'en'|'fr'|'es';
  const [filter, setFilter] = useState<'all'|'half-day'|'full-day'|'cultural'|'nature'|'Sahara-Desert'>('all');
  const filtered = useMemo(()=> filter==='all'? experiences : experiences.filter(e=>e.category===filter), [filter]);
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <Badge> Más de 20 experiencias • Reservas directas • Sin intermediarios</Badge>
          <h1 className="font-display text-[40px] lg:text-[56px] font-[650] leading-[0.9] tracking-[-0.04em] mt-4">Todas las experiencias,<br/>creadas junto a familias locales.</h1>
        </div>
        <div className="flex gap-2 flex-wrap p-1 rounded-full bg-white border border-black/5">
          {(['all','half-day','full-day','cultural','nature','Sahara-Desert'] as const).map(f=>(
            <button key={f} onClick={()=>setFilter(f)} className={`px-4 h-9 rounded-full text-[12px] font-[700] uppercase tracking-[0.06em] transition ${filter===f?'bg-[#1A3A2F] text-white':'text-[#8A7D6B] hover:bg-[#F5EBDC] hover:text-[#1A3A2F]'}`}>{f.replace('-',' ')}</button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map(e=><ExperienceCard key={e.id} exp={e}/>)}
      </div>

      <div className="mt-12 rounded-[20px] bg-[#1A3A2F] text-[#F5EBDC] p-6 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[14px] leading-[1.5] max-w-[50ch]"><strong className="text-white">SEO keywords:</strong> Ourika Valley tours, things to do near Marrakech, Ourika cooking class, Atlas Mountains hiking, authentic Berber experiences — all naturally included because that’s what we are.</div>
        <a href={WA_LINK('Hi! Which experience do you recommend for 2 days in Ourika?')} target="_blank" className="h-11 px-6 rounded-full bg-[#D9773A] text-white font-[650] text-[13px] inline-flex items-center gap-2">Ask local recommendation</a>
      </div>
    </main>
  );
}

function HalfDayPage() {
  const list = experiences.filter(e=>e.category==='half-day');
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <div className="rounded-[28px] overflow-hidden bg-[#1A3A2F] relative min-h-[320px] flex items-end p-10">
        <img src="/images/ourika_valley_mountains.png" alt="medio día" className="absolute inset-0 w-full h-full object-cover opacity-50" loading="lazy"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/>
        <div className="relative text-white max-w-[60ch]"><Badge>Excursiones de medio día • 4-5 h • Recogida en Marrakech</Badge><h1 className="font-display text-[44px] font-[640] leading-[0.9] tracking-tight mt-4">Medio día, grandes emociones.<br/>Ideal si tienes poco tiempo.</h1><p className="text-white/70 text-[15px] leading-[1.5] mt-4">Sal de Marrakech a las 9:00 y regresa a las 14:00. Ideal para familias y quienes visitan la zona por primera vez: casa bereber, cascadas de Setti Fatma, tajín junto al río y cooperativa de mujeres.</p></div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{list.map(e=><ExperienceCard key={e.id} exp={e}/>)}</div>
    </main>
  );
}

function FullDayPage() {
  const list = experiences.filter(e=>e.category==='full-day');
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <div className="rounded-[28px] overflow-hidden bg-[#1A3A2F] relative min-h-[320px] flex items-end p-10">
        <img src="/images/fullhero.jpg" alt="día completo" className="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
        <div className="relative text-white max-w-[60ch]"><Badge>Excursiones de día completo • 8 h • Inmersión auténtica • Todas las comidas</Badge><h1 className="font-display text-[44px] font-[640] leading-[0.9] tracking-tight mt-4">Un día para descubrir todo :<br/>camina, cultiva, hornea y cocina.</h1><p className="text-white/80 text-[15px] leading-[1.5] mt-4">Nuestra experiencia más completa: 2 horas de senderismo, actividades agrícolas, pan tradicional en horno de tabouna, almuerzo con clase de cocina, visita a una cooperativa y té a la menta al atardecer sobre las terrazas. El 100 % de los ingresos se destina a las familias locales.</p></div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{list.map(e=><ExperienceCard key={e.id} exp={e}/>)}</div>
    </main>
  );
}
// sahara desert card
function SaharaDesertPage() {
  const list = experiences.filter(
    e => e.category === 'Sahara-Desert'
  );

  return (
   <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <div className="rounded-[28px] overflow-hidden bg-[#D9773A] relative min-h-[320px] flex items-end p-10">
        <img src="/images/sahara/fulldaytours.jpg" alt="desierto del Sáhara" className="absolute inset-0 w-full h-full object-cover opacity-60" loading="lazy"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"/>
        <div className="relative text-white max-w-[60ch]"><Badge>Excursiones • 8 h • Inmersión auténtica • Comidas y transporte incluidos</Badge><h1 className="font-display text-[44px] font-[640] leading-[0.9] tracking-tight mt-4">Excursiones al desierto :<br/>medio día, día completo y 3 días</h1><p className="text-white/80 text-[15px] leading-[1.5] mt-4">Descubre la magia del Sáhara, sus dunas doradas y la auténtica esencia de Marruecos con nuestras inolvidables excursiones por el desierto.</p></div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">{list.map(e=><ExperienceCard key={e.id} exp={e}/>)}</div>
    </main>
  );
}
//sahara desert card

function ExperienceDetailPage() {
  const { slug } = useParams();
  const { lang } = useContext(LangContext);
  const l = lang as 'en'|'fr'|'es';
  const exp = experiences.find(e=>e.slug===slug);
  const navigate = useNavigate();
  if (!exp) return <div className="p-20 text-center">Experience not found. <Link to="/experiences" className="underline">Back to experiences</Link></div>;

  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
      <button onClick={()=>navigate(-1)} className="mb-6 inline-flex items-center gap-2 text-[13px] font-[600] text-[#8A7D6B] hover:text-[#1A3A2F]"><ChevronRight className="w-4 h-4 rotate-180"/>Back</button>

      <div className="grid lg:grid-cols-[1.45fr_0.9fr] gap-8 items-start">
        <div>
          <div className="flex flex-wrap gap-2 mb-4"><Badge>{exp.category}</Badge><Badge><Clock className="w-3 h-3"/>{exp.duration}</Badge><Badge><Users className="w-3 h-3"/>{exp.groupSize}</Badge></div>
          <h1 className="font-display text-[36px] lg:text-[52px] font-[680] leading-[0.92] tracking-[-0.04em]">{exp.title[l]}</h1>
          <p className="text-[16px] leading-[1.6] text-[#5A5348] mt-4 max-w-[60ch]">{exp.longDesc[l]}</p>

          <div className="mt-6 grid grid-cols-3 gap-3 max-w-[520px]">
            <div className="rounded-[16px] bg-white border border-black/5 p-3"><div className="text-[11px] uppercase tracking-wide font-[700] text-[#8A7D6B]">Rating</div><div className="flex items-center gap-1 mt-1 font-[700]"><Star className="w-4 h-4 fill-[#1A3A2F]"/>{exp.rating} ({exp.reviewsCount})</div></div>
            <div className="rounded-[16px] bg-white border border-black/5 p-3"><div className="text-[11px] uppercase tracking-wide font-[700] text-[#8A7D6B]">Difficulty</div><div className="mt-1 font-[700] text-[14px]">{exp.difficulty}</div></div>
            <div className="rounded-[16px] bg-[#F5EBDC] border border-black/5 p-3"><div className="text-[11px] uppercase tracking-wide font-[700] text-[#8A7D6B]">Price</div><div className="mt-1 font-display font-[750] text-[18px]">€{exp.price}/pp</div></div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {exp.gallery.map((img,i)=>(
              <img key={i} src={img} alt={`${exp.title[l]} ${i}`} loading="lazy" className={`rounded-[18px] object-cover w-full ${i===0?'col-span-3 aspect-[16/9]':'aspect-[4/3]'}`}/>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="font-display text-[22px] font-[650] flex items-center gap-2"><Sparkles className="w-5 h-5 text-[#D9773A]"/>Highlights</h3>
            <div className="mt-4 flex flex-wrap gap-2">{exp.highlights[l].map((h,i)=><span key={i} className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-[13px]">{h}</span>)}</div>
          </div>

          <div className="mt-10">
            <h3 className="font-display text-[22px] font-[650]">Itinerary</h3>
            <div className="mt-4 grid gap-3">
              {exp.itinerary.map((it,i)=>(
                <div key={i} className="flex gap-4 bg-white rounded-[16px] border border-black/5 p-4">
                  <div className="shrink-0 w-16 text-[12px] font-[800] tracking-wide uppercase text-[#D9773A]">{it.time}</div>
                  <div><div className="font-[700] text-[14px]">{it.title[l]}</div><div className="text-[13px] text-[#8A7D6B] mt-1">{it.desc[l]}</div></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-[18px] bg-[#F5EBDC] border border-black/5 p-5"><h4 className="font-[750] text-[13px] uppercase tracking-wide flex items-center gap-2"><Check className="w-4 h-4 text-[#1A3A2F]"/>Included</h4><ul className="mt-3 grid gap-1.5 text-[13px] text-[#5A5348]">{exp.included[l].map((x,i)=><li key={i} className="flex gap-2"><span className="text-[#1A3A2F]">•</span>{x}</li>)}</ul></div>
            <div className="rounded-[18px] bg-white border border-black/10 p-5"><h4 className="font-[750] text-[13px] uppercase tracking-wide text-[#8A7D6B]">Not included</h4><ul className="mt-3 grid gap-1.5 text-[13px] text-[#8A7D6B]">{exp.notIncluded[l].map((x,i)=><li key={i}>• {x}</li>)}</ul></div>
          </div>

          
        </div>

        <div className="lg:sticky top-[90px]">
          <BookingWidget exp={exp}/>
          <div className="mt-4 rounded-[18px] bg-[#1A3A2F] text-white p-4 flex gap-3 text-[12px] leading-[1.5]"><Quote className="w-5 h-5 shrink-0 text-[#D9773A]"/>“{exp.shortDesc[l]} — small groups, direct support to families, free cancellation 24h before.”</div>
        </div>
        <div className="mt-12">
             <h3 className="font-display text-[20px] font-[600]">You may also like</h3>
             <div className="mt-4 grid md:grid-cols-2 gap-4">{experiences.filter(e=>e.id!==exp.id).slice(0,2).map(e=><ExperienceCard key={e.id} exp={e}/>)}</div>
           </div> 
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <Badge>About Us • Community-led since 2014</Badge>
          <h1 className="font-display text-[42px] lg:text-[56px] font-[650] leading-[0.9] tracking-tight mt-4">We are not a tour company.<br/>We are a valley.</h1>
          <p className="text-[15px] leading-[1.7] text-[#5A5348] mt-6">Ourika valle Authentic started when Fatima asked tourists filming her tabouna: “If you like bread, why don’t you make it with me tomorrow?” Word spread. Brahim’s house, Hassan’s trails, Khadija’s cooperative. No agency, no commission — just neighbors inviting you in. Today 27 families host, guide, cook, farm with you. Every euro stays.</p>
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[{k:'2,400+',v:'Travelers hosted'},{k:'27',v:'Families part of network'},{k:'€182k',v:'Direct to locals since 2022'}].map((s,i)=>(
              <div key={i} className="rounded-[18px] bg-white border border-black/5 p-4"><div className="font-display text-[28px] font-[700] leading-none">{s.k}</div><div className="text-[12px] text-[#8A7D6B] mt-2">{s.v}</div></div>
            ))}
          </div>

          <h3 className="font-display text-[22px] font-[650] mt-10">Our promises</h3>
          <div className="mt-4 grid gap-3">
            {[
              '100% of your payment goes to hosting families (we show breakdown)',
              'No fake folklorique staging — real homes, real work',
              'Women-led cooperative gets priority & fair price',
              'Free cancellation 24h before, instant confirmation',
              'We speak Tashelhit, Darija, Arabic, French, English, Spanish.German',
            ].map((t,i)=><div key={i} className="flex gap-3 text-[14px] leading-[1.5]"><span className="w-6 h-6 rounded-full bg-[#F5EBDC] grid place-items-center shrink-0 mt-0.5"><Check className="w-3.5 h-3.5"/></span>{t}</div>)}
          </div>
        </div>
        <div className="grid gap-4">
          <img src="/images/cooperative.jpg" alt="cooperative" className="rounded-[24px] aspect-[4/3] object-cover w-full" loading="lazy"/>
          <div className="grid grid-cols-2 gap-4">
            <img src="/images/bread.jpg" alt="bread" className="rounded-[20px] aspect-square object-cover" loading="lazy"/>
            <img src="/images/farm.jpg" alt="farm" className="rounded-[20px] aspect-square object-cover" loading="lazy"/>
          </div>
        </div>
      </div>
    </main>
  );
}

function GalleryPage() {
  const imgs = [,"/images/cooking.jpg","/images/waterfall.jpg","/images/mint-tea.jpg","/images/bread.jpg","/images/cooperative.jpg","/images/hiking.jpg","/images/ourika-river.jpg","/images/farm.jpg","/images/spices.jpg","/images/village2.jpg",];
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <h1 className="font-display text-[42px] font-[650] leading-[0.9] tracking-tight">Gallery — Atlas light, Berber life.</h1>
      <p className="text-[14px] text-[#8A7D6B] mt-3 max-w-[50ch]">All photos by travelers & families (no stock staging). Optimized WebP, lazy-loaded, shot on iPhone & Fuji.</p>
      <div className="mt-8 masonry">
        {imgs.map((src,i)=><img key={i} src={src} alt={`Ourika gallery ${i}`} loading="lazy" className="w-full rounded-[18px] border border-black/5"/>)}
      </div>
    </main>
  );
}

const blogPosts = [
  { slug: 'ourika-valley-tours-guide', title: 'Ourika Valley Tours: The Complete 2026 Guide (40 min from Marrakech)', excerpt: 'What to expect, when to go, half-day vs full-day, and how to avoid tourist traps.', image: '/images/ourika-river.jpg', keywords: 'Ourika Valley tours' },
  { slug: 'things-to-do-near-marrakech', title: '7 Things to Do Near Marrakech That Aren’t in the Medina', excerpt: 'Beyond Jemaa el-Fna: waterfalls, bread ovens, argan cooperatives and ridge hikes.', image: '/images/hiking.jpg', keywords: 'things to do near Marrakech' },
  { slug: 'ourika-cooking-class-fatima', title: 'Inside Fatima’s Kitchen: How a Ourika Cooking Class Works', excerpt: 'Market, spice pounding, tagine secrets and why couscous is rolled by hand.', image: '/images/cooking.jpg', keywords: 'Ourika cooking class' },
  { slug: 'atlas-mountains-hiking-beginners', title: 'Atlas Mountains Hiking for Beginners — Ourika to Toubkal views', excerpt: 'Difficulty, gear, best seasons and local guide advice for first-time hikers.', image: '/images/hero-atlas.jpg', keywords: 'Atlas Mountains hiking' },
  { slug: 'authentic-berber-experiences', title: 'What “Authentic Berber Experiences” Actually Means', excerpt: 'We asked elders what they want visitors to know, do, and not do.', image: '/images/berber-village.jpg', keywords: 'authentic Berber experiences' },
  { slug: 'setti-fatma-waterfalls-tips', title: 'Setti Fatma Waterfalls: How to Do the 7 Falls Right', excerpt: 'Avoid slip, choose right guide, swim season and tea above clouds.', image: '/images/waterfall.jpg', keywords: 'Setti Fatma waterfalls' },
];

function BlogPage() {
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10">
      <h1 className="font-display text-[42px] font-[650] leading-[0.9] tracking-tight">Journal — stories from the terraces.</h1>
      <p className="text-[14px] text-[#8A7D6B] mt-3">SEO-optimized, people-first articles targeting Ourika Valley tours, things to do near Marrakech, cooking class, Atlas hiking, Berber experiences.</p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogPosts.map(p=>(
          <article key={p.slug} className="bg-white rounded-[20px] border border-black/5 overflow-hidden">
            <img src={p.image} alt={p.title} className="aspect-[16/10] object-cover w-full" loading="lazy"/>
            <div className="p-5">
              <div className="text-[10px] font-[800] tracking-[0.1em] uppercase text-[#D9773A]">{p.keywords}</div>
              <h3 className="font-display text-[18px] font-[600] leading-[1.15] mt-2">{p.title}</h3>
              <p className="text-[13px] text-[#8A7D6B] mt-2 line-clamp-2">{p.excerpt}</p>
              <Link to={`/blog/${p.slug}`} className="mt-4 inline-flex text-[12px] font-[700] gap-1 items-center">Read article <ArrowUpRight className="w-3.5 h-3.5"/></Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function BlogDetailPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p=>p.slug===slug);
  if (!post) return <div className="p-20 text-center">Post not found.</div>;
  return (
    <main className="max-w-[760px] mx-auto px-6 lg:px-8 py-10">
      <Link to="/blog" className="text-[13px] font-[600] text-[#8A7D6B] inline-flex items-center gap-1"><ChevronRight className="w-4 h-4 rotate-180"/>Back to journal</Link>
      <div className="mt-6 inline-flex px-3 py-1 rounded-full bg-[#F5EBDC] text-[11px] font-[800] uppercase tracking-wide">{post.keywords}</div>
      <h1 className="font-display text-[34px] lg:text-[44px] font-[700] leading-[0.95] tracking-tight mt-4">{post.title}</h1>
      <img src={post.image} alt={post.title} className="mt-6 rounded-[20px] aspect-[16/9] object-cover w-full"/>
      <div className="prose prose-neutral mt-8 max-w-none text-[15px] leading-[1.75] text-[#3A352E]">
        <p>This is a long-form SEO article targeting <strong>{post.keywords}</strong>. Real content would be 1200+ words, with structured data FAQ, map embeds, internal links to experiences, and optimized images in WebP.</p>
        <p>For this demo, we showcase layout: semantic HTML, clean URLs, fast loading, alt tags, and interlinking to booking pages — exactly what Google loves for “things to do near Marrakech”.</p>
        <h3 className="font-display text-[22px] font-[650] mt-8">Why travelers choose Ourika Authentic</h3>
        <ul className="list-disc pl-5 mt-2"><li>Direct booking — no GetYourGuide commission inflating price</li><li>Local families keep 100% — transparent breakdown</li><li>Small groups, multilingual guides, instant confirmation</li></ul>
        <Link to="/experiences" className="mt-8 inline-flex h-12 px-7 rounded-full bg-[#1A3A2F] text-white font-[700] text-[14px] items-center gap-2">Browse experiences that match this article <ArrowUpRight className="w-4 h-4"/></Link>
      </div>
    </main>
  );
}

function ContactPage() {
  const [sent,setSent]=useState(false);
  return (
    <main className="max-w-[1280px] mx-auto px-6 lg:px-8 py-10 grid lg:grid-cols-[1fr_0.9fr] gap-10">

  <div>
    <Badge>Contacto • Respondemos normalmente en 5 minutos • Preferimos WhatsApp</Badge>
    <h1 className="font-display text-[42px] font-[650] leading-[0.9] tracking-tight mt-4">¡Salam! ¿Cómo podemos ayudarte<br/>a descubrir Marruecos?</h1>
    <div className="mt-8 grid sm:grid-cols-2 gap-4">
      <div className="rounded-[18px] bg-white border border-black/5 p-5"><div className="text-[12px] font-[800] uppercase tracking-wide text-[#8A7D6B] flex items-center gap-2"><Phone className="w-4 h-4 text-[#D9773A]"/>WhatsApp / Teléfono</div><div className="font-[600] mt-2">+212 6 06 12 50</div><a href={WA_LINK('¡Salam, equipo de Ourika!')} target="_blank" className="mt-3 inline-flex h-9 px-4 rounded-full bg-[#1A3A2F] text-white text-[12px] font-[700] items-center">Escríbenos ahora</a></div>
      <div className="rounded-[18px] bg-white border border-black/5 p-5"><div className="text-[12px] font-[800] uppercase tracking-wide text-[#8A7D6B] flex items-center gap-2"><Mail className="w-4 h-4 text-[#D9773A]"/>Correo electrónico</div><div className="font-[600] mt-2">hola@atlas-desierto.com</div><div className="text-[12px] text-[#8A7D6B] mt-1">Respondemos en un plazo de 2 horas, de 8:00 a 21:00 (hora de Marruecos)</div></div>
    </div>
    <div className="mt-6 rounded-[18px] overflow-hidden border border-black/10">
      <iframe title="Mapa de Ourika" src="https://www.openstreetmap.org/export/embed.html?bbox=-7.85%2C31.25%2C-7.68%2C31.38&layer=mapnik&marker=31.316%2C-7.78" className="w-full h-[320px] border-0" loading="lazy"/>
    </div>
  </div>

  <form onSubmit={e=>{e.preventDefault(); setSent(true);}} className="bg-white rounded-[24px] border border-black/5 p-6 shadow-[0_12px_40px_rgba(0,0,0,0.05)]">
    {sent?(
      <div className="text-center py-16"><div className="w-14 h-14 rounded-full bg-[#8FBDA3]/20 grid place-items-center mx-auto mb-4"><Check className="w-7 h-7 text-[#1A3A2F]"/></div><h3 className="font-display text-[22px] font-[650]">¡Mensaje enviado! ¡Shukran!</h3><p className="text-[13px] text-[#8A7D6B] mt-2">Te responderemos muy pronto por correo electrónico o WhatsApp.</p></div>
    ):(
      <>
        <h3 className="font-display text-[20px] font-[650]">Envíanos un mensaje</h3>
        <div className="mt-6 grid gap-4">
          <div className="grid grid-cols-2 gap-3"><input required placeholder="Nombre completo" className="h-11 rounded-full border border-black/10 px-4 text-[14px]"/><input required placeholder="Número de personas" type="number" min={1} className="h-11 rounded-full border border-black/10 px-4 text-[14px]"/></div>
          <input required type="email" placeholder="Correo electrónico" className="h-11 rounded-full border border-black/10 px-4 text-[14px]"/>
          <input placeholder="Fecha deseada" type="date" className="h-11 rounded-full border border-black/10 px-4 text-[14px]"/>
          <textarea required placeholder="Cuéntanos qué te gustaría hacer: cocina, senderismo, visita a un pueblo, cascadas..." rows={5} className="rounded-[16px] border border-black/10 p-4 text-[14px] resize-none"/>
        </div>
        <button type="submit" className="mt-6 w-full h-[48px] rounded-full bg-[#D9773A] text-white font-[700] text-[14px] hover:bg-[#B85C24] transition">Enviar mensaje</button>
        <a href={WA_LINK('Hola, equipo de Ourika. Tengo una pregunta sobre las experiencias.')} target="_blank" className="mt-3 w-full h-[48px] rounded-full border border-black/10 font-[600] text-[14px] grid place-items-center">O escríbenos por WhatsApp</a>
        <p className="text-[11px] text-[#8A7D6B] text-center mt-4">Tus datos están protegidos. No enviamos spam ni compartimos tu correo electrónico. Te informaremos sobre las condiciones de cancelación gratuita.</p>
      </>
    )}
  </form>
</main>
  );
}

function ScrollTop() {
  const loc = useLocation();
  useEffect(()=>{ window.scrollTo(0,0); },[loc.pathname]);
  return null;
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <ScrollTop/>
        <div className="min-h-screen bg-[#FFFBF2] text-[#1A3A2F] selection:bg-[#D9773A]/20">
          <Header/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/experiences" element={<ExperiencesPage/>}/>
            <Route path="/experiences/:slug" element={<ExperienceDetailPage/>}/>
            <Route path="/half-day-tours" element={<HalfDayPage/>}/>
            <Route path="/full-day-tours" element={<FullDayPage/>}/>
            
            <Route path="/sahara-desert"element={<SaharaDesertPage />}
 
  
/>
            <Route path="/about" element={<AboutPage/>}/>
            
            <Route path="/gallery" element={<GalleryPage/>}/>
            <Route path="/blog" element={<BlogPage/>}/>
            <Route path="/blog/:slug" element={<BlogDetailPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/imprint" element={<Imprint />} />
          </Routes>
          <Footer/>

          {/* WhatsApp float */}
          <a href={WA_LINK('Salam! I found you on Ourika Authentic website')} target="_blank" aria-label="WhatsApp" className="fixed bottom-5 right-5 z-[60] w-[56px] h-[56px] rounded-full bg-[#25D366] text-white shadow-[0_12px_30px_rgba(0,0,0,0.25)] grid place-items-center hover:scale-[1.05] transition">
            <span className="text-[24px]">💬</span>
          </a>
        </div>
      </BrowserRouter>
    </LangProvider>
  );
}
