const PARAM_TO_WORD_WITH_EMOJI = {
  men: "Men💪🏼",
  women: "Women👄",
  kids: "Kids🪁",
};

export default function DynamicRoute({ params }) {
  return (
    <h2>Dynamic Route page for: {PARAM_TO_WORD_WITH_EMOJI[params.gender]}.</h2>
  );
}
