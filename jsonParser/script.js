let pre = document.getElementById("pre");

let urlInput = document.getElementById("url");

let btn = document.getElementById("send");


btn.addEventListener("click", () => getFile(urlInput.value))

async function getFile(link, init) {
  let res = await fetch(link, {
    method: init ? init.method : "GET", // *GET, POST, PUT, DELETE, etc.
    headers: init ? init.header : { 'Content-Type': 'aplication/json' },
    body: init ? JSON.stringify(init.data) : null // body data type must match "Content-Type" header
  });

  if (!res.ok) {
    console.log(res)
    return;
  }
  let res_json = await res.json();
  console.table(res_json);

  let separator = {
    tagName: "div",
    className: "separator",
    isWrapper: false,
    childNodes: [],
    text: ""
  };
  if (Array.isArray(res_json)) {
    res_json.map((obj) => {
      showEditedJson(obj);
      pre.append(createElementCustom(separator));
    });
  } else {
    showEditedJson(res_json);
  }

  let asd = document.querySelectorAll("div.keyValueBlock");
  asd.forEach((element) => {
    if (element.childElementCount == 0) {
      element.remove();
    }
  });
}

/**
 *
 * @param {*params.tagName}   Name of the created tag
 * @param {*params.className} Tag class
 * @param {*params.isWrapper} Boolean that mean is inner parent node or child
 * @param {*prams.childNode} Child node
 * @param {}
 */
function createElementCustom(params) {
  let element = document.createElement(params.tagName);
  element.classList.add(params.className || "noClass");
  if (params.isWrapper && params.childNodes) {
    if (Array.isArray(params.childNodes)) {
      params.childNodes.forEach((el) => {
        element.appendChild(el);
      });
    } else {
      element.appendChild(params.childNodes);
    }
    return element;
  }
  element.innerText = params.text;
  return element;
}

/**
 *
 */
let wrapperKey = "";

/**
 *
 * @param {*} obj
 * @param {*} isWrapperBlock
 */
function showEditedJson(obj, isWrapperBlock = false) {
  let title = {
    tagName: "p",
    className: "title",
    isWrapper: false,
    childNodes: null,
    text: null,
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
    childNodes: [],
    text: "",
  };

  let paramsInner = {
    tagName: "div",
    className: "keyValueBlock",
    isWrapper: true,
    childNodes: [],
    text: "",
  };

  for (let [key, value] of Object.entries(obj)) {
    if (
      key == "id" ||
      isNaN(key) && (
      typeof value === "string" 
      || typeof parseInt(value) === Infinity)
    ) {
      keyEl.text = key + ": ";

      childeEl.className = typeof value;
      childeEl.text = value;

      params.childNodes = new Array();

      if (isWrapperBlock) {
        title.text = wrapperKey;
        paramsInner.childNodes[0] = createElementCustom(keyEl);
        paramsInner.childNodes[1] = createElementCustom(childeEl);

        params.childNodes[0] = createElementCustom(title);
        params.childNodes[1] = createElementCustom(paramsInner);
      } else {
        params.childNodes[0] = createElementCustom(keyEl);
        params.childNodes[1] = createElementCustom(childeEl);
      }
    } else {
      wrapperKey = wrapperKey + "." + key;
      showEditedJson(obj[key], true);
      wrapperKey = "";
    }

    let parenrEl = createElementCustom(params);
    pre.append(parenrEl);
  }
}
