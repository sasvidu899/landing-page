"use client"
import { cn } from "@/lib/utils"

export function LogoAnimation({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("text-primary", className)}
    >
      <rect x="4" y="4" width="32" height="32" rx="8" className="fill-primary/10 dark:fill-primary/20" />
      <path
        d="M12 20H28"
        className="stroke-primary stroke-[3] dark:opacity-90"
        strokeLinecap="round"
        strokeDasharray="16"
        strokeDashoffset="16"
        style={{ animation: "dash 1s ease forwards" }}
      />
      <path
        d="M12 14H24"
        className="stroke-primary stroke-[3] dark:opacity-90"
        strokeLinecap="round"
        strokeDasharray="12"
        strokeDashoffset="12"
        style={{ animation: "dash 1s ease forwards 0.3s" }}
      />
      <path
        d="M12 26H20"
        className="stroke-primary stroke-[3] dark:opacity-90"
        strokeLinecap="round"
        strokeDasharray="8"
        strokeDashoffset="8"
        style={{ animation: "dash 1s ease forwards 0.6s" }}
      />
      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  )
}

export function HeroIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="550"
      height="550"
      viewBox="0 0 550 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      {/* Background */}
      <rect width="550" height="550" rx="16" className="fill-background dark:fill-background/80" />

      {/* Dashboard Frame */}
      <rect
        x="40"
        y="40"
        width="470"
        height="470"
        rx="8"
        className="fill-card dark:fill-card/90 stroke-border"
        strokeWidth="2"
      />

      {/* Header */}
      <rect
        x="40"
        y="40"
        width="470"
        height="60"
        className="fill-muted/50 dark:fill-muted/20 stroke-border"
        strokeWidth="2"
      />

      {/* Sidebar */}
      <rect
        x="40"
        y="100"
        width="100"
        height="410"
        className="fill-muted/30 dark:fill-muted/10 stroke-border"
        strokeWidth="2"
      />

      {/* Main Content Area */}
      <rect
        x="160"
        y="120"
        width="330"
        height="180"
        rx="6"
        className="fill-background dark:fill-background/80 stroke-border"
        strokeWidth="2"
      />

      {/* Chart */}
      <path
        d="M180 260 Q230 200, 280 240 Q330 280, 380 180 Q430 80, 470 120"
        className="stroke-primary stroke-[3] fill-none"
        strokeLinecap="round"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ animation: "dash-long 2s ease-in-out forwards 0.5s" }}
      />

      {/* Data Cards */}
      <rect
        x="160"
        y="320"
        width="150"
        height="100"
        rx="6"
        className="fill-card dark:fill-card/90 stroke-border animate-in fade-in duration-700 delay-300"
        strokeWidth="2"
      />

      <rect
        x="340"
        y="320"
        width="150"
        height="100"
        rx="6"
        className="fill-card dark:fill-card/90 stroke-border animate-in fade-in duration-700 delay-500"
        strokeWidth="2"
      />

      {/* Sidebar Icons */}
      <circle cx="90" cy="140" r="15" className="fill-primary/20 stroke-primary animate-pulse-slow" strokeWidth="2" />

      <circle
        cx="90"
        cy="200"
        r="15"
        className="fill-primary/10 stroke-primary/70"
        strokeWidth="2"
        style={{ animationDelay: "0.3s", animation: "pulse-slow 3s infinite" }}
      />

      <circle
        cx="90"
        cy="260"
        r="15"
        className="fill-primary/10 stroke-primary/70"
        strokeWidth="2"
        style={{ animationDelay: "0.6s", animation: "pulse-slow 3s infinite" }}
      />

      {/* Data Points */}
      <circle cx="180" cy="260" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-700" />
      <circle cx="230" cy="200" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-800" />
      <circle cx="280" cy="240" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-900" />
      <circle cx="330" cy="280" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-1000" />
      <circle cx="380" cy="180" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-1100" />
      <circle cx="430" cy="80" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-1200" />
      <circle cx="470" cy="120" r="5" className="fill-primary animate-in fade-in zoom-in duration-300 delay-1300" />

      {/* Card Content */}
      <rect
        x="175"
        y="340"
        width="120"
        height="10"
        rx="2"
        className="fill-foreground/20 animate-in fade-in duration-700 delay-400"
      />
      <rect
        x="175"
        y="360"
        width="80"
        height="10"
        rx="2"
        className="fill-foreground/15 animate-in fade-in duration-700 delay-500"
      />
      <rect
        x="175"
        y="390"
        width="100"
        height="15"
        rx="2"
        className="fill-primary/70 animate-in fade-in duration-700 delay-600"
      />

      <rect
        x="355"
        y="340"
        width="120"
        height="10"
        rx="2"
        className="fill-foreground/20 animate-in fade-in duration-700 delay-600"
      />
      <rect
        x="355"
        y="360"
        width="80"
        height="10"
        rx="2"
        className="fill-foreground/15 animate-in fade-in duration-700 delay-700"
      />
      <rect
        x="355"
        y="390"
        width="100"
        height="15"
        rx="2"
        className="fill-primary/70 animate-in fade-in duration-700 delay-800"
      />

      {/* Header Content */}
      <rect x="60" y="65" width="80" height="10" rx="2" className="fill-foreground/20" />
      <circle cx="480" cy="70" r="15" className="fill-primary/20 stroke-primary" strokeWidth="2" />

      <style jsx>{`
        @keyframes dash-long {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.7;
            transform: scale(0.95);
          }
        }
      `}</style>
    </svg>
  )
}

