export default function Button({ children, variant = "primary", ...props }) {
    const base =
      "px-6 py-3 rounded-2xl shadow-md font-semibold transition-opacity hover:opacity-90";
    const variants = {
      primary: "bg-[#009640] text-white",
      danger: "bg-[#E31E24] text-white",
      accent: "bg-[#FFD100] text-[#0056B8] font-bold",
    };
    return (
      <button className={`${base} ${variants[variant]}`} {...props}>
        {children}
      </button>
    );
  }
  