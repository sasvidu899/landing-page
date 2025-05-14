"use client"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar?: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  // Reset animation when active index changes
  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = "0%"
      progressRef.current.style.transition = "none"
      // Force reflow
      void progressRef.current.offsetWidth
      progressRef.current.style.transition = "width 5000ms linear"
      progressRef.current.style.width = "100%"
    }
  }, [activeIndex])

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000) // Change testimonial every 5 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [testimonials.length, isPaused])

  const goToPrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <div
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="min-w-full px-4 md:px-8"
            aria-roledescription="slide"
            aria-label={`Testimonial ${index + 1} of ${testimonials.length}`}
            aria-hidden={activeIndex !== index}
          >
            <div
              className={cn(
                "mx-auto max-w-2xl rounded-xl border bg-card p-6 md:p-8 shadow-sm transition-all duration-700",
                activeIndex === index ? "scale-100 opacity-100" : "scale-95 opacity-50",
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
                      className={cn(
                        "h-5 w-5 text-yellow-500 transition-all",
                        activeIndex === index ? "animate-in zoom-in-50 fade-in" : "",
                      )}
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </div>
                <blockquote
                  className={cn(
                    "text-lg md:text-xl italic transition-all duration-700",
                    activeIndex === index ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
                  )}
                >
                  "{testimonial.quote}"
                </blockquote>
                <div
                  className={cn(
                    "flex items-center gap-4 transition-all duration-700",
                    activeIndex === index ? "translate-y-0 opacity-100 delay-200" : "translate-y-4 opacity-0",
                  )}
                >
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <button
          className="rounded-full bg-background/80 backdrop-blur p-2 shadow-md hover:bg-background transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={goToPrevious}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          className="rounded-full bg-background/80 backdrop-blur p-2 shadow-md hover:bg-background transition-all duration-200 pointer-events-auto focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={goToNext}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary",
              activeIndex === index ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50",
            )}
            onClick={() => goToSlide(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            aria-current={activeIndex === index}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-2xl mx-auto mt-4 bg-muted h-1 rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="bg-primary h-full transition-width duration-[5000ms] linear"
          style={{ width: isPaused ? "0%" : "100%" }}
        />
      </div>
    </div>
  )
}