export function AnalyticsIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Bar Chart */}
      <rect
        x="40"
        y="140"
        width="30"
        height="0"
        className="fill-primary/80 animate-in"
        style={{ animation: "grow-up 1s ease-out forwards" }}
      />
      <rect
        x="90"
        y="100"
        width="30"
        height="0"
        className="fill-primary/80 animate-in"
        style={{ animation: "grow-up 1s ease-out forwards 0.2s" }}
      />
      <rect
        x="140"
        y="60"
        width="30"
        height="0"
        className="fill-primary/80 animate-in"
        style={{ animation: "grow-up 1s ease-out forwards 0.4s" }}
      />
      <rect
        x="190"
        y="80"
        width="30"
        height="0"
        className="fill-primary/80 animate-in"
        style={{ animation: "grow-up 1s ease-out forwards 0.6s" }}
      />
      <rect
        x="240"
        y="40"
        width="30"
        height="0"
        className="fill-primary/80 animate-in"
        style={{ animation: "grow-up 1s ease-out forwards 0.8s" }}
      />

      {/* X-axis */}
      <line x1="20" y1="160" x2="280" y2="160" className="stroke-foreground/30 stroke-[2]" />

      {/* Y-axis */}
      <line x1="20" y1="160" x2="20" y2="20" className="stroke-foreground/30 stroke-[2]" />

      {/* Data Labels */}
      <text x="55" y="180" className="fill-foreground/70 text-[10px] font-medium" textAnchor="middle">
        Mon
      </text>
      <text x="105" y="180" className="fill-foreground/70 text-[10px] font-medium" textAnchor="middle">
        Tue
      </text>
      <text x="155" y="180" className="fill-foreground/70 text-[10px] font-medium" textAnchor="middle">
        Wed
      </text>
      <text x="205" y="180" className="fill-foreground/70 text-[10px] font-medium" textAnchor="middle">
        Thu
      </text>
      <text x="255" y="180" className="fill-foreground/70 text-[10px] font-medium" textAnchor="middle">
        Fri
      </text>

      <style jsx>{`
        @keyframes grow-up {
          from {
            height: 0;
            y: 160;
          }
          to {
            height: var(--target-height);
            y: calc(160 - var(--target-height));
          }
        }
        rect:nth-child(1) {
          --target-height: 60px;
        }
        rect:nth-child(2) {
          --target-height: 100px;
        }
        rect:nth-child(3) {
          --target-height: 140px;
        }
        rect:nth-child(4) {
          --target-height: 120px;
        }
        rect:nth-child(5) {
          --target-height: 160px;
        }
      `}</style>
    </svg>
  )
}

