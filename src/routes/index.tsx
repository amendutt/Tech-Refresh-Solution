import { createFileRoute } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  Code2,
  Database,
  Eye,
  Facebook,
  GraduationCap,
  HeartPulse,
  Instagram,
  Linkedin,
  Menu,
  Network,
  ShoppingCart,
  Target,
  Twitter,
  X,
  Youtube,
} from "lucide-react";

import { Dialog, DialogContent, DialogTitle } from "../components/ui/dialog";

import logoLightImage from "../assets/trs-logo-light.png";
import heroImage from "../assets/hero-digital-command-clean.jpg";
import developmentImage from "../assets/capability-development.jpg";
import webDesignImage from "../assets/capability-web-design.jpg";
import educationImage from "../assets/capability-education.jpg";
import networkingImage from "../assets/capability-networking.jpg";
import ecommerceImage from "../assets/capability-ecommerce.jpg";
import consultingImage from "../assets/capability-consulting.jpg";
import ashirvachanaImage from "../assets/portfolio/ashirvachana.png";
import ayodhyaImage from "../assets/portfolio/ayodhya_dhaam.png";
import biometricImage from "../assets/portfolio/biometric_rml.png";
import cymImage from "../assets/portfolio/cymservices.png";
import dgtkImage from "../assets/portfolio/dgtk.png";
import dharmeshwariImage from "../assets/portfolio/dharmeshwari_group.png";
import dusImage from "../assets/portfolio/DUS_Rml.png";
import etransImage from "../assets/portfolio/etrans.png";
import famsImage from "../assets/portfolio/fams.png";
import famsPankiImage from "../assets/portfolio/fams_panki.png";
import ggpbImage from "../assets/portfolio/ggpb.png";
import graminPragatiImage from "../assets/portfolio/graminpragatisamiti.png";
import imkExpressImage from "../assets/portfolio/imkexpress.png";
import jhmcImage from "../assets/portfolio/jhmc.png";
import jobPortalImage from "../assets/portfolio/job_portal.png";
import kashiYatraImage from "../assets/portfolio/kashi_yatra.png";
import legalHelpdeskImage from "../assets/portfolio/legalHelpdesk.png";
import legalPointImage from "../assets/portfolio/legalpoint.png";
import miparImage from "../assets/portfolio/mipar.png";
import opdJhmcImage from "../assets/portfolio/opd_jhmc.png";
import phoenixGlobalImage from "../assets/portfolio/phoenix-global.png";
import promilaImage from "../assets/portfolio/promila.png";
import salehGharibImage from "../assets/portfolio/saleh-gharib.png";
import uppbpbImage from "../assets/portfolio/uppbpb.png";
import upProjectsImage from "../assets/portfolio/up-projects.png";
import vtlImage from "../assets/portfolio/vtl.png";
import wunyaImage from "../assets/portfolio/wunya.png";
import xrayReportImage from "../assets/portfolio/xray-report.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tech Refresh Solution | All in One IT Solution" },
      { name: "description", content: "Tech Refresh Solution delivers software development, infrastructure, networking, consulting and support for organizations across sectors." },
      { property: "og:title", content: "Tech Refresh Solution | All in One IT Solution" },
      { property: "og:description", content: "End-to-end IT services, products, hardware and software solutions from Tech Refresh Solution." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  ["Development", "Custom software and application development", Code2, developmentImage],
  ["Web Designing", "Clear, responsive digital experiences", ArrowUpRight, webDesignImage],
  ["Education", "Technology solutions for learning institutions", GraduationCap, educationImage],
  ["Networking", "Connected and dependable infrastructure", Network, networkingImage],
  ["E-Commerce", "Digital commerce systems and experiences", ShoppingCart, ecommerceImage],
  ["Consulting", "Practical guidance for technology decisions", Database, consultingImage],
] as const;

