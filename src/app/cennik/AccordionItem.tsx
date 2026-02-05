import Image from "next/image";
import { PricingItem } from "../types/pricing";

interface Props {
  title: string;
  content: PricingItem[];
  isExpended: boolean;
  onToggle: () => void;
}

const AccordionItem = ({
  title,
  content,
  isExpended: isExpanded,
  onToggle,
}: Props) => {
  return (
    <>
      <div
        className={`bg-white rounded-full overflow-hidden  border border-primary/60 transition-all duration-normal hover:bg-primary/20 
         `}
      >
        <div
          className="flex justify-between items-center p-3 cursor-pointer"
          onClick={onToggle}
        >
          <div className="text-l px-3 ">{title}</div>
          <div className="flex items-center  select-none">
            <Image
              src={`${isExpanded ? "/icons/minus.png" : "/icons/add.png"}`}
              alt="Rozwiń"
              width={20}
              height={20}
              className={`transition-all duration-normal ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`  md:px-4 overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-1000" : "max-h-0 "
        }`}
      >
        <table className="w-full p-2 my-2 ">
          <thead>
            <tr className="bg-primary/30">
              <th className="text-start p-1.5" scope="col">
                Nazwa
              </th>
              <th className="p-1.5" scope="col">
                Cena
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((el) => (
              <tr
                key={el.nazwa}
                className="odd:bg-white odd:border odd:border-secondary-L even:bg-secondary-L "
              >
                <td className="p-1.5">{el.nazwa}</td>
                <td className="text-center text-nowrap p-1.5">{el.cena}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AccordionItem;
