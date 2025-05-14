"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  CheckCircle2,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
  BarChart2,
  LineChart,
  PieChart,
  Zap,
  ArrowRight,
} from "lucide-react"
import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

// Import the animated SVG components at the top of the file
import {
  LogoAnimation,
  HeroIllustration,
  AnalyticsIllustration,
  AutomationIllustration,
  PerformanceIllustration,
  ReportsIllustration,
  StarterPlanIllustration,
  ProPlanIllustration,
  EnterprisePlanIllustration,
  WavyBackground,
} from "@/components/animated-svgs"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300",
        scrolled ? "shadow-md" : "",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 overflow-hidden">
            <LogoAnimation />
          </div>
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        <nav className="hidden md:flex gap-6">
          {[
            { href: "#features", label: "Features" },
            { href: "#testimonials", label: "Testimonials" },
            { href: "#pricing", label: "Pricing" },
            { href: "#", label: "Blog" },
          ].map((item, index) => (
            <Link key={index} href={item.href} className="text-sm font-medium relative group">
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="#" className="hidden md:block text-sm font-medium hover:underline transition-colors">
            Sign In
          </Link>
          <Button
            size="sm"
            className="hidden md:flex transition-all duration-300 hover:scale-105 hover:shadow-md rounded-full"
          >
            Get Started
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="rounded-full transition-all duration-300 hover:bg-primary/10"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open mobile menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm animate-in fade-in-0 duration-200">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg animate-in slide-in-from-right duration-300 border-l">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 overflow-hidden">
                  <LogoAnimation />
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeMenu}
                className="rounded-full transition-all duration-300 hover:bg-primary/10"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close mobile menu</span>
              </Button>
            </div>

            <nav className="flex flex-col space-y-6">
              {[
                { href: "#features", label: "Features" },
                { href: "#testimonials", label: "Testimonials" },
                { href: "#pricing", label: "Pricing" },
                { href: "#", label: "Blog" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center py-2 text-lg font-medium border-b border-border/40 hover:text-primary transition-all duration-300 group"
                  onClick={closeMenu}
                >
                  {item.label}
                  <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
              <Link
                href="#"
                className="flex items-center py-2 text-lg font-medium border-b border-border/40 hover:text-primary transition-all duration-300 group"
                onClick={closeMenu}
              >
                Sign In
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </nav>

            <div className="mt-8 space-y-4">
              <Button className="w-full rounded-full transition-all duration-300 hover:scale-105 hover:shadow-md group">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
              <div className="flex items-center justify-between pt-4">
                <p className="text-sm text-muted-foreground">Switch Theme</p>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function HeroSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-background to-muted/30 dark:from-background dark:to-muted/10">
      <WavyBackground />
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-0 left-0 w-32 h-32 border border-primary/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full animate-[spin_30s_linear_infinite_reverse]"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-primary/10 rounded-full animate-[spin_15s_linear_infinite]"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div
          ref={ref}
          className={cn(
            "grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-[1fr_500px] items-center transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4 w-fit animate-fade-in">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              <span>Introducing StreamLine</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 dark:from-foreground dark:to-foreground/60">
                Streamline Your Workflow Like Never Before
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Boost productivity, reduce costs, and transform your business with our all-in-one SaaS platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Button
                size="lg"
                className="px-8 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-primary/20 rounded-full group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 transition-all duration-300 hover:scale-105 rounded-full"
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <p className="text-sm text-muted-foreground flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                No credit card required
              </p>
              <p className="text-sm text-muted-foreground flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                14-day free trial
              </p>
            </div>
          </div>
          <div className="mx-auto lg:mx-0 relative">
            <div className="absolute inset-0 -m-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 transform rotate-2 animate-pulse"></div>
            <div
              className="absolute inset-0 -m-4 rounded-xl bg-gradient-to-l from-primary/20 to-secondary/20 blur-xl opacity-50 transform -rotate-2 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className={cn(
                "rounded-xl shadow-2xl relative z-10 border border-muted transition-all duration-1000 transform dark:border-muted/20",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
              )}
            >
              <HeroIllustration />
            </div>
            <div
              className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 flex items-center justify-center transform rotate-12 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <span className="font-bold text-lg">New</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const { ref, isInView } = useInView()
  const { ref: featuresRef, isInView: featuresInView } = useInView({ threshold: 0.2 })

  const features = [
    {
      icon: <BarChart2 className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics dashboard. Track performance, identify trends, and make data-driven decisions.",
      illustration: <AnalyticsIllustration />,
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Automation Tools",
      description:
        "Save time and reduce errors with our powerful automation tools. Set up workflows, automate repetitive tasks, and focus on what matters.",
      illustration: <AutomationIllustration />,
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Performance Tracking",
      description:
        "Monitor your team's performance in real-time. Set goals, track progress, and celebrate achievements with our intuitive tracking system.",
      illustration: <PerformanceIllustration />,
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary" />,
      title: "Customizable Reports",
      description:
        "Create beautiful, informative reports with just a few clicks. Customize layouts, choose metrics, and share insights with stakeholders.",
      illustration: <ReportsIllustration />,
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Features</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything You Need in One Place</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our platform offers powerful tools to help you manage your business more efficiently.
            </p>
          </div>
        </div>

        <div ref={featuresRef} className="mx-auto grid max-w-6xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group relative overflow-hidden rounded-lg border bg-background p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1",
                featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                featuresInView ? `delay-[${index * 150}ms]` : "",
              )}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-full bg-primary/10 p-2 transition-all duration-300 group-hover:bg-primary/20">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{feature.description}</p>
              <div className="relative h-40 w-full overflow-hidden rounded-md">{feature.illustration}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { ref, isInView } = useInView()

  const testimonials = [
    {
      quote:
        "StreamLine has completely transformed how we manage our projects. The automation features alone have saved us countless hours. I can't imagine running our business without it now.",
      author: "Sarah Johnson",
      role: "CEO, TechStart",
      avatar: "https://v0.blob.com/aNJXn.png",
    },
    {
      quote:
        "The analytics dashboard provides insights we never had access to before. It's like having a data scientist on the team. We've been able to make much more informed decisions.",
      author: "Michael Chen",
      role: "Marketing Director, GrowthLabs",
      avatar: "https://v0.blob.com/aNJXo.png",
    },
    {
      quote:
        "We've reduced our operational costs by 30% since implementing StreamLine. The ROI has been incredible. The automation tools are game-changing for our workflow.",
      author: "Emily Rodriguez",
      role: "Operations Manager, ScaleUp Inc.",
      avatar: "https://v0.blob.com/aNJXp.png",
    },
    {
      quote:
        "The customer support team is exceptional. They helped us customize the platform to our specific needs and were always available when we had questions.",
      author: "David Wilson",
      role: "CTO, Innovate Solutions",
      avatar: "https://v0.blob.com/aNJXn.png",
    },
    {
      quote:
        "StreamLine's reporting features have made our monthly board meetings so much more productive. We can visualize our progress and identify areas for improvement at a glance.",
      author: "Jennifer Lee",
      role: "CFO, GrowFast Ventures",
      avatar: "https://v0.blob.com/aNJXo.png",
    },
  ]

  return (
    <section id="testimonials" className="py-20 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="testimonial-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" className="stroke-primary/20" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonial-pattern)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Businesses Worldwide</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Don't just take our word for it. See what our customers have to say.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </div>
    </section>
  )
}

function PricingSection() {
  const { ref, isInView } = useInView()
  const { ref: pricingRef, isInView: pricingInView } = useInView({ threshold: 0.1 })

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams and startups.",
      price: "$29",
      popular: false,
      features: ["Up to 5 team members", "Basic analytics", "5GB storage", "Email support"],
      cta: "Get Started",
      illustration: <StarterPlanIllustration />,
    },
    {
      name: "Pro",
      description: "Ideal for growing businesses.",
      price: "$79",
      popular: true,
      features: [
        "Up to 20 team members",
        "Advanced analytics",
        "20GB storage",
        "Priority email support",
        "Custom reporting",
      ],
      cta: "Get Started",
      illustration: <ProPlanIllustration />,
    },
    {
      name: "Enterprise",
      description: "For large organizations.",
      price: "$199",
      popular: false,
      features: [
        "Unlimited team members",
        "Enterprise analytics",
        "Unlimited storage",
        "24/7 phone & email support",
        "Custom integrations",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      illustration: <EnterprisePlanIllustration />,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "flex flex-col items-center justify-center space-y-4 text-center transition-all duration-700 transform",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Simple, Transparent Pricing</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Choose the plan that's right for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </div>
        <div ref={pricingRef} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg border bg-card p-6 shadow-sm relative transition-all duration-500 transform hover:shadow-xl hover:-translate-y-2 group",
                pricingInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                pricingInView ? `delay-[${index * 200}ms]` : "",
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-0 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground animate-pulse">
                  Most Popular
                </div>
              )}
              <div className="flex flex-col gap-4">
                <div className="relative h-40 w-full overflow-hidden rounded-md mb-4">
                  {plan.illustration}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="grid gap-2 py-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full transition-all duration-300 hover:scale-105 rounded-full group">
                  {plan.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaSection() {
  const { ref, isInView } = useInView()

  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div
          ref={ref}
          className={cn(
            "rounded-lg bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 transition-all duration-1000 transform relative overflow-hidden",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-foreground/5 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="mx-auto max-w-3xl space-y-6 text-center relative z-10">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl">
              Join thousands of companies that use StreamLine to improve productivity and drive growth.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button
                size="lg"
                variant="secondary"
                className={cn(
                  "px-8 transition-all duration-500 transform rounded-full group",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isInView ? "delay-[200ms]" : "",
                )}
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className={cn(
                  "bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 transition-all duration-500 transform rounded-full",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isInView ? "delay-[400ms]" : "",
                )}
              >
                Schedule Demo
              </Button>
            </div>
            <p
              className={cn(
                "text-sm transition-all duration-500 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                isInView ? "delay-[600ms]" : "",
              )}
            >
              No credit card required. 14-day free trial.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  const { ref, isInView } = useInView()

  return (
    <footer className="border-t py-12 md:py-16">
      <div
        ref={ref}
        className={cn(
          "container px-4 md:px-6 transition-all duration-1000 transform",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        )}
      >
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <div className="relative w-8 h-8 overflow-hidden rounded-md">
                <Image
                  src="https://v0.blob.com/aNJXh.png"
                  alt="StreamLine Logo"
                  width={32}
                  height={32}
                  className="object-cover dark:brightness-110"
                />
              </div>
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Streamline your workflow, boost productivity, and transform your business with our all-in-one SaaS
              platform.
            </p>
            <div className="mt-4 flex gap-4">
              {[
                { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 transform"
                >
                  {social.icon}
                  <span className="sr-only">{social.label}</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="mt-4 grid gap-2">
              {["Features", "Pricing", "Integrations", "FAQ", "Roadmap"].map((item, i) => (
                <li
                  key={i}
                  className={cn(
                    "transition-all duration-500 transform",
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5",
                    isInView ? `delay-[${i * 100}ms]` : "",
                  )}
                >
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors group flex items-center"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="mt-4 grid gap-2">
              {["About", "Blog", "Careers", "Press", "Partners"].map((item, i) => (
                <li
                  key={i}
                  className={cn(
                    "transition-all duration-500 transform",
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5",
                    isInView ? `delay-[${i * 100 + 500}ms]` : "",
                  )}
                >
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors group flex items-center"
                  >
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <span className="relative">
                Privacy Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <span className="relative">
                Terms of Service
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <span className="relative">
                Cookie Policy
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
