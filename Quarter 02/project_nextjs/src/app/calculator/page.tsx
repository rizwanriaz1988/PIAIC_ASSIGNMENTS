"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

function Calculator() {
  const [firstValue, setfirstValue] = useState<any>("0");
  const [secondValue, setsecondValue] = useState<any>("0");
  const [panelValue, setpanelValue] = useState<any>("0");
  const [smpanel, setsmpanel] = useState<any>("");
  const [operator, setoperator] = useState("");
  const [back, setback] = useState(false);

  console.log("1st=", firstValue);
  console.log("2nd=", secondValue);
  console.log(`operation pressed: , ${operator}`);

  useEffect(() => {
    if (operator) {
      setpanelValue(secondValue);
    } else {
      // setpanelValue(0)
      if (firstValue) {
        setpanelValue(firstValue);
      }
    }
  }, [secondValue, firstValue, back]);

  function number(num: any) {
    console.log(`number pressed: , ${num}`);
    if (operator) {
      setsecondValue((previous: any) => Number((previous += num.toString())));
    } else {
      setfirstValue((previous: any) => Number((previous += num.toString())));
    }
  }

  function backspace() {
    if (operator) {
      setsecondValue((previous: any) => previous.toString().slice(0, -1));
    } else {
      setfirstValue((previous: any) => previous.toString().slice(0, -1));
    }
  }

  function operation(operation: any) {
    // setfirstValue(panelValue);
    // setpanelValue(0);
    setoperator(operation);
    setsmpanel(operation);
  }

  function result() {
    if (operator == "+") {
      const sum = Number(firstValue) + Number(secondValue);
      setpanelValue(sum);
      // setfirstValue(sum);
      setsmpanel("=");
    } else if (operator == "-") {
      setpanelValue(Number(firstValue) - Number(secondValue));
      setsmpanel("=");
    } else if (operator == "*") {
      setpanelValue(Number(firstValue) * Number(secondValue));
      setsmpanel("=");
    } else if (operator == "/") {
      setpanelValue(Number(firstValue) / Number(secondValue));
      setsmpanel("=");
    } else if (operator == "%") {
      setpanelValue(Number(firstValue) *  Number("0.01"));
      setsmpanel("=");
    }
  }

  return (
    <div className="  flex justify-center">
      <div className="bg-white p-0.5 my-1 md:my-4 rounded-md w-11/12 sm:w-5/12 ">
        <div className="flex justify-center bg-slate-900 py-1 rounded-md ">
          <h1 className="text-yellow-400 text-4xl">Calculator</h1>
        </div>
        <div className="px-10 py-5 bg-black my-0.5 rounded-md ">
          {/*====================== Main Div for working ====================*/}
          {/*============================= Start ============================*/}
          <div className="flex flex-col p-4 border border-slate-400">
            <div className="flex">
              <input
                type="text"
                className="flex-grow flex w-[95%] h-14 text-end text-5xl px-0.5 bg-green-950 text-white select-none"
                readOnly
                value={panelValue}
              />
              {/* </div> */}

              {/* <div> */}
              {/* /          <span> */}

              <input
                type="text"
                className="flex-grow flex w-[5%] h-14 text-center text-lg bg-green-950 text-white select-none"
                readOnly
                value={smpanel}
              />
              {/* </span> */}
              {/* </div> */}
            </div>

            <div className="grid grid-cols-4 gap-1 my-1 ">
              <Button
                onClick={() => {
                  setpanelValue("0");
                  setfirstValue("");
                  setsecondValue("");
                  setoperator("");
                  setsmpanel("");
                }}
              >
                AC
              </Button>
              <Button onClick={backspace}>C</Button>
              <Button value={"%"} onClick={(e: any) => operation(e.target.value)}>%</Button>
              <Button
                value={"/"}
                onClick={(e: any) => operation(e.target.value)}
              >
                /
              </Button>
              <Button value={7} onClick={(e: any) => number(e.target.value)}>
                7
              </Button>
              <Button value={8} onClick={(e: any) => number(e.target.value)}>
                8
              </Button>
              <Button value={9} onClick={(e: any) => number(e.target.value)}>
                9
              </Button>
              <Button
                value={"*"}
                onClick={(e: any) => operation(e.target.value)}
              >
                *
              </Button>
              <Button value={4} onClick={(e: any) => number(e.target.value)}>
                4
              </Button>
              <Button value={5} onClick={(e: any) => number(e.target.value)}>
                5
              </Button>
              <Button value={6} onClick={(e: any) => number(e.target.value)}>
                6
              </Button>
              <Button
                value={"-"}
                onClick={(e: any) => operation(e.target.value)}
              >
                -
              </Button>
              <Button value={1} onClick={(e: any) => number(e.target.value)}>
                1
              </Button>
              <Button value={2} onClick={(e: any) => number(e.target.value)}>
                2
              </Button>
              <Button value={3} onClick={(e: any) => number(e.target.value)}>
                3
              </Button>
              <Button
                value={"+"}
                onClick={(e: any) => operation(e.target.value)}
              >
                +
              </Button>
              <Button value={0} onClick={(e: any) => number(e.target.value)}>
                0
              </Button>
              <Button value={"00"} onClick={(e: any) => number(e.target.value)}>
                00
              </Button>
              <Button value={"."} onClick={(e: any) => number(e.target.value)}>
                .
              </Button>
              <Button onClick={result}>=</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
