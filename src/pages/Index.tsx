import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import BookingForm from "@/components/BookingForm";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApartmentCard, { ApartmentProps } from "@/components/ApartmentCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Wifi, Utensils, Waves, LifeBuoy, MapPin, Coffee } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Sample apartments data
const featuredApartments: ApartmentProps[] = [
  {
    id: "1",
    name: "Deluxe Double Room",
    description: "Comfortable room with modern amenities, air conditioning, and city views.",
    price: 120,
    capacity: 2,
    size: 25,
    image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
    location: "Main Building",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Desk", "Mini Fridge"]
  },
  {
    id: "2",
    name: "Family Suite",
    description: "Spacious suite perfect for families, with separate sleeping areas and modern facilities.",
    price: 180,
    capacity: 4,
    size: 40,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    location: "Main Building",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Kitchenette", "Sitting Area"]
  },
  {
    id: "3",
    name: "Standard Single Room",
    description: "Cozy single room with essential amenities, perfect for business travelers.",
    price: 80,
    capacity: 1,
    size: 18,
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    location: "Main Building",
    features: ["Wi-Fi", "Bathroom", "Air Conditioning", "TV", "Desk"]
  }
];

export default function Index() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Feature items
  const features = [
    {
      icon: <Waves className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.beachfront.title,
      description: t.home.amenities.features.beachfront.description
    },
    {
      icon: <LifeBuoy className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.pools.title,
      description: t.home.amenities.features.pools.description
    },
    {
      icon: <Utensils className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.restaurant.title,
      description: t.home.amenities.features.restaurant.description
    },
    {
      icon: <Wifi className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.wifi.title,
      description: t.home.amenities.features.wifi.description
    },
    {
      icon: <Coffee className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.bar.title,
      description: t.home.amenities.features.bar.description
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: t.home.amenities.features.location.title,
      description: t.home.amenities.features.location.description
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Welcome Section */}
        <section id="welcome" className="section">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in [animation-delay:100ms]">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.welcome.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.welcome.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.welcome.description1}
                </p>
                <p className="text-muted-foreground mb-8">
                  {t.home.welcome.description2}
                </p>
                <Button asChild className="btn-primary">
                  <Link to="/about">
                    {t.home.welcome.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&h=600&fit=crop"
                    alt="Hotel exterior view" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-2/3 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=400&h=300&fit=crop"
                    alt="Hotel room interior" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 w-1/2 rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop"
                    alt="Hotel amenities" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Booking Form Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/5 to-white dark:from-primary/10 dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  {t.home.booking.subtitle}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                  {t.home.booking.title}
                </h2>
                <p className="text-muted-foreground mb-6">
                  {t.home.booking.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {t.home.booking.benefits.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                        <ArrowRight className="h-3 w-3" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <BookingForm />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </section>
        
        {/* Featured Apartments */}
        <section className="section">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.featuredApartments.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.featuredApartments.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.featuredApartments.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredApartments.map((apartment, index) => (
                <div key={apartment.id} className="animate-fade-in" style={{ animationDelay: `${(index + 1) * 100}ms` }}>
                  <ApartmentCard apartment={apartment} />
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="btn-primary">
                <Link to="/apartments">
                  {t.home.featuredApartments.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Features Section */}
        <section className="section bg-card">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="text-sm text-primary font-medium uppercase tracking-wider">
                {t.home.amenities.subtitle}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                {t.home.amenities.title}
              </h2>
              <p className="text-muted-foreground">
                {t.home.amenities.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="glass-card p-6 rounded-xl animate-fade-in flex flex-col items-center text-center"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <div className="mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Friday Biryani Special Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary/10 to-gold/10">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Friday Special
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-navy">
                  Friday Biryani
                </h2>
                <p className="text-muted-foreground mb-6">
                  Don't miss our authentic Friday Biryani special! Prepared with aromatic spices and premium ingredients, served every Friday at City Style Hotel.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Authentic Tanzanian Biryani</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Available every Friday</span>
                  </div>
                  <div className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3">
                      <span className="text-xs">✓</span>
                    </div>
                    <span>Order for takeaway or dine-in</span>
                  </div>
                </div>
                <Button size="lg" className="btn-primary">
                  <a href="tel:+255655461399">Call +255 655 461 399 to Order</a>
                </Button>
              </div>
              
              <div className="relative animate-fade-in [animation-delay:300ms]">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1563379091339-03246963d51a?w=800&h=600&fit=crop"
                    alt="Friday Biryani Special" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-primary text-primary-foreground rounded-full w-24 h-24 flex items-center justify-center font-bold">
                  <div className="text-center">
                    <div className="text-xs">EVERY</div>
                    <div className="text-sm">FRIDAY</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valentine's Package Section */}
        <section className="relative py-20 bg-card">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <span className="text-sm text-primary font-medium uppercase tracking-wider">
                  Special Package
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                  Valentine's Day Staycation
                </h2>
                <p className="text-muted-foreground">
                  Celebrate love with our romantic Valentine's package
                </p>
              </div>
              
              <div className="glass-card p-8 rounded-2xl animate-fade-in [animation-delay:200ms]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-navy">TSh 68,000</h3>
                    <h4 className="text-lg font-semibold mb-4">Package Includes:</h4>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        Dinner for two
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        Buffet breakfast for two
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        A special bottle of wine
                      </li>
                      <li className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-primary mr-2" />
                        Special valentine decor
                      </li>
                    </ul>
                    <p className="text-sm text-muted-foreground mb-4">
                      Valid from February 13th to 15th
                    </p>
                    <Button className="btn-primary">
                      <a href="tel:+255655461399">Call +255 655 461 399 to Book</a>
                    </Button>
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1518050346274-c87509b31fcf?w=600&h=400&fit=crop"
                      alt="Valentine's Dinner Setup" 
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-primary/5">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t.home.cta.title}
              </h2>
              <p className="text-muted-foreground mb-8">
                {t.home.cta.description}
              </p>
              <Button asChild size="lg" className="btn-primary">
                <Link to="/booking">{t.home.cta.bookNow}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
