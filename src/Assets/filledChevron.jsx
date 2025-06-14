export default function RotatingChevron() {
  return (
    <div className="group inline-flex items-center cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-4.5 h-6 fill-[#5f6368] transition-transform duration-300 group-hover:rotate-180"
        viewBox="0 0 24 24"
      >
        <path d="M7 10l5 5 5-5H7z" />
      </svg>
    </div>
  );
}
