"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdDoneOutline } from "react-icons/md"
import { FiEdit } from "react-icons/fi";
import { ImUndo2 } from "react-icons/im"
import Todo from "../page";
import Newtask from "./newtask";
import fastApi_URL from "../constants";
import Low from "../loading";
import Loading2 from "./loading2";
interface Todo {
  id: number;
  title: string;
  description: string;
  status: boolean;
}

interface todolist_type {
  todoList: string;
}
let data: any;




const TodoList = (props: todolist_type) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [btnState, setbtnState] = useState<boolean>(false);
  const [btnId, setbtnId] = useState<number>();
  const [editData, seteditData] = useState<Todo>({
    title: "",
    description: "",
    status: false,
    id: 0,
  });
  const [formVisible, setFormVisible] = useState<boolean>(false);
  const [btnSave, setBtnSave] = useState(true);
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);

  const descriptionRef = useRef<any>([null]);

  const [overflowStatus, setOverflowStatus] = useState<{
    [key: number]: boolean;
  }>({});

  const [moreButtons, setMoreButtons] = useState<{ [key: number]: boolean }>(
    {}
  );

  const [isLoading, setIsLoading] = useState(true); // Initialize loading state

// const fastApi_URL = "https://json-server-l2cp.onrender.com/todos";

  const fetchData = async () => {
    const api_url = fastApi_URL;
    console.log("---------------",api_url);
    try {
      const response = await fetch(api_url); // Fetch data from the API route
      console.log("response", response);
      data = await response.json();
      console.log('coming data' , data)
      setTodos(data);
    } catch (error) {
      console.error("Error fetching todos 1:", error);
    } finally {
      setIsLoading(false); // Set loading state to false when data is fetched
    }
  };

  useEffect(() => {
    if (btnSave) {
      fetchData();
      console.log("Date is fetched");
      setBtnSave(false);
    }
  }, [btnSave]);

  const todostatus = async (todoId: number, markAsComplete: boolean) => {
    console.log("todostatus",markAsComplete);
    const updatedTodos = todos.map((todo) =>
      // todo.id === todoId ? { ...todo, completed: markAsComplete } : todo
      todo.id === todoId ? { ...todo, status: markAsComplete } : todo
    );

    setTodos(updatedTodos);
    try {
      const api_url = `${fastApi_URL}${todoId}`;
      await fetch(api_url, {
        method: "PATCH", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: markAsComplete }),
      });
    } catch (error) {
      console.error("Error updating todo status 1:", error);
    }
  };
  //delete task
  const deleteTask = async (todoId: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    try {
      const api_url = `${fastApi_URL}${todoId}`;
      await fetch(api_url, {
        method: "DELETE", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Error updating todo status 2:", error);
    }
  };
  const editTask = async (todoId: number) => {
    let forEditing: any;

    try {
      const api_url = `${fastApi_URL}${todoId}`;
      const response = await fetch(api_url);
      forEditing = await response.json();
    } catch (error) {
      console.error("Error updating todo status 3:", error);
    }
    // return forEditing
    console.log("forEditing:", forEditing);
    setbtnState(true);
    seteditData(forEditing);
    setbtnId(todoId);
    setFormVisible(true);
  };

  function activeSeemore(todoId: number) {
    setMoreButtons((prevButtons) => ({
      ...prevButtons,
      [todoId]: !prevButtons[todoId],
    }));
  }

  useEffect(() => {
    todos.map((todo) => {
      const descriptionElement = descriptionRef.current[todo.id];
      console.log(
        "🚀 ~ file: status.tsx:146 ~ todos.map ~ descriptionElement:",
        descriptionElement
      );
      if (descriptionElement) {
        const overflowed =
          descriptionElement.scrollHeight > descriptionElement.clientHeight;
        setIsOverflowed(overflowed);
        setOverflowStatus((prevStatus) => ({
          ...prevStatus,
          [todo.id]: overflowed,
        }));
        console.log(
          "🚀 ~ file: status.tsx:156 ~ todos.map ~ overflowed:",
          overflowed
        );
        console.log("scroll", descriptionElement.scrollHeight);
        console.log("client", descriptionElement.clientHeight);
      } else {
        console.log("Element not found");
      }
    });
  }, [todos]);
// ========================== return ====================== return ==================== return ===========
// =================== return ====================== return ==================== return ==================
  return (
    <div>
    {isLoading ? (
      <Loading2 />
    ) : (
      <div>
        {Array.isArray(todos) &&
        props.todoList === "pending" ? (
          todos.length > 0 ? (
            todos.map(
              (todo) =>
                !todo.status && (
                  <div key={todo.id} className="py-2">
                    {/* ======================================show of edit inline */}
                    {btnState && btnId === todo.id && formVisible ? (
                      <Newtask
                        btnS={() => setBtnSave(true)}
                        btnState={btnState}
                        editData={editData}
                        onCancel={() => {
                          setFormVisible(false);
                        }}
                      />
                    ) : (
                      //use effect for showing see more button
                                              // =======================================================================================
                        <div className="bg-slate-800 rounded-lg mx-2">
                          <div className="p-1 ">
                            <h3 className="break-words bg-slate-950 rounded-md px-5 py-1 text-2xl border-slate-500 border">{todo.title}</h3>
                            <p
                              ref={(el) => (descriptionRef.current[todo.id] = el!)}
                              className={`break-words ${
                                moreButtons[todo.id] ? "" : "line-clamp-2"
                              }  rounded-md px-5 my-1`}
                            >
                              {todo.description}
                            </p>
                            {overflowStatus[todo.id] && (
                              <div className=" flex justify-end">
                                <button
                                  className="text-xs mx-2  text-blue-400 hover:text-blue-500 "
                                  onClick={() => activeSeemore(todo.id)}
                                >
                                  {moreButtons[todo.id] ? "see less" : "see more"}
                                </button>
                              </div>
                            )}
                          </div>

                          <div className="flex  justify-end mx-2">
                            <div className="flex items-center ml-5  py-1">
                              <button onClick={() => deleteTask(todo.id)} title="Click to delete">
                                <RiDeleteBinLine className="h-5 w-5  text-red-500 hover:text-red-600 "   />
                              </button>
                              <button onClick={() => editTask(todo.id)} title="Click to edit">
                                <FiEdit className="h-5 w-5 mx-2  text-yellow-500 hover:text-yellow-600" />
                              </button>
                            </div>
                            <button
                              onClick={() => todostatus(todo.id, true)}
                              title="Click to complete"
                            >
                              <MdDoneOutline className="h-5 w-5 text-green-500 hover:text-green-700"/>
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  )
              )
            ) : (
              <div className="text-lg text-red-500 pl-2">No Tasks Found</div>
            )
          ) : (
            Array.isArray(todos) &&
            props.todoList === "completed" ? (
              todos.length > 0 ? (
                todos.map(
                  (todo) =>
                    todo.status && (
                      <div key={todo.id} className="py-2">
                        {/* ======================================show of edit inline */}
                        {btnState && btnId === todo.id && formVisible ? (
                          <Newtask
                            btnS={() => setBtnSave(true)}
                            btnState={btnState}
                            editData={editData}
                            onCancel={() => {
                              setFormVisible(false);
                            }}
                          />
                        ) : (
                          <div className="bg-slate-800 rounded-lg mx-2">
                            <div className="p-1 ">
                              <h3 className="break-words bg-slate-950 rounded-md px-5 py-1 text-2xl border-slate-500 border">{todo.title}</h3>
                              <p
                                ref={(el) => (descriptionRef.current[todo.id] = el!)}
                                className={`break-words ${
                                  moreButtons[todo.id] ? "" : "line-clamp-2"
                                }  rounded-md px-5 my-1`}
                              >
                                {todo.description}
                              </p>
                              {overflowStatus[todo.id] && (
                                <div className=" flex justify-end">
                                  <button
                                    className="text-xs mx-2  text-blue-400 hover:text-blue-500 "
                                    onClick={() => activeSeemore(todo.id)}
                                  >
                                    {moreButtons[todo.id] ? "see less" : "see more"}
                                  </button>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center justify-end gap-2 mx-2 ">
                              <div className="flex items-center gap-2 py-1">
                                <button onClick={() => deleteTask(todo.id)} title="Click to delete">
                                  <RiDeleteBinLine className="h-5 w-5  text-red-500 hover:text-red-600" />
                                </button>
                                <button onClick={() => editTask(todo.id)} title="Click to edit">
                                  <FiEdit className="h-5 w-5   text-yellow-500 hover:text-yellow-600" />
                                </button>
                              </div>
                              <button
                                onClick={() => todostatus(todo.id, false)} title="Click to undo"
                              >
                                <ImUndo2 className="h-5 w-5   text-red-500 hover:text-red-600"/>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )
                )
              ) : (
                <div className="text-lg text-red-500 pl-2">No Tasks Found</div>
              )
            ) : null
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
