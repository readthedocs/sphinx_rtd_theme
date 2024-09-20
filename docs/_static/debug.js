// Add debug actions to flyout menu

$(function () {
  $("[data-toggle='rst-debug-badge']").on("click", function () {
    $("[data-toggle='rst-versions']").toggleClass("rst-badge");
  });
});


const EVENT_READTHEDOCS_ADDONS_DATA_READY = "readthedocs-addons-data-ready";

fetch("_static/addons.mocked.json", { method: "GET" })
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error downloading Read the Docs Addons mocked data");
    }
    return response.json();
  })
  .then((data) => {
    return dispatchEvent(
      EVENT_READTHEDOCS_ADDONS_DATA_READY,
      new ReadTheDocsEventData(data),
    );
  });


// ``ReadTheDocsEventData`` and ``dispatchEvent``
// are borrowed and adapted from Read the Docs Addons.
// https://github.com/readthedocs/addons
class ReadTheDocsEventData {
  constructor(data) {
    this._data = data;
  }

  data() {
    return this._data;
  }
}

function dispatchEvent(eventName, data) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}
