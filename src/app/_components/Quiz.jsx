import React, { useEffect, useState } from "react";

const defaultVal = {
  question: "",
  btn: "single",
  ansOptions: [""],
};
function Quiz() {
  const [mul, setMul] = useState(false);
  const [que, setQue] = useState([]);
  const [mainQue, setMainQue] = useState([]);
  console.log(mainQue, "mainqueuue");
  const [len, setLen] = useState(true);
  const [radio, setRadio] = useState(defaultVal.btn);

  console.log(radio);

  useEffect(() => {
    setQue([...que, Number(...(que + 1))]);
    setMainQue([...mainQue, defaultVal]);
    console.log("ased", que);
  }, []);

  const handleMain = (e) => {
    e.preventDefault();
    setMainQue([...mainQue, defaultVal]);
    console.log("bgytfth", mainQue);
  };

  const handleclick = (e, index) => {
    e.preventDefault();

    // setQue([...que, Number(...(que + 1))]);
    // console.log("bth", que);

    console.log(mainQue[mainQue.length - 1].ansOptions.length);
    console.log(mainQue);

    setRadio(mainQue[mainQue.length - 1].ansOptions.length);

    if (que.length == 4) {
      setLen(false);
    }
    const newQueue = [...mainQue]?.map((que, i) => {
      if (index === i) {
        return {
          ...que,
          ansOptions: [...que.ansOptions, ""],
        };
      }
      return que;
    });
    setMainQue([...newQueue]);
  };
  return (
    <>
      <section className="bg-light py-5">
        <div className="container">
          <form action="" className="w-50 m-auto ">
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter title"
                name="title"
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

            {mainQue.map((item, index) => {
              console.log("jixfhf", index);
              return (
                <div key={index}>
                  <div className="mt-5 d-flex justify-content-between align-items-center">
                    <div className="form-group ">
                      <label>Question No.{index + 1}</label>
                      <input
                        type="text"
                        className="form-control "
                        id="exampleInputEmail1"
                        placeholder="Enter question"
                        name="question"
                      />
                    </div>
                    <div className="form-group mt-4">
                      <label>Question Type </label>
                      <select
                        className="custom-select"
                        name="question_type"
                        onChange={(e) => {
                          if (e.target.value == "multiple") {
                            setRadio("multiple");
                          } else {
                            setMainQue([
                              ...mainQue,
                              (mainQue[index].btn = "single"),
                            ]);
                            setRadio("single");
                          }
                          console.log("ssas", radio);
                        }}
                      >
                        <option value="single" defaultValue>
                          Single
                        </option>
                        <option value="multiple">Multiple</option>
                      </select>
                    </div>
                  </div>

                  {item?.ansOptions?.map((item, ind) => {
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
                              value=""
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
                                id="defaultCheck1"
                              />
                              <label
                                className="form-check-label ms-1"
                                htmlFor="defaultCheck1"
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
                                  name={`name_${index}`}
                                  id="exampleRadios1"
                                  value="opation 1"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="exampleRadios1"
                                >
                                  Select Answer
                                </label>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {len ? (
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
