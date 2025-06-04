function chekingType(variable) {
    let valueSpanClass;
  
    switch (typeof variable) {
      case 1:
        valueSpanClass = "number";
        break;
      case "string":
        valueSpanClass = "string";
        break;
      case true:
        valueSpanClass = "boolean";
        break;
      case "object":
        valueSpanClass = "null";
        break;
      default:
        valueSpanClass = "string";
        break;
    }
    console.log(typeof variable);
  
    // if (typeof innerValue === 1) {
    //   console.log("asd");
    // } else if (typeof innerValue === "") {
    //   console.log("asd");
    //   valueSpanClass = "string";
    // } else if (typeof innerValue === true) {
    //   console.log("asd");
    //   valueSpanClass = "boolean";
    // } else if (typeof innerValue === "object") {
    //   console.log("asd");
    //   valueSpanClass = "null";
    // }
    return valueSpanClass;
  }



  function creatinJsonStructure(obj) {
    let title = {
      tagName: "p",
      className: "title",
      isWrapper: false,
      childNodes: null,
      text: "",
    };
    let keyEl = {
      tagName: "span",
      className: "key",
      isWrapper: false,
      childNodes: null,
      text: "",
    };
    let childeEl = {
      tagName: "span",
      className: "",
      isWrapper: false,
      childNodes: null,
      text: "",
    };
    let params = {
      tagName: "div",
      className: "keyValueBlock",
      isWrapper: true,
      childNodes: null,
      text: "",
    };
  
    let paramsInner = {
      tagName: "div",
      className: "keyValueBlockInner",
      isWrapper: true,
      childNodes: null,
      text: "",
    };
  
    for (let [key, value] of Object.entries(obj)) {
      if (isNaN(key)) {
        if (typeof value !== "object") {
          keyEl.text = key + ": ";
  
          childeEl.className = typeof value;
          childeEl.text = value;
  
          params.childNodes = new Array();
  
          params.childNodes[0] = createElementCustom(keyEl);
          params.childNodes[1] = createElementCustom(childeEl);
        } else {
          params.childNodes = new Array();
          title.text = key;
          params.childNodes[0] = createElementCustom(title);
  
          for (let [innerKey, innerValue] of Object.entries(obj[key])) {
            if (typeof innerValue !== "object") {
              keyEl.text = innerKey + ": ";
  
              childeEl.className = typeof innerValue;
              childeEl.text = innerValue;
  
              paramsInner.childNodes = new Array();
  
              paramsInner.childNodes[0] = createElementCustom(keyEl);
              paramsInner.childNodes[1] = createElementCustom(childeEl);
  
              let parentInnerEl = createElementCustom(paramsInner);
  
              params.childNodes.push(parentInnerEl);
            } else {
              creatinJsonStructure(obj[key][innerKey]);
            }
          }
        }
      } else {
        creatinJsonStructure(obj[key]);
      }
  
      let parentEl = createElementCustom(params);
  
      pre.append(parentEl);
    }
  }