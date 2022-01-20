function test() {
    function assignIP(ip, index) {
        function update(text, elem) {
            elem.value = '';
            elem.focus()
    
            document.execCommand('insertText', false, text);
        }
    
    
        const table = document.querySelectorAll('.azc-grid-full tbody.azc-grid-editableRow-addSection')[0];
    
        const inputs = table.querySelectorAll('tr:first-child input')
    
        const ruleName = inputs[0];
        const startIp = inputs[1];
        const endIP = inputs[2];
    
        update(`voltron_nat_ip_${index}`, ruleName);
        update(ip, startIp);
        update(ip, endIP);
    
        ['blur', 'change', 'focus', 'input', 'keydown', 'pseudoblur', 'pseudofocus'].forEach(event => {
                console.log("Dispatching", event);
                $(endIP).trigger(event)
            }); 
    }

    document.querySelector('li[title="Add client IP"] div').click()

}

