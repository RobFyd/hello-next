const PARAM_TO_WORD_WITH_EMOJI = {
  men: "Men💪🏼",
  women: "Women👄",
  kids: "Kids🪁",
  unisex: "Unisex👕",
  animals: "Animals🐶",
  others: "Others❓",
};

export default function DynamicRoute({ params }) {
  return (
    <h2>Dynamic Route page for: {PARAM_TO_WORD_WITH_EMOJI[params.gender]}.</h2>
  );
}

export async function generateStaticParams() {
  return [
    { gender: "men" },
    { gender: "women" },
    { gender: "kids" },
    { gender: "unisex" },
    { gender: "animals" },
    { gender: "others" },
  ];
}
