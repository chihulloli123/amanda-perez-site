type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="rounded-lg bg-[#6F408A] px-6 py-3 font-semibold text-white transition hover:bg-[#5d3575]">
      {children}
    </button>
  );
}