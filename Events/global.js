import { ROOT_DIV } from "../Helper/constants.js";
import { globalState } from "../index.js";

function whitePawnClick() {
  console.log("white pawn clicked");
}
function GlobalEvent() {
  ROOT_DIV.addEventListener("click", function (event) {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
      const flatArray = globalState.flat();
      const square = flatArray.find((el) => el.id == clickId);
      if (square.piece.piece_name == "WHITE_PAWN") {
        whitePawnClick();
      }
      //   console.log(
      //     `Clicked on ${clickId},piece name is ` + square.piece.piece_name
      //   );
    }
  });
}

export { GlobalEvent };
