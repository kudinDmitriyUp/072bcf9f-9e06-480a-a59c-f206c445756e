"use client"

import { Award, Briefcase, Globe, Instagram, Lightbulb, Linkedin, MessageCircle, Palette, Sparkles, Target, Twitter, Wrench, Zap } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
      contentWidth="large"
      sizing="large"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Portfolio", id: "portfolio" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Creative Director"
          button={{ text: "Hire Me", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Yashar Rakei"
          description="Crafting compelling visual narratives and brand experiences that resonate with audiences and drive meaningful connections"
          tag="Portfolio"
          tagIcon={Sparkles}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336371931-q4m0afgp.jpg",
              imageAlt: "Creative portfolio work 1"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336372680-xfy78k8m.jpg",
              imageAlt: "Creative portfolio work 2"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336373363-tnq497h8.jpg",
              imageAlt: "Creative portfolio work 3"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336374137-32suwfg5.jpg",
              imageAlt: "Creative portfolio work 4"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336374694-h6vosgpv.jpg",
              imageAlt: "Creative portfolio work 5"
            }
          ]}
          buttons={[
            { text: "View My Work", href: "portfolio" },
            { text: "Get in Touch", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Transforming Ideas Into Impact"
          description={[
            "With over 8 years of experience in creative direction, I specialize in developing comprehensive brand strategies that elevate businesses and create lasting impressions.",
            "My approach combines strategic thinking with innovative design to deliver solutions that not only look exceptional but drive real business results."
          ]}
          buttons={[
            { text: "Learn More", href: "services" }
          ]}
          showBorder={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwo
          title="Creative Services"
          description="Comprehensive creative solutions tailored to elevate your brand and engage your audience"
          tag="Expertise"
          tagIcon={Award}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          features={[
            {
              title: "Brand Strategy",
              description: "Developing cohesive brand identities that communicate your values and connect with target audiences effectively",
              icon: Target,
              button: { text: "Learn More", href: "contact" }
            },
            {
              title: "Visual Design",
              description: "Creating stunning visual assets including logos, marketing materials, and digital designs that captivate and inspire",
              icon: Palette,
              button: { text: "View Portfolio", href: "portfolio" }
            },
            {
              title: "Creative Direction",
              description: "Leading creative projects from concept to completion, ensuring consistent vision and exceptional execution",
              icon: Lightbulb,
              button: { text: "Start Project", href: "contact" }
            },
            {
              title: "Digital Strategy",
              description: "Crafting digital experiences and campaigns that drive engagement and deliver measurable business results",
              icon: Zap,
              button: { text: "Discuss Ideas", href: "contact" }
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardOne
          title="Featured Projects"
          description="A curated selection of recent work showcasing creative excellence and strategic thinking"
          tag="Portfolio"
          tagIcon={Briefcase}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="uniform-all-items-equal"
          products={[
            {
              id: "1",
              name: "Brand Identity Redesign",
              price: "2023",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336376098-fy65jx3h.jpg",
              imageAlt: "Brand identity design project",
              onProductClick: () => window.open('/portfolio/brand-identity', '_blank')
            },
            {
              id: "2",
              name: "Digital Platform Design",
              price: "2023",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336377187-joayb95c.jpg",
              imageAlt: "Digital platform design project",
              onProductClick: () => window.open('/portfolio/digital-platform', '_blank')
            },
            {
              id: "3",
              name: "Creative Campaign",
              price: "2024",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336377836-99a9t8hl.jpg",
              imageAlt: "Creative campaign project",
              onProductClick: () => window.open('/portfolio/creative-campaign', '_blank')
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Client Success Stories"
          description="Hear from the brands and businesses I've had the privilege to work with"
          tag="Testimonials"
          tagIcon={MessageCircle}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Marketing Director",
              testimonial: "Working with this creative director transformed our brand completely. The strategic approach and attention to detail exceeded all our expectations.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336378479-xvpssgi1.jpg",
              imageAlt: "Sarah Johnson portrait"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Startup Founder",
              testimonial: "The creative vision and execution were outstanding. Our new brand identity perfectly captures our company's mission and values.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336379131-4lo0r1rz.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "CEO",
              testimonial: "Exceptional creativity combined with strategic thinking. The final designs drove significant engagement and brand recognition.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336379820-zjhmcz16.jpg",
              imageAlt: "Emily Rodriguez portrait"
            },
            {
              id: "4",
              name: "David Thompson",
              role: "Creative Manager",
              testimonial: "Professional, innovative, and results-driven. The collaborative process was smooth and the outcomes were phenomenal.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336380588-pt4eu4mg.jpg",
              imageAlt: "David Thompson portrait"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Tools & Platforms"
          description="Working with industry-leading creative tools and platforms to deliver exceptional results"
          tag="Tools"
          tagIcon={Wrench}
          textboxLayout="default"
          logos={[
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336381559-jkcptce8.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336382301-aqidx7e6.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336383329-tf0adsyf.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336384438-86q1amnn.jpg",
            "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336384997-lwti4932.jpg"
          ]}
          speed={30}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Let's Create Something Amazing"
          description="Ready to elevate your brand? Let's discuss your project and explore how we can work together to achieve your creative goals."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Name", required: true },
            { name: "email", type: "email", placeholder: "Email Address", required: true },
            { name: "company", type: "text", placeholder: "Company Name", required: false },
            { name: "budget", type: "text", placeholder: "Project Budget", required: false }
          ]}
          textarea={{ name: "message", placeholder: "Tell me about your project and creative vision...", rows: 5, required: true }}
          buttonText="Start Collaboration"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35a7P1i3U8nbKvxlC9pMeozlemI/uploaded-1763336385580-h5n21yd4.jpg"
          imageAlt="Creative studio collaboration"
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Creative Director"
          columns={[
            {
              title: "Services",
              items: [
                { label: "Brand Strategy", href: "services" },
                { label: "Visual Design", href: "services" },
                { label: "Creative Direction", href: "services" }
              ]
            },
            {
              title: "Portfolio",
              items: [
                { label: "Recent Work", href: "portfolio" },
                { label: "Case Studies", href: "portfolio" },
                { label: "Client Success", href: "testimonials" }
              ]
            },
            {
              title: "Connect",
              items: [
                { label: "Get in Touch", href: "contact" },
                { label: "About Me", href: "about" },
                { label: "Hire Me", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" },
            { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter" },
            { icon: Globe, href: "https://portfolio.com", ariaLabel: "Portfolio Website" }
          ]}
          copyrightText="© 2024 Creative Director. All rights reserved."
        />
      </div>
    </ThemeProvider>
  );
}