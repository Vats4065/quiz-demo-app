import React, { useEffect, useState } from "react";

function Quiz() {
  const questionOption = {
    questionOption: "",
    selected: false,
  };

  const defaultVal = {
    question: "",
    btn: "single",
    ansOptions: [questionOption],
    len: true,
  };
  const [val, setVal] = useState({
    question: "",
    btn: "single",
    ansOptions: [questionOption],
    len: true,
  });

  const [que, setQue] = useState([]);
  const [mainQue, setMainQue] = useState([]);
  console.log(mainQue, "mainqueuue");

  const [radio, setRadio] = useState(defaultVal.btn);

  console.log(radio);

  useEffect(() => {
    setQue([...que, Number(...que)]);
    setMainQue([...mainQue, defaultVal]);
    console.log("ased", que);
    console.log("ghudfghudfsghusdfghu", mainQue);
  }, []);

  useEffect(() => {
    console.log({ mainQue });
  }, [mainQue]);

  const handleMain = (e) => {
    e.preventDefault();
    setMainQue([...mainQue, defaultVal]);
    console.log("bgytfth", mainQue);
  };

  const handleclick = (e, index) => {
    e.preventDefault();

    console.log("1111", mainQue[mainQue.length - 1]);
    console.log(mainQue);

    const newQueue = [...mainQue]?.map((que, i) => {
      if (index === i) {
        if (mainQue[index].ansOptions.length === 5) {
          return {
            ...que,
            len: false,
          };
        } else {
          return {
            ...que,
            ansOptions: [...que.ansOptions, questionOption],
          };
        }
      }
      return que;
    });
    setMainQue([...newQueue]);
    console.log(newQueue);
  };

  const handleChangeRadioButton = (e, index) => {
    if (e.target.value == "multiple") {
      setRadio("multiple");
    } else {
      setRadio("single");
    }
    const newQueue = mainQue?.map((que, i) => {
      console.log(i === index, "indexxx");
      if (i === index) {
        que.btn = e.target.value;
      }
      console.log(que, "queeeee");
      return que;
    });
    setMainQue(newQueue);
  };

  const handleDelete = (index) => {
    const temp = [...mainQue];
    temp.splice(index, 1);
    setMainQue(temp);
  };

  const handleChildDelete = (mainInd, ansInd) => {
    const temp = [...mainQue];
    const del = temp[mainInd].ansOptions;

    const onChangeDtaa = [...mainQue]?.map((item, index) => {
      if (index === mainInd) {
        return {
          ...item,
          ansOptions: del.filter((item, index) => index !== ansInd),
        };
      }
      return item;
    });
    setMainQue(onChangeDtaa);
  };

  const handleData = (e, index) => {
    const newQueue = [...mainQue]?.map((que, i) => {
      if (index === i) {
        return {
          ...que,
          question: e.target.value,
        };
      }
      return que;
    });
    setMainQue(newQueue);
  };

  const handleAnswerOption = (e, mainInd, ansInd) => {
    const onChangeDtaa = [...mainQue]?.map((item, index) => {
      if (index === mainInd) {
        return {
          ...item,
          ansOptions: [...item?.ansOptions]?.map((option, i) => {
            if (i === ansInd) {
              return {
                ...option,
                questionOption: e?.target?.value,
              };
            }
            return option;
          }),
        };
      }
      return item;
    });
    setMainQue(onChangeDtaa);
  };
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <form action="" className="w-70 m-auto ">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter title"
                name="title"
                // value={}
              />
            </div>

            <div className="form-group mt-3">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter description"
                name="desc"
              />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputEmail1"
                name="date"
              />
            </div>

            {mainQue?.map((item, index) => {
              console.log("jixfhf", index);
              console.log(item.ansOptions, "147852369582");

              return (
                <div key={index}>
                  <div className="main border border-2  mt-5 p-5">
                    <div className="form-group ">
                      <h3>Question No.{index + 1}</h3>
                      <input
                        type="text"
                        className="form-control "
                        id="exampleInputEmail1"
                        placeholder="Enter question"
                        name="question"
                        value={item?.question}
                        onChange={(e) => handleData(e, index)}
                      />
                    </div>
                    <div className="mt-5 d-flex justify-content-between align-items-center">
                      <div className="form-group mt-4">
                        <label>Question Type </label>
                        <select
                          className="custom-select"
                          name="question_type"
                          onChange={(e) => handleChangeRadioButton(e, index)}
                        >
                          <option value="single">Single</option>
                          <option value="multiple">Multiple</option>
                        </select>
                      </div>

                      <div>
                        {index > 0 ? (
                          <button
                            className="btn btn-outline-danger mt-4"
                            onClick={(e) => {
                              e.preventDefault();
                              handleDelete(index);
                            }}
                          >
                            Delete Question
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {item?.ansOptions?.map((ele, ind) => {
                      // debugger;
                      console.log(ele, "65465146");
                      console.log("hvg", ind);
                      console.log("dsdsdsd", index);
                      // console.log(findIndex);
                      console.log(
                        "jinhuiwrgwrg",
                        typeof mainQue[mainQue.length - 1].btn
                      );
                      return (
                        <div key={ind}>
                          <div className="d-flex justify-content-between align-items-center mt-5 ">
                            <div>
                              <input
                                className="form-control"
                                type="text"
                                onChange={(e) => {
                                  handleAnswerOption(e, index, ind);
                                }}
                                placeholder="Add Answer Option"
                                name="ansOptions"
                                value={ele?.questionOption}
                              />
                              <label
                                className="form-label"
                                htmlFor="defaultCheck1"
                              >
                                Answer{ind + 1}
                              </label>
                            </div>
                            {mainQue[index].btn == "multiple" ? (
                              <div className="" style={{ marginLeft: "240px" }}>
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                  name={`flexRadioDefault${index}`}
                                  id={`flexCheckDefault${index}${ind}`}
                                />
                                <label
                                  className="form-check-label ms-1"
                                  htmlFor={`flexCheckDefault${index}${ind}`}
                                >
                                  Select Answer
                                </label>
                              </div>
                            ) : (
                              <>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name={`flexRadioDefault${index}`}
                                    id={`flexRadioDefault${index}${ind}`}
                                  />
                                  <label
                                    className="form-check-label"
                                    for={`flexRadioDefault${index}${ind}`}
                                  >
                                    Select Answer
                                  </label>
                                </div>
                              </>
                            )}
                            {ind != 0 ? (
                              <>
                                <button
                                  className="btn btn-outline-danger "
                                  onClick={(e) => {
                                    e.preventDefault();

                                    handleChildDelete(index, ind);
                                  }}
                                >
                                  Delete
                                </button>
                              </>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      );
                    })}

                    {mainQue[index].len == true ? (
                      <>
                        <button
                          className="btn btn-outline-primary mt-3"
                          onClick={(e) => handleclick(e, index)}
                        >
                          Add New Option
                        </button>
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              );
            })}
            <div className="btn-add-question mt-3 d-flex ">
              <button
                className="btn btn-outline-info ms-auto"
                onClick={handleMain}
              >
                Add New Question
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Quiz;
