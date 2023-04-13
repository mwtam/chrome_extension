target_node = [
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'A'
];

function mark_titles(titles) {
    anchor_elements = document.getElementsByTagName("a");

    element_array = [];
    for (let element of anchor_elements) {
        element_array.push(element);
    }

    for (let element of element_array) {
        if (element_array.length > 10000) {
            console.log("Too many elements");
            break;
        }

        if (element.childElementCount > 0) {
            for (let i = 0; i < element.childElementCount; i++) {
                element_array.push(element.childNodes[i]);
            }

            continue;
        }

        if (target_node.includes(element.nodeName)) {
            for (let title of titles) {
                if (element.innerText.includes(title)) {
                    element.innerText = "+++" + element.innerText;
                    break;
                }
            }
        }
    }

}

chrome.storage.sync.get(
    { settingJSON: '[]' },
    (items) => {
        const setting_json = JSON.parse(items.settingJSON);

        for (let i in setting_json) {
            const site = setting_json[i]['site'];

            if (location.host !== site) {
                continue;
            }

            const titles = setting_json[i]['title'];
            mark_titles(titles);
        }
    }
);