const sectors = [
  { n: "01", title: "Education", detail: "End-to-end development and deployment for educational institutions, including portals, websites and student systems.", items: ["Institutional websites & portals", "Student management systems", "Admission & examination modules", "Job and skill development portals"] },
  { n: "02", title: "Health Care", detail: "Patient portals, IPD software, patient reporting systems and mobile applications for doctors.", items: ["OPD & IPD management software", "Patient reporting systems", "X-Ray & diagnostic report platforms", "Doctor mobile applications"] },
  { n: "03", title: "Transport", detail: "Transport software services and management systems built for logistics operations.", items: ["Transport management software", "Fleet & trip tracking", "Logistics booking websites", "Courier & express platforms"] },
  { n: "04", title: "Private Sector", detail: "Development, installation, integration, commissioning and maintenance of computing infrastructure.", items: ["Corporate websites & intranets", "Network setup & commissioning", "Hardware supply and maintenance", "Annual support contracts"] },
  { n: "05", title: "Product Based", detail: "Customized applications including asset, case, student, transport and biometric attendance systems.", items: ["Fixed asset management system", "Case & document management", "Biometric attendance system", "Inventory & store management"] },
];

const socials = [
  { label: "Facebook", href: "https://www.facebook.com/techrefreshsolution", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/techrefreshsolution", Icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/techrefreshsolution", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://twitter.com/techrefreshsol", Icon: Twitter },
  { label: "YouTube", href: "https://www.youtube.com/@techrefreshsolution", Icon: Youtube },
] as const;


const technologies = ["Microsoft ASP.NET", "Java / J2EE", "Mobile Apps", "Android / iOS", "PHP / MySQL", "Angular.js", "React.js", "Open Source", "CMS", "E-Commerce", "WordPress", "Laravel", "Linux / Apache", "Data Security", "SQL Databases"];

type Project = { title: string; category: string; group: string; image: string; link?: string };

const portfolio: Project[] = [
  { title: "Ashirvachana", category: "Service marketplace", group: "Commerce & Logistics", image: ashirvachanaImage, link: "https://ashirvachana.com" },
  { title: "Ayodhya Dhaam", category: "Tourism portal", group: "Government & Education", image: ayodhyaImage, link: "https://ayodhya-dham.in" },
  { title: "Digital Governance", category: "Government technology", group: "Government & Education", image: dgtkImage, link: "https://dgtk.co.in" },
  { title: "Dharmeshwari Group", category: "Corporate platform", group: "Commerce & Logistics", image: dharmeshwariImage, link: "https://dharmeshwarigroup.com" },
  { title: "Fixed Asset Management", category: "Enterprise software", group: "Commerce & Logistics", image: famsImage },
  { title: "Panki Asset & Inventory", category: "Power sector ERP", group: "Government & Education", image: famsPankiImage },
  { title: "RML Biometric", category: "Healthcare operations", group: "Healthcare", image: biometricImage },
  { title: "Document Upload System", category: "Workflow application", group: "Government & Education", image: dusImage },
  { title: "English–Sanskrit Translation", category: "Language technology", group: "Government & Education", image: etransImage, link: "http://etrans.promila.in" },
  { title: "CYM Services", category: "Business website", group: "Commerce & Logistics", image: cymImage, link: "https://cymservices.com.au" },
  { title: "Govt. Girls Polytechnic Ballia", category: "Institutional portal", group: "Government & Education", image: ggpbImage, link: "https://ggpb.in" },
  { title: "Gramin Pragati Samiti", category: "Non-profit platform", group: "Community", image: graminPragatiImage, link: "https://graminpragati.in" },
  { title: "IMK Express", category: "Logistics website", group: "Commerce & Logistics", image: imkExpressImage, link: "http://imkexpress.com" },
  { title: "JHMC", category: "Medical college website", group: "Healthcare", image: jhmcImage, link: "http://jawaharhmcgov.co.in" },
  { title: "UPSDM Job Portal", category: "Employment platform", group: "Government & Education", image: jobPortalImage, link: "http://upsdmalumni.com" },
  { title: "Kashi Yatra", category: "Tourism platform", group: "Government & Education", image: kashiYatraImage, link: "https://kashiyatra.com" },
  { title: "Legal Helpdesk", category: "Legal services website", group: "Legal", image: legalHelpdeskImage, link: "https://legalhelpdesk.in" },
  { title: "The Legal Point", category: "Legal services portal", group: "Legal", image: legalPointImage, link: "https://thelegalpoint.in" },
  { title: "Mipar", category: "E-commerce platform", group: "Commerce & Logistics", image: miparImage, link: "https://mipar.in" },
  { title: "JHMC OPD", category: "Patient services portal", group: "Healthcare", image: opdJhmcImage },
  { title: "Phoenix Energy Global", category: "Industrial services website", group: "Commerce & Logistics", image: phoenixGlobalImage, link: "https://phoenixenergyglobal.com" },
  { title: "Dr. Promila Bahadur", category: "Academic portfolio", group: "Government & Education", image: promilaImage, link: "http://promila.in" },
  { title: "Saleh Gharib", category: "Workforce application", group: "Commerce & Logistics", image: salehGharibImage, link: "http://salehgarib.com" },
  { title: "UP Police Recruitment Board", category: "Public recruitment portal", group: "Government & Education", image: uppbpbImage, link: "https://uppbpb.gov.in" },
  { title: "UP Projects Corporation", category: "Government enterprise portal", group: "Government & Education", image: upProjectsImage, link: "https://upprojects.upsdc.gov.in" },
  { title: "Vanmadhuryam Testing Laboratory", category: "Industrial laboratory website", group: "Commerce & Logistics", image: vtlImage, link: "https://vtlspectro.com" },
  { title: "Wunya Community Care", category: "Community healthcare website", group: "Healthcare", image: wunyaImage, link: "https://wunya.com.au" },
  { title: "X-Ray Report", category: "Medical reporting platform", group: "Healthcare", image: xrayReportImage },
];


const portfolioGroups = ["Government & Education", "Healthcare", "Commerce & Logistics", "Legal", "Community"] as const;
type PortfolioGroup = (typeof portfolioGroups)[number];

function Index() {
  const pageRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSector, setActiveSector] = useState(0);
  const [activePortfolioGroup, setActivePortfolioGroup] = useState<PortfolioGroup>("Government & Education");
  const [previewProject, setPreviewProject] = useState<Project | null>(null);
  const visibleProjects = portfolio.filter((project) => project.group === activePortfolioGroup);

  useEffect(() => {
    if (reduceMotion || !pageRef.current) return;
    let context: { revert: () => void } | undefined;
    let cancelled = false;
    void import("gsap").then(({ gsap }) => import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      if (cancelled || !pageRef.current) return;
      gsap.registerPlugin(ScrollTrigger);
      context = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((item) => {
          gsap.fromTo(item, { y: 48, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out", scrollTrigger: { trigger: item, start: "top 86%" } });
        });
        gsap.to("[data-orbit]", { rotate: 160, ease: "none", scrollTrigger: { trigger: "#about", start: "top bottom", end: "bottom top", scrub: 1.2 } });
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
          gsap.fromTo(item, { yPercent: -5 }, { yPercent: 7, ease: "none", scrollTrigger: { trigger: item.parentElement, start: "top bottom", end: "bottom top", scrub: 1 } });
        });
        gsap.utils.toArray<HTMLElement>("[data-doodle]").forEach((item, index) => {
          gsap.to(item, { y: index % 2 ? 28 : -28, rotate: index % 2 ? 14 : -14, ease: "none", scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: 1.4 } });
        });
      }, pageRef);
    }));
    return () => { cancelled = true; context?.revert(); };
  }, [reduceMotion]);

  return (
    <div ref={pageRef} className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-hero-line text-hero-foreground">
        <div className="site-shell flex h-24 items-center justify-between gap-6">
          <a href="#top" aria-label="Tech Refresh Solution home" className="logo-plate shrink-0">
            <img src={logoLightImage} alt="Tech Refresh Solution" className="logo-image h-14 w-auto object-contain object-center sm:h-16" />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#projects">Portfolio</a>
            <a className="nav-link" href="#technology">Technology</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-1 lg:flex">
              {socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="social-dot"><Icon size={16} /></a>)}
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Talk to us <ArrowUpRight size={16} /></a>
          </div>
          <button className="icon-button icon-button-dark md:!hidden" aria-label="Toggle navigation" onClick={() => setMenuOpen((v) => !v)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        {menuOpen && <nav className="site-shell flex flex-col gap-5 border-t border-hero-line py-6 font-medium md:!hidden"><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#projects" onClick={() => setMenuOpen(false)}>Portfolio</a><a href="#technology" onClick={() => setMenuOpen(false)}>Technology</a><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a><div className="flex gap-2 pt-1">{socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="social-dot"><Icon size={16} /></a>)}</div></nav>}
      </header>


      <main id="top">
        <section className="hero-stage relative min-h-[92svh] overflow-hidden pt-24 text-hero-foreground">
          <motion.img initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 1.7, ease: [0.22, 1, 0.36, 1] }} src={heroImage} alt="Technology specialists collaborating in a connected operations environment" className="absolute inset-0 size-full object-cover" width={1600} height={900} />
          <div className="hero-shade absolute inset-0" />
          <div className="hero-grid absolute inset-0 opacity-35" />
          <div data-doodle className="hero-signal absolute right-[8%] top-[24%] hidden lg:block" aria-hidden="true"><span/><span/><span/></div>
          <div className="site-shell relative flex min-h-[calc(92svh-5rem)] flex-col justify-between py-9 md:py-14">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex items-center justify-between text-xs uppercase text-hero-muted">
              <span>Established 2022 · Lucknow</span><span className="hidden sm:inline">IT services · Products · Solutions</span>
            </motion.div>
            <div className="max-w-4xl py-10">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mb-4 font-display text-2xl uppercase tracking-[0.22em] text-hero-foreground md:text-3xl">Tech Refresh Solution</motion.p>
              <motion.p initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} className="mb-5 flex items-center gap-3 text-sm font-semibold text-accent"><span className="h-px w-10 bg-accent" /> All in One IT Solution</motion.p>

              <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.9 }} className="max-w-4xl font-display text-[clamp(3.8rem,9vw,8.2rem)] leading-[0.84]">Technology that<br/><em className="font-normal text-accent">moves work forward.</em></motion.h1>
              <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="mt-7 max-w-xl text-base leading-relaxed text-hero-muted md:text-lg">Software, infrastructure and digital systems engineered around the way your organization actually works.</motion.p>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }} className="mt-8 flex flex-wrap gap-3">
                <a href="#services" className="hero-cta bg-accent text-accent-foreground">Explore capabilities <ArrowDownRight size={18}/></a>
                <a href="#projects" className="hero-cta border border-hero-line bg-hero/50 text-hero-foreground backdrop-blur">View our work <ArrowUpRight size={18}/></a>
              </motion.div>
            </div>
            <div className="grid gap-4 border-t border-hero-line pt-5 text-xs text-hero-muted sm:grid-cols-[1fr_auto_auto] sm:items-end sm:gap-8"><span>Scroll to explore</span><div><strong className="block font-display text-3xl font-normal text-hero-foreground">10+</strong>Digital platforms</div><div><strong className="block font-display text-3xl font-normal text-accent">End-to-end</strong>Delivery & support</div></div>
          </div>
        </section>

        <section id="about" className="relative section-pad bg-surface">
          <div data-orbit className="doodle-orbit absolute -right-32 top-12 hidden size-96 rounded-full lg:block" />
          <div className="site-shell relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4" data-reveal><p className="eyebrow">01 · About us</p><h2 className="section-title">Built to solve the whole problem.</h2></div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal>
              <p className="text-balance text-2xl leading-snug text-foreground md:text-3xl">Tech Refresh Solution is a locally incorporated partnership firm offering a wide range of IT services, products, hardware and software solutions.</p>
              <div className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-2"><p className="body-copy">We custom-design solutions—from relational database systems and front ends to enhancements for existing programs.</p><p className="body-copy">Our approach begins with customer requirements, then evaluates available solutions to provide the correct, complete and cost-effective technology.</p></div>
            </div>
          </div>
        </section>

        <section id="services" className="services-band section-pad relative overflow-hidden bg-background">
          <div data-doodle className="spark-doodle absolute -right-10 top-28 hidden md:block" aria-hidden="true"><span/><span/><span/><span/></div>
          <div className="site-shell relative">
            <div className="mb-12 grid gap-6 lg:grid-cols-2" data-reveal><div><p className="eyebrow">02 · Key service offerings</p><h2 className="section-title max-w-xl">Capability that moves with you.</h2></div><p className="body-copy max-w-md self-end lg:justify-self-end">We set realistic expectations—and work to exceed them in unexpected and helpful ways.</p></div>
            <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {services.map(([title, detail, Icon, image], index) => <motion.article key={title} whileHover={reduceMotion ? {} : { y: -10 }} transition={{ type: "spring", stiffness: 250, damping: 22 }} className="service-card group relative overflow-hidden bg-background" data-reveal>
                <div className="service-visual relative aspect-[4/2.65] overflow-hidden"><img data-parallax src={image} alt={`${title} capability`} loading="lazy" width={900} height={650} className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"/><div className="service-image-shade absolute inset-0"/><div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5"><span className="grid size-11 place-items-center rounded-full bg-background/90 text-primary backdrop-blur"><Icon size={21}/></span><span className="text-xs font-semibold text-hero-foreground">0{index + 1}</span></div></div>
                <div className="p-6 md:p-8"><h3 className="font-display text-3xl">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{detail}</p><div className="mt-7 flex items-center justify-between border-t border-border pt-4 text-xs font-semibold uppercase text-primary"><span>Capability</span><ArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" size={19}/></div></div>
              </motion.article>)}
            </div>
            <p className="mt-7 text-sm text-muted-foreground">Also offering Training, SEO, Technology, Project Management, Manpower and Support.</p>
          </div>
        </section>

        <section id="experience" className="section-pad pattern-field relative overflow-hidden bg-primary text-primary-foreground">
          <div data-doodle className="circuit-doodle absolute -left-16 top-14 size-52" aria-hidden="true" />
          <div className="site-shell">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div data-reveal><p className="eyebrow text-primary-soft">03 · Major projects executed</p><h2 className="section-title">Experience across sectors.</h2><p className="mt-6 max-w-md text-primary-soft">We partner with clients for end-to-end development, deployment, integration and ongoing technology delivery.</p></div>
              <div className="border-t border-primary-line" data-reveal>
                {sectors.map((sector, index) => <button key={sector.title} onClick={() => setActiveSector(index)} className="sector-row group w-full border-b border-primary-line py-5 text-left" aria-expanded={activeSector === index}>
                  <div className="grid grid-cols-[3rem_1fr_auto] items-center gap-3"><span className="text-xs text-primary-soft">{sector.n}</span><span className="font-display text-2xl md:text-3xl">{sector.title}</span><ChevronDown className={`transition-transform ${activeSector === index ? "rotate-180" : ""}`} size={20}/></div>
                  <motion.div initial={false} animate={{ height: activeSector === index ? "auto" : 0, opacity: activeSector === index ? 1 : 0 }} className="overflow-hidden"><div className="max-w-xl pb-2 pl-12 pt-4"><p className="text-sm leading-relaxed text-primary-soft">{sector.detail}</p><ul className="sector-list mt-4 grid gap-2 sm:grid-cols-2">{sector.items.map((item) => <li key={item} className="flex items-start gap-2 text-sm text-primary-foreground"><span className="sector-bullet" aria-hidden="true" />{item}</li>)}</ul></div></motion.div>
                </button>)}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="portfolio-band section-pad relative overflow-hidden bg-background">
          <div className="site-shell relative">
            <div data-doodle className="code-doodle absolute -right-10 -top-20 hidden size-40 lg:block" aria-hidden="true">&lt;/&gt;</div>
            <div className="portfolio-loop absolute -left-20 top-[36rem] hidden lg:block" data-doodle aria-hidden="true"><span>Build</span><span>Test</span><span>Launch</span></div>
            <div className="portfolio-heading mb-12 grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end" data-reveal><div className="min-w-0"><p className="eyebrow">04 · Selected portfolio</p><h2 className="section-title max-w-2xl italic">Systems made for real work.</h2></div><div className="max-w-md border-l border-border pl-6 md:mb-1"><p className="body-copy">A selection of public platforms, enterprise tools and purpose-built digital products delivered across sectors.</p><p className="mt-4 text-sm font-semibold text-primary">28 projects · 5 sectors</p></div></div>
            <div className="portfolio-tabs mb-10 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Filter projects by category" data-reveal>
              {portfolioGroups.map((group) => {
                const count = portfolio.filter((project) => project.group === group).length;
                const selected = activePortfolioGroup === group;
                return <button key={group} type="button" role="tab" aria-selected={selected} onClick={() => setActivePortfolioGroup(group)} className={`portfolio-tab ${selected ? "portfolio-tab-active" : ""}`}><span>{group}</span><span className="portfolio-tab-count">{count}</span></button>;
              })}
            </div>
            <motion.div key={activePortfolioGroup} initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .35 }} className="portfolio-grid" role="tabpanel">
              {visibleProjects.map((project) => (
                <motion.article
                  key={project.title}
                  whileHover={reduceMotion ? {} : { y: -6 }}
                  transition={{ type: "spring", stiffness: 240, damping: 24 }}
                  className="portfolio-card group"
                >
                  <div className="portfolio-browser-bar">
                    <div className="portfolio-browser-dots" aria-hidden="true">
                      <span className="portfolio-browser-dot bg-[#ff5f56]/80" />
                      <span className="portfolio-browser-dot bg-[#ffbd2e]/80" />
                      <span className="portfolio-browser-dot bg-[#27c93f]/80" />
                    </div>
                    <div className="portfolio-browser-pill">
                      <span className="size-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                      <span className="truncate">{project.link ? project.link.replace(/^https?:\/\//, "") : project.category}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setPreviewProject(project)}
                      className="cursor-pointer text-muted-foreground transition-colors hover:text-foreground"
                      aria-label={`Preview full image of ${project.title}`}
                      title="Preview full screenshot"
                    >
                      <Eye size={15} />
                    </button>
                  </div>

                  <div
                    className="portfolio-screen cursor-pointer"
                    onClick={() => setPreviewProject(project)}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} project interface`}
                      loading="lazy"
                    />
                    <div className="portfolio-shine" />

                    <div className="portfolio-hover-action">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setPreviewProject(project);
                        }}
                        className="portfolio-hover-btn border border-border bg-surface text-foreground"
                      >
                        <Eye size={15} /> Preview
                      </button>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          onClick={(e) => e.stopPropagation()}
                          className="portfolio-hover-btn bg-primary text-primary-foreground"
                        >
                          Visit Site <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="portfolio-info">
                    <div className="mb-2.5 flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        {project.category}
                      </span>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Visit live site of ${project.title}`}
                          className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight size={13} />
                        </a>
                      ) : (
                        <span className="text-[11px] font-medium text-muted-foreground">
                          Enterprise System
                        </span>
                      )}
                    </div>

                    <div className="mt-auto flex items-end justify-between gap-4">
                      <h3 className="font-display text-2xl font-normal leading-snug text-foreground transition-colors group-hover:text-primary">
                        {project.title}
                      </h3>
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`Visit ${project.title}`}
                          className="portfolio-arrow shrink-0"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setPreviewProject(project)}
                          className="portfolio-arrow shrink-0 cursor-pointer"
                          aria-label={`Preview full image of ${project.title}`}
                        >
                          <Eye size={16} />
                        </button>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>

          </div>
        </section>

        <section id="technology" className="technology-band section-pad relative overflow-hidden bg-surface">
          <div data-doodle className="tech-rings absolute -bottom-24 -right-24 hidden size-80 md:block" aria-hidden="true"><span/><span/></div>
          <div className="site-shell relative grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4" data-reveal><p className="eyebrow">05 · Technologies</p><h2 className="section-title">Proven tools.<br/>Practical choices.</h2></div>
            <div className="lg:col-span-7 lg:col-start-6" data-reveal><div className="flex flex-wrap gap-3">{technologies.map((item, i) => <motion.span whileHover={reduceMotion ? {} : { y: -4, rotate: i % 2 ? 1 : -1 }} key={item} className="tech-pill">{item}</motion.span>)}</div><p className="mt-10 border-l-2 border-accent pl-6 text-xl leading-relaxed">Quality is not just another goal; it is our basic strategy for continuous growth.</p></div>
          </div>
        </section>

        <section className="mission-band section-pad relative overflow-hidden bg-background">
          <div data-doodle className="arrow-doodle absolute left-[48%] top-10 hidden lg:block" aria-hidden="true">↗</div>
          <div className="site-shell relative grid gap-8 lg:grid-cols-2">
            <div className="mission-block" data-reveal><span className="mission-icon"><Target size={22}/></span><p className="eyebrow mt-6">06 · Mission</p><h2 className="font-display text-4xl md:text-5xl">Add value. Build long-term success.</h2><p className="body-copy mt-6">We help clients identify solutions that improve performance, implement those solutions and manage the change that follows.</p></div>
            <div className="mission-block bg-secondary" data-reveal><span className="mission-icon"><Eye size={22}/></span><p className="eyebrow mt-6">07 · Vision</p><h2 className="font-display text-4xl md:text-5xl">A knowledge-based global IT organization.</h2><p className="body-copy mt-6">Offering software application development, hardware, turnkey solutions, services and products that exceed customer expectations.</p></div>

          </div>
        </section>

        <section className="bg-hero py-20 text-hero-foreground">
          <div className="site-shell grid gap-10 lg:grid-cols-12" data-reveal><p className="eyebrow text-accent lg:col-span-3">Why choose us</p><blockquote className="font-display text-4xl leading-tight md:text-6xl lg:col-span-8">“Powered by technology and driven by talent.”</blockquote><p className="max-w-2xl text-hero-muted lg:col-span-7 lg:col-start-5">We see challenges through the client’s eyes, support ongoing digital transformation and build partnerships through shared knowledge, skill and trust.</p></div>
        </section>

        <section id="contact" className="section-pad contact-pattern bg-accent text-accent-foreground">
          <div className="site-shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7" data-reveal><p className="eyebrow text-accent-foreground/65">08 · Contact</p><h2 className="font-display text-5xl leading-[0.95] md:text-7xl">Tell us what your business needs.</h2><p className="mt-6 max-w-xl text-accent-foreground/70">Share your questions or inputs and we will route your request to the appropriate person. You should receive a response within 48 hours by mail.</p><a href="mailto:techrefreshsolution@gmail.com" className="mt-8 inline-flex items-center gap-3 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background">Send an enquiry <ArrowUpRight size={17}/></a></div>
            <address className="not-italic lg:col-span-4 lg:col-start-9" data-reveal><p className="text-xs uppercase tracking-[0.2em] text-accent-foreground/55">Visit</p><p className="mt-3 leading-relaxed">35-A, Adil Nagar, Kalyanpur West,<br/>Lucknow, Uttar Pradesh 226022</p><p className="mt-8 text-xs uppercase tracking-[0.2em] text-accent-foreground/55">Connect</p><a className="mt-3 block" href="mailto:techrefreshsolution@gmail.com">techrefreshsolution@gmail.com</a><a className="mt-2 block" href="tel:+917905092065">+91 7905092065</a><a className="mt-2 block" href="tel:+917985710701">+91 7985710701</a><p className="mt-8 text-xs uppercase tracking-[0.2em] text-accent-foreground/55">Follow</p><div className="mt-3 flex flex-wrap gap-2">{socials.map(({ label, href, Icon }) => <motion.a key={label} whileHover={reduceMotion ? {} : { y: -4 }} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="social-chip"><Icon size={18}/></motion.a>)}</div></address>
          </div>
        </section>
      </main>
      <footer className="bg-foreground py-10 text-background"><div className="site-shell flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between"><img src={logoLightImage} alt="Tech Refresh Solution" className="h-16 w-auto object-contain sm:h-20"/><div className="flex gap-2">{socials.map(({ label, href, Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer noopener" aria-label={label} className="social-dot social-dot-footer"><Icon size={17}/></a>)}</div><p className="text-background/55">© 2026 Tech Refresh Solution. All rights reserved.</p></div></footer>

      <Dialog open={!!previewProject} onOpenChange={(open) => !open && setPreviewProject(null)}>
        <DialogContent className="max-h-[92vh] max-w-4xl overflow-hidden p-0 border border-border bg-card">
          {previewProject && (
            <div className="flex max-h-[92vh] flex-col">
              <div className="flex items-center justify-between border-b border-border bg-surface px-6 py-4 pr-12">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {previewProject.category} · {previewProject.group}
                  </span>
                  <DialogTitle className="mt-0.5 font-display text-2xl text-foreground md:text-3xl">
                    {previewProject.title}
                  </DialogTitle>
                </div>
                {previewProject.link && (
                  <a
                    href={previewProject.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow transition-opacity hover:opacity-95"
                  >
                    Visit Live Site <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
              <div className="overflow-y-auto bg-muted/20 p-4 md:p-6">
                <img
                  src={previewProject.image}
                  alt={`${previewProject.title} full preview`}
                  className="h-auto w-full rounded-lg border border-border object-contain shadow-lg"
                />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}