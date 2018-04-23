
Usage
====
```javascript
document.addEventListener('deviceready', onDeviceReady);
function onDeviceReady()
{
        var success = function(status) {
            alert('Message: ' + status);
        }

        var error = function(status) {
            alert('Error: ' + status);
        }

        window.ClearData.clear( success, error );
}
```
