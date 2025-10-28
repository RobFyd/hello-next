import Image from "next/image";

export default function Photo() {
  return (
    <Image
      src="/summersale.jpg" // plik leży w /public
      alt="Summer Sale"
      width={800}
      height={400}
      priority
    />
  );
}
