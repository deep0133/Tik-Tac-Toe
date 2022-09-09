import React, { useState, useEffect } from "react";
import Oicon from "./Oicon";
import Xicon from "./Xicon";

export default function PlayBox({
  xWin,
  oWin,
  turn,
  tie,
  matrix,
  handleChange,
  resetMatrix,
}) {
  return (
    <>
      <div className="body bg-[#192a32] h-screen w-full border-2 border-white flex justify-center items-center text-white">
        <div className="relative text-xs p-2 w-72 grid grid-cols-3 gap-3 md:gap-2">
          <div className="absolute -top-24 w-full text-center font-mono font-extrabold text-3xl ">
            TIC TAC TOE
          </div>

          <div className="box col-4 flex items-center h-8 rounded-md space-x-1">
            <Xicon />
            <Oicon />
          </div>
          <div className="box col-4 flex justify-center items-center h-8 bg-[#1f3540] rounded-md space-x-1">
            <div className="icon">{turn === "X" ? <Xicon /> : <Oicon />}</div>
            <span
              className={`turn ${
                turn === "O" ? "text-[#f1b236]" : "text-[#32bdb6]"
              } font-bold`}
            >
              TURN
            </span>
          </div>
          <div className="box col-4 flex justify-end items-center">
            <div
              className="icon bg-[#32bdb6] text-black font-bold flex justify-center items-center h-8 w-fit p-1 rounded-md px-2"
              onClick={resetMatrix}
            >
              <abbr title="Clear all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.4"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
              </abbr>
            </div>
          </div>

          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(1 - 1);
            }}
          >
            {matrix[0] ? (
              matrix[0] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(2 - 1);
            }}
          >
            {matrix[1] ? (
              matrix[1] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(3 - 1);
            }}
          >
            {matrix[2] ? (
              matrix[2] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(4 - 1);
            }}
          >
            {matrix[3] ? (
              matrix[3] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(5 - 1);
            }}
          >
            {matrix[4] ? (
              matrix[4] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(6 - 1);
            }}
          >
            {matrix[5] ? (
              matrix[5] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(7 - 1);
            }}
          >
            {matrix[6] ? (
              matrix[6] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(8 - 1);
            }}
          >
            {matrix[7] ? (
              matrix[7] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>
          <div
            className="box col-4 flex justify-center items-center h-16 bg-[#1f3540] rounded-md drop-shadow-2xl"
            onClick={() => {
              handleChange(9 - 1);
            }}
          >
            {matrix[8] ? (
              matrix[8] == "X" ? (
                <Xicon h="h-1" w="w-8" />
              ) : (
                <Oicon h="h-8" w="w-8" />
              )
            ) : (
              ""
            )}
          </div>

          <div className="box col-4 text-black flex flex-col justify-center items-center text-xs h-10 bg-[#477471] rounded-md ">
            <span className="flex text-center h-[-webkit-fill-available] mt-2 space-x-1">
              {<Xicon />} <strong className="mt-4">(WIN)</strong>
            </span>

            <span className="mb-[25px]">
              <strong> {xWin} </strong>
            </span>
          </div>
          <div className="box col-4 text-black flex flex-col justify-center items-center h-10 bg-[#32bdb6] text-xs rounded-md ">
            <span className="font-bold">TIES</span>{" "}
            <strong>
              <span>{tie}</span>
            </strong>
          </div>
          <div className="box col-4 text-black flex flex-col justify-center items-center h-10 bg-[#957c4a] text-xs rounded-md ">
            <span className="flex space-x-1">
              {<Oicon />} <strong>(WIN)</strong>
            </span>{" "}
            <strong>
              {" "}
              <span> {oWin} </span>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
}
