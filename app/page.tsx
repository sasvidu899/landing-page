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
} from "lucide-react"
import { useState, useEffect } from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

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
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="StreamLine Logo"
            width={32}
            height={32}
            className="rounded dark:invert"
          />
          <span className="text-xl font-bold">StreamLine</span>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:text-primary transition-colors">
            Blog
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="#" className="hidden md:block text-sm font-medium hover:underline transition-colors">
            Sign In
          </Link>
          <Button size="sm" className="hidden md:flex transition-transform hover:scale-105 rounded-full">
            Get Started
            <ChevronRight className="ml-1 h-4 w-4" />
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
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="rounded-full">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open mobile menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-background p-6 shadow-lg animate-in slide-in-from-right duration-300 border-l">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="StreamLine Logo"
                  width={32}
                  height={32}
                  className="rounded dark:invert"
                />
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <Button variant="ghost" size="icon" onClick={closeMenu} className="rounded-full">
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
                  className="flex items-center py-2 text-lg font-medium border-b border-border/40 hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  {item.label}
                  <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                </Link>
              ))}
              <Link
                href="#"
                className="flex items-center py-2 text-lg font-medium border-b border-border/40 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Sign In
                <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
              </Link>
            </nav>

            <div className="mt-8 space-y-4">
              <Button className="w-full rounded-full transition-transform hover:scale-105">
                Get Started
                <ChevronRight className="ml-1 h-4 w-4" />
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
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-0 left-0 w-32 h-32 border border-primary/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-primary/10 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-primary/10 rounded-full"></div>
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
            <div className="inline-flex items-center space-x-2 rounded-full bg-muted px-3 py-1 text-sm font-medium mb-4 w-fit">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
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
                className="px-8 transition-transform hover:scale-105 shadow-lg shadow-primary/20 rounded-full"
              >
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="px-8 transition-transform hover:scale-105 rounded-full">
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
            <div className="absolute inset-0 -m-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 transform rotate-2"></div>
            <div className="absolute inset-0 -m-4 rounded-xl bg-gradient-to-l from-primary/20 to-secondary/20 blur-xl opacity-50 transform -rotate-2"></div>
            <Image
              src="/placeholder.svg?height=550&width=550"
              alt="Dashboard Preview"
              width={550}
              height={550}
              className={cn(
                "rounded-xl object-cover shadow-2xl relative z-10 border border-muted transition-all duration-1000 transform dark:border-muted/20",
                isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
              )}
              priority
            />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-primary/10 backdrop-blur-md border border-primary/20 flex items-center justify-center transform rotate-12">
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
        <div ref={featuresRef} className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
          <div className="grid gap-6">
            <div
              className={cn(
                "grid gap-1 transition-all duration-700 transform",
                featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                featuresInView ? "delay-[0ms]" : "",
              )}
            >
              <div className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Advanced Analytics</h3>
              </div>
              <p className="text-muted-foreground">
                Gain valuable insights with our comprehensive analytics dashboard. Track performance, identify trends,
                and make data-driven decisions.
              </p>
            </div>
            <div
              className={cn(
                "grid gap-1 transition-all duration-700 transform",
                featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                featuresInView ? "delay-[200ms]" : "",
              )}
            >
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Automation Tools</h3>
              </div>
              <p className="text-muted-foreground">
                Save time and reduce errors with our powerful automation tools. Set up workflows, automate repetitive
                tasks, and focus on what matters.
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div
              className={cn(
                "grid gap-1 transition-all duration-700 transform",
                featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                featuresInView ? "delay-[400ms]" : "",
              )}
            >
              <div className="flex items-center gap-2">
                <LineChart className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Performance Tracking</h3>
              </div>
              <p className="text-muted-foreground">
                Monitor your team's performance in real-time. Set goals, track progress, and celebrate achievements with
                our intuitive tracking system.
              </p>
            </div>
            <div
              className={cn(
                "grid gap-1 transition-all duration-700 transform",
                featuresInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                featuresInView ? "delay-[600ms]" : "",
              )}
            >
              <div className="flex items-center gap-2">
                <PieChart className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Customizable Reports</h3>
              </div>
              <p className="text-muted-foreground">
                Create beautiful, informative reports with just a few clicks. Customize layouts, choose metrics, and
                share insights with stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const { ref, isInView } = useInView()
  const { ref: testimonialsRef, isInView: testimonialsInView } = useInView({ threshold: 0.1 })

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
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
        <div ref={testimonialsRef} className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          {[
            {
              quote:
                "StreamLine has completely transformed how we manage our projects. The automation features alone have saved us countless hours.",
              author: "Sarah Johnson",
              role: "CEO, TechStart",
            },
            {
              quote:
                "The analytics dashboard provides insights we never had access to before. It's like having a data scientist on the team.",
              author: "Michael Chen",
              role: "Marketing Director, GrowthLabs",
            },
            {
              quote:
                "We've reduced our operational costs by 30% since implementing StreamLine. The ROI has been incredible.",
              author: "Emily Rodriguez",
              role: "Operations Manager, ScaleUp Inc.",
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className={cn(
                "rounded-lg border bg-card p-6 shadow-sm transition-all duration-700 transform hover:shadow-md hover:-translate-y-1",
                testimonialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                testimonialsInView ? `delay-[${index * 200}ms]` : "",
              )}
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg">"{testimonial.quote}"</blockquote>
                <div className="flex items-center gap-4">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
                "rounded-lg border bg-card p-6 shadow-sm relative transition-all duration-700 transform hover:shadow-lg hover:-translate-y-1",
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
                <h3 className="text-xl font-bold">{plan.name}</h3>
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
                <Button className="w-full transition-transform hover:scale-105 rounded-full">{plan.cta}</Button>
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
            "rounded-lg bg-primary text-primary-foreground p-8 md:p-12 lg:p-16 transition-all duration-1000 transform",
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95",
          )}
        >
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Ready to Transform Your Business?</h2>
            <p className="text-lg md:text-xl">
              Join thousands of companies that use StreamLine to improve productivity and drive growth.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button
                size="lg"
                variant="secondary"
                className={cn(
                  "px-8 transition-all duration-500 transform rounded-full",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                  isInView ? "delay-[200ms]" : "",
                )}
              >
                Start Free Trial
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
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="StreamLine Logo"
                width={32}
                height={32}
                className="rounded dark:invert"
              />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <p className="mt-2 text-muted-foreground">
              Streamline your workflow, boost productivity, and transform your business with our all-in-one SaaS
              platform.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors hover:scale-110 transform duration-200"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
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
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Resources</h3>
            <ul className="mt-4 grid gap-2">
              {["Documentation", "Support", "API", "Community", "Contact"].map((item, i) => (
                <li
                  key={i}
                  className={cn(
                    "transition-all duration-500 transform",
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5",
                    isInView ? `delay-[${i * 100 + 1000}ms]` : "",
                  )}
                >
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
