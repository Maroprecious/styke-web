import { poppins } from "../../public/fonts";

type props = {
  title: string;
  color?: string;
};
export const Button = ({ title, color = "#003E9A", ...otherProps }: props) => {
  return (
    <div className={`${poppins.className} font-medium flex justify-center items-center text-white text-[17px] px-6 py-4 rounded-[.7rem]`} style={{backgroundColor: color}} {...otherProps}>
      {title}
    </div>
  );
};