export function AutomationIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Gear 1 */}
      <g className="animate-spin" style={{ transformOrigin: "80px 100px", animationDuration: "10s" }}>
        <circle cx="80" cy="100" r="40" className="fill-primary/10 stroke-primary/70" strokeWidth="3" />
        <circle cx="80" cy="100" r="15" className="fill-primary/20" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <rect
            key={i}
            x="75"
            y="50"
            width="10"
            height="20"
            rx="2"
            className="fill-primary/70"
            transform={`rotate(${angle}, 80, 100)`}
          />
        ))}
      </g>

      {/* Gear 2 */}
      <g
        className="animate-spin"
        style={{ transformOrigin: "160px 100px", animationDuration: "8s", animationDirection: "reverse" }}
      >
        <circle cx="160" cy="100" r="30" className="fill-primary/10 stroke-primary/70" strokeWidth="3" />
        <circle cx="160" cy="100" r="12" className="fill-primary/20" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <rect
            key={i}
            x="155"
            y="60"
            width="10"
            height="15"
            rx="2"
            className="fill-primary/70"
            transform={`rotate(${angle}, 160, 100)`}
          />
        ))}
      </g>

      {/* Gear 3 */}
      <g className="animate-spin" style={{ transformOrigin: "230px 100px", animationDuration: "12s" }}>
        <circle cx="230" cy="100" r="35" className="fill-primary/10 stroke-primary/70" strokeWidth="3" />
        <circle cx="230" cy="100" r="13" className="fill-primary/20" />
        {[0, 40, 80, 120, 160, 200, 240, 280, 320].map((angle, i) => (
          <rect
            key={i}
            x="225"
            y="55"
            width="10"
            height="18"
            rx="2"
            className="fill-primary/70"
            transform={`rotate(${angle}, 230, 100)`}
          />
        ))}
      </g>

      {/* Connection Lines */}
      <line x1="120" y1="100" x2="130" y2="100" className="stroke-primary stroke-[3] stroke-dasharray-2" />
      <line x1="190" y1="100" x2="195" y2="100" className="stroke-primary stroke-[3] stroke-dasharray-2" />
    </svg>
  )
}

export function PerformanceIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Speedometer */}
      <circle cx="150" cy="100" r="70" className="fill-primary/5 stroke-primary/30" strokeWidth="2" />
      <circle cx="150" cy="100" r="60" className="fill-primary/10 stroke-primary/40" strokeWidth="2" />
      <circle cx="150" cy="100" r="10" className="fill-primary" />

      {/* Ticks */}
      {[...Array(10)].map((_, i) => {
        const angle = -180 + i * 20
        const x1 = 150 + 60 * Math.cos((angle * Math.PI) / 180)
        const y1 = 100 + 60 * Math.sin((angle * Math.PI) / 180)
        const x2 = 150 + 70 * Math.cos((angle * Math.PI) / 180)
        const y2 = 100 + 70 * Math.sin((angle * Math.PI) / 180)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-primary/70 stroke-[2]" />
      })}

      {/* Needle */}
      <line
        x1="150"
        y1="100"
        x2="150"
        y2="40"
        className="stroke-primary stroke-[3] origin-bottom"
        style={{ transformOrigin: "150px 100px", animation: "rotate-needle 3s ease-in-out forwards" }}
      />

      {/* Speed Labels */}
      <text x="90" y="160" className="fill-foreground/70 text-[12px] font-medium">
        0
      </text>
      <text x="205" y="160" className="fill-foreground/70 text-[12px] font-medium">
        100
      </text>
      <text x="150" y="170" className="fill-primary text-[14px] font-bold" textAnchor="middle">
        Performance
      </text>

      <style jsx>{`
        @keyframes rotate-needle {
          0% {
            transform: rotate(-90deg);
          }
          60% {
            transform: rotate(70deg);
          }
          70% {
            transform: rotate(60deg);
          }
          80% {
            transform: rotate(65deg);
          }
          100% {
            transform: rotate(60deg);
          }
        }
      `}</style>
    </svg>
  )
}

