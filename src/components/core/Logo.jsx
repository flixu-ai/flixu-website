export default function Logo({ className = "", light = false }) {
    const colorClass = light ? "text-white" : "text-stone-900";
    const accentClass = "text-orange-700 text-base"; // Smaller text

    return (
        <a
            href="/"
            className={`font-serif text-2xl tracking-tight flex items-baseline gap-0.5 group ${colorClass} ${className}`} // Reduced gap
            aria-label="Flixu Home"
        >
            <span className="font-bold">Flixu</span>
            <span className={accentClass}>文</span>
        </a>
    );
}
