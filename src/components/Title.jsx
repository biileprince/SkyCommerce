const Title = ({ text1, text2, className }) => {
  return (
    <div className={`inline-flex gap-2 items-center ${className}`}>
      <p className="text-gray-500">
        {text1} <span className="text-sky-600 font-semibold">{text2}</span>
      </p>
      <span className="w-12 h-[2px] bg-sky-500" />
    </div>
  );
};

export default Title;
