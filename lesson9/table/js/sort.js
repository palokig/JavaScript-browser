'use strict';

function handleTableClick(event) {

    if (event.target.tagName === "TH") {
        event.currentTarget.dataset.sortBy = event.target.dataset.propName;
        if (event.target.dataset.dataDir == '-1') {
            event.target.dataset.dataDir = 1;
        } else {
            event.target.dataset.dataDir = -1;
        }
        sortTable(event.target.dataset.propName,event.target.dataset.dataDir);
    }
}
