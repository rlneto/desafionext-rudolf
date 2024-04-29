import Image from "next/image";
import { Montserrat, Press_Start_2P } from "next/font/google";

const mont = Montserrat({ subsets: ["latin"]});
const press = Press_Start_2P({ weight: ["400"], subsets: ["latin"] });

export default function Blog() {
  return(
    <div>
      Blog
    </div>
  )
};
