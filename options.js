// Saves options to chrome.storage
const saveOptions = () => {
    const settingJSON = document.getElementById('setting_json').value;

    chrome.storage.sync.set(
        { settingJSON: settingJSON },
        () => {
            // Update status to let user know options were saved.
            const status = document.getElementById('status');
            status.textContent = 'Options saved.';
            setTimeout(() => {
                status.textContent = '';
            }, 750);
        }
    );
};

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
const restoreOptions = () => {
    chrome.storage.sync.get(
        { settingJSON: "Setting in JSON" },
        (items) => {
            document.getElementById('setting_json').value = items.settingJSON;
        }
    );
};

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);