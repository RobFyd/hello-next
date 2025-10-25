import Image from "next/image";

import summersale from "/public/summersale.jpg";

export default function Photo() {
  return <Image src={summersale} alt="Summer Sale" width={800} height={400} />;
}
