import React from "react";
import Xicon from "./Xicon";
import Oicon from "./Oicon";

export default function Result({ result, resetMatrix }) {
  return (
    <div className="h-screen w-full font-mono absolute top-0 left-0 flex justify-center items-center bg-transparent ">
      <div
        className={`result ${
          result.winner === "none"
            ? "text-red-400"
            : result.winner === "X"
            ? "text-[#32bdb6]"
            : "text-[#f1b236]"
        } backdrop-blur-md bg-[#273d47] w-full flex flex-col justify-center items-center py-5`}
      >
        <span className="text-sm">YOU WON?</span>
        <div className="data text-2xl font-extrabold flex items-center space-x-2">
          <span className="winner-icon">
            {" "}
            {result.winner === "none" ? (
              "!"
            ) : result.winner === "X" ? (
              <Xicon h="h-1" w="w-6" />
            ) : (
              <Oicon h="h-6" w="w-6" />
            )}
          </span>
          <p>{result.winner === "none" ? "MATCH DRAW" : "TAKES THE ROUND"}</p>
        </div>
        <div className="btn text-black mt-2">
          <button
            className={`${
              result.winner === "none"
                ? "bg-red-400"
                : result.winner === "O"
                ? "bg-[#32bdb6]"
                : "bg-[#f1b236]"
            } px-4 py-1 text-center rounded-md font-extrabold`}
            onClick={resetMatrix}
          >
            {" "}
            <strong>TRY AGAIN</strong>{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