export function ReportsIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Document Stack */}
      <rect
        x="60"
        y="60"
        width="180"
        height="120"
        rx="4"
        className="fill-muted stroke-border"
        strokeWidth="2"
        style={{ animation: "slide-in 0.5s ease-out forwards 0.1s", opacity: 0, transform: "translateY(20px)" }}
      />
      <rect
        x="70"
        y="50"
        width="180"
        height="120"
        rx="4"
        className="fill-card stroke-border"
        strokeWidth="2"
        style={{ animation: "slide-in 0.5s ease-out forwards 0.3s", opacity: 0, transform: "translateY(20px)" }}
      />
      <rect
        x="80"
        y="40"
        width="180"
        height="120"
        rx="4"
        className="fill-background stroke-primary/50"
        strokeWidth="2"
        style={{ animation: "slide-in 0.5s ease-out forwards 0.5s", opacity: 0, transform: "translateY(20px)" }}
      />

      {/* Document Content */}
      <rect
        x="100"
        y="60"
        width="140"
        height="10"
        rx="2"
        className="fill-foreground/20"
        style={{ animation: "fade-in 0.5s ease-out forwards 0.7s", opacity: 0 }}
      />
      <rect
        x="100"
        y="80"
        width="100"
        height="10"
        rx="2"
        className="fill-foreground/15"
        style={{ animation: "fade-in 0.5s ease-out forwards 0.8s", opacity: 0 }}
      />

      {/* Pie Chart */}
      <circle
        cx="150"
        cy="120"
        r="30"
        className="fill-none stroke-[30] stroke-muted"
        strokeDasharray="188.5"
        strokeDashoffset="0"
      />
      <circle
        cx="150"
        cy="120"
        r="30"
        className="fill-none stroke-[30] stroke-primary/70"
        strokeDasharray="188.5"
        strokeDashoffset="188.5"
        style={{ animation: "circle-fill 1.5s ease-out forwards 1s" }}
      />
      <circle
        cx="150"
        cy="120"
        r="30"
        className="fill-none stroke-[30] stroke-primary"
        strokeDasharray="188.5"
        strokeDashoffset="141.4"
        style={{ animation: "circle-fill-2 1.5s ease-out forwards 1.2s" }}
      />

      <style jsx>{`
        @keyframes slide-in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }
        @keyframes circle-fill {
          to {
            stroke-dashoffset: 94.25;
          }
        }
        @keyframes circle-fill-2 {
          to {
            stroke-dashoffset: 47.125;
          }
        }
      `}</style>
    </svg>
  )
}

