chrome.storage.sync.get(
    { settingJSON : '[]' },
    (items) => {
        const setting_json = JSON.parse(items.settingJSON);

        for (let i in setting_json) {
            const site = setting_json[i]['site'];

            if (location.host !== site) {
                continue;
            }

            const titles = setting_json[i]['title'];

            ell = document.getElementsByTagName("a");

            for (let entry of ell) {
                for (let title of titles) {
                    if (entry.innerText.includes(title)) {
                        entry.innerText = "+++" + entry.innerText;
                        break;
                    }
                }
            }
        }
    }
);

if (false)
{
ell = document.getElementsByTagName("a");

a = [];
for (let element of ell) {
    a.push(element);
}

target_node = [
    'H1',
    'H2',
    'H3',
    'H4',
    'H5',
    'H6',
    'A'
];

for (let element of a) {
    if (a.length > 10000) {
        break;
    }

    if (element.childElementCount > 0) {
        for (let i=0; i<element.childElementCount; i++) {
            a.push(element.childNodes[i]);
        }
        continue;
    }

    console.log("node name +++" + element.nodeName);
    if (target_node.includes(element.nodeName)) {
        console.log("+++" + element.innerHTML);
        element.innerText = "+++" + element.innerText;
    }
    // console.log(element.innerText);
}
}