"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleMinimal from '@/components/navigation/NavbarStyleMinimal';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "slide" }}>
      <div>
        <div id="nav" data-section="nav">
          <NavbarStyleMinimal
            logoSrc="/images/logo.svg"
            logoWidth={150}
            logoHeight={60}
            buttonText="Get Started"
            onButtonClick={() => alert('CTA Clicked')}
            className="flex justify-between items-center p-4"
          />
        </div>
        <div id="hero" data-section="hero">
          <SplitHero
            title="Welcome to BrightWave SaaS"
            subtitle="Your partner in achieving digital excellence"
            primaryButtonText="Get Started"
            secondaryButtonText="Learn More"
            onPrimaryButtonClick={() => alert('Getting Started')}
            onSecondaryButtonClick={() => alert('Learn More')}
          />
        </div>
        <div id="about" data-section="about">
          <CtaAbout
            title="Why BrightWave?"
            descriptions={["We provide tailored solutions to your business needs.", "Join us to level up your digital experience.", "Together we'll achieve great results."]}
          />
        </div>
        <div id="how-to-buy" data-section="how-to-buy">
          <HowToBuy3D
            title="How to Purchase"
            steps={[
              { title: "Step One", description: "Sign up for an account", image: "/images/placeholder1.avif", position: "left", isCenter: false },
              { title: "Step Two", description: "Choose your plan", image: "/images/placeholder2.avif", position: "center", isCenter: true },
              { title: "Step Three", description: "Complete your payment", image: "/images/placeholder3.avif", position: "right", isCenter: false }
            ]}
          />
        </div>
        <div id="tokenomics" data-section="tokenomics">
          <ExpandingGridTokenomics
            title="Our Tokenomics"
            description="Understanding our pricing structure is crucial for future benefits."
            cardItems={[
              { id: 1, title: "Tier 1", description: "Basic access to features." },
              { id: 2, title: "Tier 2", description: "Advanced features with better support." },
              { id: 3, title: "Tier 3", description: "Premium support and features." }
            ]}
          />
        </div>
        <div id="footer" data-section="footer">
          <FooterLogo
            logoSrc="/images/logo.svg"
            logoAlt="BrightWave Logo"
            logoText="BrightWave"
            className="text-center p-4"
          />
        </div>
      </div>
    </SiteThemeProvider>
  );
}