export function StarterPlanIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Rocket */}
      <g style={{ animation: "float 3s ease-in-out infinite" }}>
        <path
          d="M150 50C150 50 130 80 130 120C130 140 150 150 150 150C150 150 170 140 170 120C170 80 150 50 150 50Z"
          className="fill-primary/80 stroke-primary"
          strokeWidth="2"
        />
        <circle cx="150" cy="100" r="10" className="fill-background" />
        <path d="M135 130L125 150M165 130L175 150" className="stroke-primary stroke-[3]" strokeLinecap="round" />
        <path
          d="M140 160H160"
          className="stroke-primary stroke-[3]"
          strokeLinecap="round"
          style={{ animation: "flame 0.5s ease-in-out infinite alternate" }}
        />
      </g>

      {/* Stars */}
      {[
        { x: 80, y: 60, delay: 0 },
        { x: 220, y: 70, delay: 0.3 },
        { x: 100, y: 120, delay: 0.5 },
        { x: 200, y: 130, delay: 0.7 },
        { x: 70, y: 170, delay: 0.2 },
        { x: 230, y: 160, delay: 0.6 },
      ].map((star, i) => (
        <circle
          key={i}
          cx={star.x}
          cy={star.y}
          r="3"
          className="fill-primary"
          style={{ animation: `twinkle 2s ease-in-out infinite ${star.delay}s` }}
        />
      ))}

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes flame {
          from {
            transform: scaleY(0.8) translateY(0);
            opacity: 0.7;
          }
          to {
            transform: scaleY(1.2) translateY(5px);
            opacity: 1;
          }
        }
        @keyframes twinkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(0.7);
          }
        }
      `}</style>
    </svg>
  )
}

export function ProPlanIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Growth Chart */}
      <path
        d="M50 150 L100 120 L150 130 L200 90 L250 60"
        className="stroke-primary stroke-[3] fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="400"
        strokeDashoffset="400"
        style={{ animation: "dash 2s ease-out forwards" }}
      />

      {/* Area under curve */}
      <path
        d="M50 150 L100 120 L150 130 L200 90 L250 60 L250 150 L50 150"
        className="fill-primary/10 stroke-none"
        style={{ animation: "fade-in 2s ease-out forwards" }}
      />

      {/* Data Points */}
      {[
        { x: 50, y: 150, delay: 0.5 },
        { x: 100, y: 120, delay: 0.7 },
        { x: 150, y: 130, delay: 0.9 },
        { x: 200, y: 90, delay: 1.1 },
        { x: 250, y: 60, delay: 1.3 },
      ].map((point, i) => (
        <circle
          key={i}
          cx={point.x}
          cy={point.y}
          r="6"
          className="fill-primary"
          style={{ animation: `pop-in 0.3s ease-out forwards ${point.delay}s`, opacity: 0, transform: "scale(0)" }}
        />
      ))}

      {/* Axis */}
      <line x1="50" y1="150" x2="250" y2="150" className="stroke-foreground/30 stroke-[2]" />
      <line x1="50" y1="150" x2="50" y2="50" className="stroke-foreground/30 stroke-[2]" />

      {/* Growth Arrow */}
      <path
        d="M230 40 L250 60 L270 40"
        className="stroke-primary stroke-[3] fill-none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ animation: "arrow-appear 0.5s ease-out forwards 1.5s", opacity: 0 }}
      />

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes pop-in {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes arrow-appear {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  )
}

export function EnterprisePlanIllustration({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="200"
      viewBox="0 0 300 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <rect width="300" height="200" rx="8" className="fill-background dark:fill-background/80" />

      {/* Buildings */}
      <g style={{ animation: "rise 1.5s ease-out forwards" }}>
        {/* Building 1 */}
        <rect x="60" y="150" width="30" height="0" className="fill-primary/80" />

        {/* Building 2 */}
        <rect x="100" y="150" width="30" height="0" className="fill-primary/90" />

        {/* Building 3 */}
        <rect x="140" y="150" width="30" height="0" className="fill-primary" />

        {/* Building 4 */}
        <rect x="180" y="150" width="30" height="0" className="fill-primary/90" />

        {/* Building 5 */}
        <rect x="220" y="150" width="30" height="0" className="fill-primary/80" />
      </g>

      {/* Windows */}
      <g style={{ animation: "fade-in 0.5s ease-out forwards 1.5s", opacity: 0 }}>
        {/* Building 1 Windows */}
        <rect x="65" y="90" width="8" height="8" rx="1" className="fill-background" />
        <rect x="77" y="90" width="8" height="8" rx="1" className="fill-background" />
        <rect x="65" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="77" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="65" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="77" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="65" y="135" width="8" height="8" rx="1" className="fill-background" />
        <rect x="77" y="135" width="8" height="8" rx="1" className="fill-background" />

        {/* Building 2 Windows */}
        <rect x="105" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="117" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="105" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="117" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="105" y="135" width="8" height="8" rx="1" className="fill-background" />
        <rect x="117" y="135" width="8" height="8" rx="1" className="fill-background" />

        {/* Building 3 Windows */}
        <rect x="145" y="75" width="8" height="8" rx="1" className="fill-background" />
        <rect x="157" y="75" width="8" height="8" rx="1" className="fill-background" />
        <rect x="145" y="90" width="8" height="8" rx="1" className="fill-background" />
        <rect x="157" y="90" width="8" height="8" rx="1" className="fill-background" />
        <rect x="145" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="157" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="145" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="157" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="145" y="135" width="8" height="8" rx="1" className="fill-background" />
        <rect x="157" y="135" width="8" height="8" rx="1" className="fill-background" />

        {/* Building 4 Windows */}
        <rect x="185" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="197" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="185" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="197" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="185" y="135" width="8" height="8" rx="1" className="fill-background" />
        <rect x="197" y="135" width="8" height="8" rx="1" className="fill-background" />

        {/* Building 5 Windows */}
        <rect x="225" y="90" width="8" height="8" rx="1" className="fill-background" />
        <rect x="237" y="90" width="8" height="8" rx="1" className="fill-background" />
        <rect x="225" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="237" y="105" width="8" height="8" rx="1" className="fill-background" />
        <rect x="225" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="237" y="120" width="8" height="8" rx="1" className="fill-background" />
        <rect x="225" y="135" width="8" height="8" rx="1" className="fill-background" />
        <rect x="237" y="135" width="8" height="8" rx="1" className="fill-background" />
      </g>

      {/* Connection Lines */}
      <g style={{ animation: "fade-in 0.5s ease-out forwards 2s", opacity: 0 }}>
        <path
          d="M75 70 C120 30, 180 30, 225 70"
          className="stroke-primary stroke-[2] fill-none"
          strokeDasharray="200"
          strokeDashoffset="200"
          style={{ animation: "dash 1.5s ease-out forwards 2s" }}
        />
        <circle cx="75" cy="70" r="5" className="fill-primary" />
        <circle cx="225" cy="70" r="5" className="fill-primary" />
        <circle cx="150" cy="40" r="5" className="fill-primary" />
      </g>

      <style jsx>{`
        @keyframes rise {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(0);
          }
        }
        rect:nth-child(1) {
          animation: grow-building 1s ease-out forwards;
          height: 0;
        }
        rect:nth-child(2) {
          animation: grow-building 1s ease-out 0.2s forwards;
          height: 0;
        }
        rect:nth-child(3) {
          animation: grow-building 1s ease-out 0.4s forwards;
          height: 0;
        }
        rect:nth-child(4) {
          animation: grow-building 1s ease-out 0.6s forwards;
          height: 0;
        }
        rect:nth-child(5) {
          animation: grow-building 1s ease-out 0.8s forwards;
          height: 0;
        }
        @keyframes grow-building {
          to {
            height: var(--target-height);
            y: calc(150px - var(--target-height));
          }
        }
        rect:nth-child(1) {
          --target-height: 70px;
        }
        rect:nth-child(2) {
          --target-height: 50px;
        }
        rect:nth-child(3) {
          --target-height: 90px;
        }
        rect:nth-child(4) {
          --target-height: 50px;
        }
        rect:nth-child(5) {
          --target-height: 70px;
        }
        @keyframes fade-in {
          to {
            opacity: 1;
          }
        }
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </svg>
  )
}

export function WavyBackground({ className }: { className?: string }) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden -z-10", className)}>
      <svg className="absolute w-full h-full" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          className="fill-primary/5 dark:fill-primary/10 animate-wave"
          style={{ animationDuration: "15s" }}
        />
        <path
          d="M0,352L48,346.7C96,341,192,331,288,309.3C384,288,480,256,576,240C672,224,768,224,864,213.3C960,203,1056,181,1152,192C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          className="fill-primary/5 dark:fill-primary/10 animate-wave"
          style={{ animationDuration: "20s", animationDelay: "1s" }}
        />
        <path
          d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,165.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          className="fill-primary/5 dark:fill-primary/10 animate-wave"
          style={{ animationDuration: "25s", animationDelay: "0.5s" }}
        />
      </svg>
    </div>
  )
}
